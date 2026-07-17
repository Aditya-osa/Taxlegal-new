<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\Blog;
use App\Services\BlogService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogListingManagementTest extends TestCase
{
    use RefreshDatabase;

    protected Admin $admin;
    protected BlogService $service;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = Admin::create([
            'name' => 'Admin User',
            'email' => 'admin@taxlegal.test',
            'password' => bcrypt('password123'),
        ]);
        $this->service = new BlogService();
    }

    public function test_sorting_options_preserve_filters(): void
    {
        $this->actingAs($this->admin, 'admin');

        $b1 = $this->service->create(['title' => 'Zebra Post', 'content' => 'c', 'status' => 'published']);
        sleep(1);
        $b2 = $this->service->create(['title' => 'Alpha Post', 'content' => 'c', 'status' => 'published']);
        sleep(1);
        $b3 = $this->service->create(['title' => 'Beta Draft', 'content' => 'c', 'status' => 'draft']);

        // Default newest first
        $resNewest = $this->get(route('admin.blogs.index'));
        $resNewest->assertOk();
        $itemsNewest = $resNewest->viewData('blogs')->items();
        $this->assertEquals($b3->id, $itemsNewest[0]->id);
        $this->assertEquals($b2->id, $itemsNewest[1]->id);
        $this->assertEquals($b1->id, $itemsNewest[2]->id);

        // Oldest first
        $resOldest = $this->get(route('admin.blogs.index', ['sort' => 'oldest']));
        $resOldest->assertOk();
        $itemsOldest = $resOldest->viewData('blogs')->items();
        $this->assertEquals($b1->id, $itemsOldest[0]->id);

        // Title A -> Z
        $resTitleAsc = $this->get(route('admin.blogs.index', ['sort' => 'title_asc']));
        $resTitleAsc->assertOk();
        $itemsAsc = $resTitleAsc->viewData('blogs')->items();
        $this->assertEquals('Alpha Post', $itemsAsc[0]->title);
        $this->assertEquals('Beta Draft', $itemsAsc[1]->title);
        $this->assertEquals('Zebra Post', $itemsAsc[2]->title);

        // Title Z -> A preserving status=published filter
        $resTitleDesc = $this->get(route('admin.blogs.index', ['status' => 'published', 'sort' => 'title_desc']));
        $resTitleDesc->assertOk();
        $itemsDesc = $resTitleDesc->viewData('blogs')->items();
        $this->assertCount(2, $itemsDesc);
        $this->assertEquals('Zebra Post', $itemsDesc[0]->title);
        $this->assertEquals('Alpha Post', $itemsDesc[1]->title);
    }

    public function test_filtering_by_status_and_date_ranges_together(): void
    {
        $this->actingAs($this->admin, 'admin');

        $oldDate = now()->subDays(10);
        $recentDate = now()->subDays(2);

        $b1 = Blog::create([
            'title' => 'Old Published',
            'slug' => 'old-pub',
            'content' => 'c',
            'status' => 'published',
            'published_at' => $oldDate,
            'created_by' => $this->admin->id,
            'updated_by' => $this->admin->id,
        ]);
        $b1->created_at = $oldDate;
        $b1->saveQuietly();

        $b2 = Blog::create([
            'title' => 'Recent Published',
            'slug' => 'rec-pub',
            'content' => 'c',
            'status' => 'published',
            'published_at' => $recentDate,
            'created_by' => $this->admin->id,
            'updated_by' => $this->admin->id,
        ]);
        $b2->created_at = $recentDate;
        $b2->saveQuietly();

        $b3 = Blog::create([
            'title' => 'Recent Draft',
            'slug' => 'rec-draft',
            'content' => 'c',
            'status' => 'draft',
            'created_by' => $this->admin->id,
            'updated_by' => $this->admin->id,
        ]);
        $b3->created_at = $recentDate;
        $b3->saveQuietly();

        // Filter created_from recentDate
        $resCreated = $this->get(route('admin.blogs.index', [
            'created_from' => $recentDate->format('Y-m-d'),
        ]));
        $resCreated->assertOk();
        $this->assertEquals(2, $resCreated->viewData('blogs')->total());

        // Filter published_from oldDate to oldDate + 1 day with status=published
        $resPublishedRange = $this->get(route('admin.blogs.index', [
            'status' => 'published',
            'published_from' => $oldDate->format('Y-m-d'),
            'published_to' => $oldDate->copy()->addDay()->format('Y-m-d'),
        ]));
        $resPublishedRange->assertOk();
        $items = $resPublishedRange->viewData('blogs')->items();
        $this->assertCount(1, $items);
        $this->assertEquals($b1->id, $items[0]->id);

        // Filter status=unpublished
        $resUnpublished = $this->get(route('admin.blogs.index', ['status' => 'unpublished']));
        $resUnpublished->assertOk();
        $unpubItems = $resUnpublished->viewData('blogs')->items();
        $this->assertCount(1, $unpubItems);
        $this->assertEquals($b3->id, $unpubItems[0]->id);
    }

    public function test_quick_actions_publish_and_move_to_draft(): void
    {
        $this->actingAs($this->admin, 'admin');

        $blog = $this->service->create(['title' => 'Quick Action Test', 'content' => 'c', 'status' => 'draft']);
        $this->assertNull($blog->published_at);

        // Quick publish
        $resPublish = $this->patch(route('admin.blogs.updateStatus', $blog), ['status' => 'published']);
        $resPublish->assertRedirect()->assertSessionHas('success', 'Blog published successfully.');
        $blog->refresh();
        $this->assertEquals('published', $blog->status);
        $this->assertNotNull($blog->published_at);

        // Quick draft
        $resDraft = $this->patch(route('admin.blogs.updateStatus', $blog), ['status' => 'draft']);
        $resDraft->assertRedirect()->assertSessionHas('success', 'Blog moved to draft.');
        $blog->refresh();
        $this->assertEquals('draft', $blog->status);
    }

    public function test_admin_preview_page_and_copy_buttons(): void
    {
        $this->actingAs($this->admin, 'admin');

        $blog = $this->service->create([
            'title' => 'Preview Title',
            'content' => '<p><strong>CKEditor</strong> Content</p>',
            'excerpt' => 'Preview Excerpt',
            'status' => 'published',
            'seo_title' => 'SEO Title Match',
            'seo_description' => 'SEO Desc Match',
            'seo_keywords' => 'keyword1, keyword2',
        ]);

        $res = $this->get(route('admin.blogs.preview', $blog));
        $res->assertOk();
        $res->assertSee('Admin Blog Preview (Read-Only)');
        $res->assertSee('<p><strong>CKEditor</strong> Content</p>', false);
        $res->assertSee('Preview Title');
        $res->assertSee('SEO Title Match');
        $res->assertSee('SEO Desc Match');
        $res->assertSee('keyword1, keyword2');

        // Check copy buttons inside preview
        $res->assertSee('data-copy="' . $blog->slug . '"', false);
        $res->assertSee('data-copy="SEO Title Match"', false);
        $res->assertSee('data-copy="SEO Desc Match"', false);
    }

    public function test_table_ux_and_search_highlighting(): void
    {
        $this->actingAs($this->admin, 'admin');

        $blog = $this->service->create([
            'title' => 'Highlight Me Please',
            'content' => 'c',
            'status' => 'draft',
            'seo_title' => 'SEO High',
        ]);

        // Search for "Highlight"
        $res = $this->get(route('admin.blogs.index', ['search' => 'Highlight']));
        $res->assertOk();
        $res->assertSee('<mark style="background:#fff3cd;color:#856404;padding:0 2px;border-radius:2px;">Highlight</mark>', false);

        // Check clickable row
        $res->assertSee('class="clickable-row"', false);
        $res->assertSee('data-edit-url="' . route('admin.blogs.edit', $blog) . '"', false);

        // Check thumbnail placeholder SVG when no image
        $res->assertSee('title="No thumbnail"', false);
        
        // Check copy buttons in listing
        $res->assertSee('data-copy="' . $blog->slug . '"', false);
    }
}
