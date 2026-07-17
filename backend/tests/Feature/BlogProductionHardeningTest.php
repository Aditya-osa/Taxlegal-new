<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\Blog;
use App\Services\BlogService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BlogProductionHardeningTest extends TestCase
{
    use RefreshDatabase;

    protected Admin $admin;
    protected BlogService $blogService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = Admin::create([
            'name' => 'Security Admin',
            'email' => 'sec@taxlegal.in',
            'password' => bcrypt('password123'),
        ]);
        $this->blogService = app(BlogService::class);
    }

    public function test_route_protection_and_authorization(): void
    {
        $blog = Blog::create([
            'title' => 'Protected Blog',
            'slug' => 'protected-blog',
            'content' => 'Protected content',
            'status' => 'draft',
        ]);

        // Unauthenticated attempts
        $this->get(route('admin.blogs.index'))->assertRedirect(route('admin.login'));
        $this->get(route('admin.blogs.trash'))->assertRedirect(route('admin.login'));
        $this->get(route('admin.blogs.create'))->assertRedirect(route('admin.login'));
        $this->post(route('admin.blogs.store'), ['title' => 'Hack', 'content' => 'Hack'])->assertRedirect(route('admin.login'));
        $this->get(route('admin.blogs.edit', $blog))->assertRedirect(route('admin.login'));
        $this->put(route('admin.blogs.update', $blog), ['title' => 'Hack', 'content' => 'Hack'])->assertRedirect(route('admin.login'));
        $this->patch(route('admin.blogs.updateStatus', $blog), ['status' => 'published'])->assertRedirect(route('admin.login'));
        $this->delete(route('admin.blogs.destroy', $blog))->assertRedirect(route('admin.login'));

        $blog->delete();
        $this->post(route('admin.blogs.restore', $blog))->assertRedirect(route('admin.login'));
        $this->delete(route('admin.blogs.forceDelete', $blog))->assertRedirect(route('admin.login'));
    }

    public function test_slug_generation_edge_cases(): void
    {
        // Special characters and leading/trailing whitespace
        $blog1 = $this->blogService->create([
            'title' => '  Hello! @World #2026?  ',
            'content' => 'Content',
            'status' => 'draft',
        ]);
        $this->assertEquals('hello-at-world-2026', $blog1->slug);

        $blog2 = $this->blogService->create([
            'title' => 'Hello World 2026',
            'content' => 'Content 2',
            'status' => 'draft',
        ]);
        $this->assertEquals('hello-world-2026', $blog2->slug);

        $blog3 = $this->blogService->create([
            'title' => 'Hello World 2026',
            'content' => 'Content 3',
            'status' => 'draft',
        ]);
        $this->assertEquals('hello-world-2026-1', $blog3->slug);

        $blog4 = $this->blogService->create([
            'title' => 'Hello World 2026',
            'content' => 'Content 4',
            'status' => 'draft',
        ]);
        $this->assertEquals('hello-world-2026-2', $blog4->slug);
    }

    public function test_image_validation_rejection_and_stats_calculation(): void
    {
        Storage::fake('public');

        // Invalid file extension
        $txtFile = UploadedFile::fake()->create('malicious.txt', 100, 'text/plain');
        $response = $this->actingAs($this->admin, 'admin')
            ->post(route('admin.blogs.store'), [
                'title' => 'Bad Image Blog',
                'content' => 'Valid content',
                'status' => 'draft',
                'image' => $txtFile,
            ]);

        $response->assertSessionHasErrors(['image']);

        // Verify getStats accurately aggregates across status and soft deletes
        Blog::create(['title' => 'Pub 1', 'slug' => 'pub-1', 'content' => 'c', 'status' => 'published']);
        Blog::create(['title' => 'Pub 2', 'slug' => 'pub-2', 'content' => 'c', 'status' => 'published']);
        Blog::create(['title' => 'Draft 1', 'slug' => 'draft-1', 'content' => 'c', 'status' => 'draft']);
        
        $trashed = Blog::create(['title' => 'Trash 1', 'slug' => 'trash-1', 'content' => 'c', 'status' => 'draft']);
        $trashed->delete();

        $stats = $this->blogService->getStats();
        $this->assertEquals(3, $stats['total']);
        $this->assertEquals(2, $stats['published']);
        $this->assertEquals(1, $stats['draft']);
        $this->assertEquals(1, $stats['trashed']);
    }

    public function test_status_transitions_and_quick_publish(): void
    {
        $blog = Blog::create([
            'title' => 'Status Test',
            'slug' => 'status-test',
            'content' => 'Testing status change',
            'status' => 'draft',
        ]);

        $this->assertNull($blog->published_at);

        // Move to published via updateStatus
        $this->actingAs($this->admin, 'admin')
            ->patch(route('admin.blogs.updateStatus', $blog), ['status' => 'published'])
            ->assertRedirect();

        $blog->refresh();
        $this->assertEquals('published', $blog->status);
        $this->assertNotNull($blog->published_at);

        // Move back to draft
        $this->actingAs($this->admin, 'admin')
            ->patch(route('admin.blogs.updateStatus', $blog), ['status' => 'draft'])
            ->assertRedirect();

        $blog->refresh();
        $this->assertEquals('draft', $blog->status);
    }
}
