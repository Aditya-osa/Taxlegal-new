<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\Blog;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BlogControllerTest extends TestCase
{
    use RefreshDatabase;

    protected Admin $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = Admin::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);
    }

    public function test_admin_can_view_blogs_index_and_trash(): void
    {
        $response = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.index'));
        $response->assertStatus(200);

        $responseTrash = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.trash'));
        $responseTrash->assertStatus(200);
    }

    public function test_admin_can_create_and_store_blog(): void
    {
        Storage::fake('public');
        $file = UploadedFile::fake()->create('cover.jpg', 100, 'image/jpeg');

        $response = $this->actingAs($this->admin, 'admin')->post(route('admin.blogs.store'), [
            'title' => 'Controller Test Blog',
            'content' => 'Test Content',
            'status' => 'published',
            'image' => $file,
        ]);

        $response->assertRedirect(route('admin.blogs.index'));
        $this->assertDatabaseHas('blogs', [
            'title' => 'Controller Test Blog',
            'slug' => 'controller-test-blog',
            'status' => 'published',
            'created_by' => $this->admin->id,
        ]);
    }

    public function test_admin_can_edit_update_and_soft_delete_blog(): void
    {
        $blog = Blog::create([
            'title' => 'To Edit',
            'slug' => 'to-edit',
            'content' => 'Old Content',
            'status' => 'draft',
            'created_by' => $this->admin->id,
            'updated_by' => $this->admin->id,
        ]);

        $responseEdit = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.edit', $blog));
        $responseEdit->assertStatus(200);

        $responseUpdate = $this->actingAs($this->admin, 'admin')->put(route('admin.blogs.update', $blog), [
            'title' => 'Updated Title',
            'content' => 'New Content',
            'status' => 'published',
        ]);

        $responseUpdate->assertRedirect(route('admin.blogs.index'));
        $this->assertDatabaseHas('blogs', [
            'id' => $blog->id,
            'title' => 'Updated Title',
            'status' => 'published',
        ]);

        $responseDelete = $this->actingAs($this->admin, 'admin')->delete(route('admin.blogs.destroy', $blog));
        $responseDelete->assertRedirect(route('admin.blogs.index'));
        $this->assertSoftDeleted('blogs', ['id' => $blog->id]);
    }

    public function test_route_model_binding_for_restore_and_force_delete(): void
    {
        Storage::fake('public');
        $file = UploadedFile::fake()->create('trash.jpg', 100, 'image/jpeg');
        $blog = Blog::create([
            'title' => 'Trashed Blog',
            'slug' => 'trashed-blog',
            'content' => 'Trash Content',
            'status' => 'draft',
            'image' => $file->store('blogs', 'public'),
        ]);

        $blog->delete();
        $this->assertSoftDeleted('blogs', ['id' => $blog->id]);

        // Test restore via route model binding ({blog})
        $responseRestore = $this->actingAs($this->admin, 'admin')->post(route('admin.blogs.restore', $blog));
        $responseRestore->assertRedirect();
        $this->assertDatabaseHas('blogs', ['id' => $blog->id, 'deleted_at' => null]);

        // Soft delete again for force delete test
        $blog->delete();
        $this->assertSoftDeleted('blogs', ['id' => $blog->id]);
        Storage::disk('public')->assertExists($blog->image);

        // Test forceDelete via route model binding ({blog})
        $responseForceDelete = $this->actingAs($this->admin, 'admin')->delete(route('admin.blogs.forceDelete', $blog));
        $responseForceDelete->assertRedirect();
        $this->assertDatabaseMissing('blogs', ['id' => $blog->id]);
        Storage::disk('public')->assertMissing($blog->image);
    }

    public function test_show_route_redirects_to_edit(): void
    {
        $blog = Blog::create([
            'title' => 'Show Test',
            'slug' => 'show-test',
            'content' => 'Content',
            'status' => 'draft',
        ]);

        $response = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.show', $blog));
        $response->assertRedirect(route('admin.blogs.edit', $blog));
    }
}
