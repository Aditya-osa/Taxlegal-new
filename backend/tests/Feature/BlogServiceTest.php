<?php

namespace Tests\Feature;

use App\Models\Blog;
use App\Services\BlogService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BlogServiceTest extends TestCase
{
    use RefreshDatabase;

    protected BlogService $service;

    protected function setUp(): void
    {
        parent::setUp();
        $this->service = new BlogService();
    }

    public function test_create_and_slug_uniqueness(): void
    {
        $blog1 = $this->service->create([
            'title' => 'Tax and Legal Guide',
            'content' => 'Content 1',
            'status' => 'draft',
        ]);

        $this->assertEquals('tax-and-legal-guide', $blog1->slug);

        $blog2 = $this->service->create([
            'title' => 'Tax and Legal Guide',
            'content' => 'Content 2',
            'status' => 'draft',
        ]);

        $this->assertEquals('tax-and-legal-guide-1', $blog2->slug);
    }

    public function test_image_handling_and_delete_behavior(): void
    {
        Storage::fake('public');

        $file = UploadedFile::fake()->create('blog.jpg', 100, 'image/jpeg');

        $blog = $this->service->create([
            'title' => 'Image Test',
            'content' => 'Content with image',
            'status' => 'draft',
            'image' => $file,
        ]);

        $this->assertNotNull($blog->image);
        Storage::disk('public')->assertExists($blog->image);

        // Soft delete should NOT delete image
        $this->service->delete($blog);
        $this->assertSoftDeleted('blogs', ['id' => $blog->id]);
        Storage::disk('public')->assertExists($blog->image);

        // Restore
        $this->service->restore($blog);
        $this->assertDatabaseHas('blogs', ['id' => $blog->id, 'deleted_at' => null]);
        Storage::disk('public')->assertExists($blog->image);

        // Force delete SHOULD delete image
        $this->service->forceDelete($blog);
        $this->assertDatabaseMissing('blogs', ['id' => $blog->id]);
        Storage::disk('public')->assertMissing($blog->image);
    }

    public function test_update_behavior(): void
    {
        $blog = $this->service->create([
            'title' => 'Original Title',
            'content' => 'Original Content',
            'status' => 'draft',
        ]);

        $this->assertNull($blog->published_at);

        $updated = $this->service->update($blog, [
            'status' => 'published',
        ]);

        $this->assertEquals('published', $updated->status);
        $this->assertNotNull($updated->published_at);
    }

    public function test_get_paginated_and_find(): void
    {
        $b1 = $this->service->create([
            'title' => 'Searchable Laravel Guide',
            'content' => 'Content here',
            'status' => 'published',
        ]);
        $b2 = $this->service->create([
            'title' => 'Other Topic',
            'content' => 'Nothing special',
            'status' => 'draft',
        ]);

        $paginated = $this->service->getPaginated('Laravel');
        $this->assertEquals(1, $paginated->total());
        $this->assertEquals($b1->id, $paginated->items()[0]->id);

        $drafts = $this->service->getPaginated(null, 'draft');
        $this->assertEquals(1, $drafts->total());
        $this->assertEquals($b2->id, $drafts->items()[0]->id);

        $found = $this->service->find($b1->id);
        $this->assertEquals($b1->id, $found->id);
    }

    public function test_update_image_replacement_and_slug_ignore(): void
    {
        Storage::fake('public');

        $file1 = UploadedFile::fake()->create('old.jpg', 100, 'image/jpeg');
        $blog = $this->service->create([
            'title' => 'Unique Title',
            'content' => 'Some content',
            'status' => 'draft',
            'image' => $file1,
        ]);

        $oldImage = $blog->image;
        Storage::disk('public')->assertExists($oldImage);

        $file2 = UploadedFile::fake()->create('new.jpg', 100, 'image/jpeg');
        $updated = $this->service->update($blog, [
            'image' => $file2,
            'slug' => 'unique-title', // same slug supplied manually
        ]);

        $this->assertEquals('unique-title', $updated->slug);
        $this->assertNotEquals($oldImage, $updated->image);
        Storage::disk('public')->assertExists($updated->image);
        Storage::disk('public')->assertMissing($oldImage);
    }

    public function test_search_across_all_fields(): void
    {
        $bTitle = $this->service->create(['title' => 'Alpha Match', 'content' => 'c', 'status' => 'draft']);
        $bExcerpt = $this->service->create(['title' => 't2', 'excerpt' => 'Beta Match', 'content' => 'c', 'status' => 'draft']);
        $bContent = $this->service->create(['title' => 't3', 'content' => 'Gamma Match inside', 'status' => 'draft']);
        $bSeoTitle = $this->service->create(['title' => 't4', 'content' => 'c', 'status' => 'draft', 'seo_title' => 'Delta Match']);
        $bSeoKeywords = $this->service->create(['title' => 't5', 'content' => 'c', 'status' => 'draft', 'seo_keywords' => 'Epsilon Match']);

        $this->assertEquals(1, $this->service->getPaginated('Alpha')->total());
        $this->assertEquals(1, $this->service->getPaginated('Beta')->total());
        $this->assertEquals(1, $this->service->getPaginated('Gamma')->total());
        $this->assertEquals(1, $this->service->getPaginated('Delta')->total());
        $this->assertEquals(1, $this->service->getPaginated('Epsilon')->total());
    }

    public function test_status_filter_on_active_and_trashed(): void
    {
        $b1 = $this->service->create(['title' => 'Active Draft', 'content' => 'c', 'status' => 'draft']);
        $b2 = $this->service->create(['title' => 'Active Pub', 'content' => 'c', 'status' => 'published']);
        $b3 = $this->service->create(['title' => 'Trashed Draft', 'content' => 'c', 'status' => 'draft']);
        $b4 = $this->service->create(['title' => 'Trashed Pub', 'content' => 'c', 'status' => 'published']);

        $this->service->delete($b3);
        $this->service->delete($b4);

        $this->assertEquals(1, $this->service->getPaginated(null, 'draft')->total());
        $this->assertEquals(1, $this->service->getPaginated(null, 'published')->total());
        $this->assertEquals(1, $this->service->getTrashedPaginated(null, 'draft')->total());
        $this->assertEquals(1, $this->service->getTrashedPaginated(null, 'published')->total());
    }

    public function test_admin_relationships(): void
    {
        $admin = \App\Models\Admin::create([
            'name' => 'Admin Tester',
            'email' => 'admin@test.local',
            'password' => bcrypt('password'),
        ]);

        $blog = $this->service->create([
            'title' => 'Rel Test',
            'content' => 'c',
            'status' => 'draft',
            'created_by' => $admin->id,
            'updated_by' => $admin->id,
        ]);

        $this->assertEquals($admin->id, $blog->createdBy->id);
        $this->assertEquals($admin->id, $blog->updatedBy->id);
        $this->assertTrue($admin->blogsCreated->contains($blog));
        $this->assertTrue($admin->blogsUpdated->contains($blog));
    }
}

