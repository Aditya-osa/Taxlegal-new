<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\Blog;
use App\Services\BlogService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicBlogControllerTest extends TestCase
{
    use RefreshDatabase;

    protected BlogService $blogService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->blogService = app(BlogService::class);
    }

    public function test_published_blog_accessible(): void
    {
        $published = $this->blogService->create([
            'title' => 'Public Published Blog',
            'content' => 'Full published content here.',
            'status' => 'published',
            'published_at' => now()->subDay(),
        ]);

        $responseIndex = $this->get(route('blogs.index'));
        $responseIndex->assertOk();

        $responseShow = $this->get(route('blogs.show', $published->slug));
        $responseShow->assertOk();
    }

    public function test_draft_blog_returns_404(): void
    {
        $draft = $this->blogService->create([
            'title' => 'Draft Blog Title',
            'content' => 'Not ready for public yet.',
            'status' => 'draft',
        ]);

        $response = $this->get(route('blogs.show', $draft->slug));
        $response->assertNotFound();
    }

    public function test_deleted_blog_returns_404(): void
    {
        $published = $this->blogService->create([
            'title' => 'Soon To Be Deleted',
            'content' => 'Will be trashed.',
            'status' => 'published',
            'published_at' => now()->subDay(),
        ]);

        $this->blogService->delete($published);

        $response = $this->get(route('blogs.show', $published->slug));
        $response->assertNotFound();
    }

    public function test_invalid_slug_returns_404(): void
    {
        $response = $this->get(route('blogs.show', 'non-existent-slug-abc-xyz'));
        $response->assertNotFound();
    }

    public function test_future_scheduled_blog_returns_404(): void
    {
        $scheduled = $this->blogService->create([
            'title' => 'Future Scheduled Blog',
            'content' => 'Coming soon next week.',
            'status' => 'published',
            'published_at' => now()->addDays(7),
        ]);

        $response = $this->get(route('blogs.show', $scheduled->slug));
        $response->assertNotFound();
    }

    public function test_public_routes_have_no_admin_middleware(): void
    {
        $published = $this->blogService->create([
            'title' => 'Open To Everyone',
            'content' => 'No login needed.',
            'status' => 'published',
        ]);

        $this->assertGuest('admin');
        $this->get(route('blogs.index'))->assertOk();
        $this->get(route('blogs.show', $published->slug))->assertOk();
    }

    public function test_existing_admin_module_remains_unaffected(): void
    {
        $admin = Admin::create([
            'name' => 'Test Admin',
            'email' => 'admin@test.local',
            'password' => bcrypt('password123'),
        ]);

        $draft = $this->blogService->create([
            'title' => 'Admin Visible Draft',
            'content' => 'Admin can see this.',
            'status' => 'draft',
        ]);

        $this->get(route('blogs.show', $draft->slug))->assertNotFound();

        $this->actingAs($admin, 'admin')
            ->get(route('admin.blogs.index'))
            ->assertOk()
            ->assertSee('Admin Visible Draft');
    }
}
