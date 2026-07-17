<?php

namespace Tests\Feature;

use App\Models\Admin;
use App\Models\Blog;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BlogAdminUXTest extends TestCase
{
    use RefreshDatabase;

    protected Admin $admin;

    protected function setUp(): void
    {
        parent::setUp();
        $this->admin = Admin::create([
            'name' => 'Admin Tester',
            'email' => 'admintester@example.com',
            'password' => bcrypt('password'),
        ]);
    }

    public function test_create_view_displays_all_ux_enhancements(): void
    {
        $response = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.create'));

        $response->assertStatus(200);
        $response->assertSee('data-is-edit="false"', false);
        $response->assertSee('id="seo_title_counter"', false);
        $response->assertSee('id="seo_description_counter"', false);
        $response->assertSee('id="excerpt_counter"', false);
        $response->assertSee('Publishing Controls');
        $response->assertSee('id="imagePreviewWrapper"', false);
        $response->assertSee('id="removeImageBtn"', false);
        $response->assertSee('id="blogSubmitBtn"', false);
        $response->assertDontSee('Created At');
        $response->assertDontSee('Updated At');
    }

    public function test_edit_view_displays_read_only_timestamps_and_is_edit_flag(): void
    {
        $blog = Blog::create([
            'title' => 'Existing Blog',
            'slug' => 'existing-blog',
            'content' => 'Sample Content',
            'status' => 'published',
            'published_at' => now(),
            'created_by' => $this->admin->id,
            'updated_by' => $this->admin->id,
        ]);

        $response = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.edit', $blog));

        $response->assertStatus(200);
        $response->assertSee('data-is-edit="true"', false);
        $response->assertSee('Publishing Controls');
        $response->assertSee('Created At');
        $response->assertSee('Updated At');
        $response->assertSee('readonly disabled style="background:#f0f2f5;', false);
    }

    public function test_delete_confirmations_exist_in_index_and_trash_views(): void
    {
        $blog = Blog::create([
            'title' => 'Blog To Delete',
            'slug' => 'blog-to-delete',
            'content' => 'Delete Content',
            'status' => 'draft',
            'created_by' => $this->admin->id,
        ]);

        // Index Soft Delete
        $responseIndex = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.index'));
        $responseIndex->assertStatus(200);
        $responseIndex->assertSee('onsubmit="return confirm(\'Move this blog to recycle bin?\')"', false);

        // Trash Restore and Force Delete
        $blog->delete();
        $responseTrash = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.trash'));
        $responseTrash->assertStatus(200);
        $responseTrash->assertSee('onsubmit="return confirm(\'Restore this blog post to active status?\')"', false);
        $responseTrash->assertSee('onsubmit="return confirm(\'Permanently delete this blog post and its image? This action cannot be undone.\')"', false);
    }

    public function test_validation_errors_preserve_ckeditor_content_and_highlight_fields(): void
    {
        $response = $this->actingAs($this->admin, 'admin')->post(route('admin.blogs.store'), [
            'title' => '', // invalid: required
            'slug' => 'custom-slug',
            'content' => '<p>Preserved CKEditor HTML Content</p>',
            'status' => 'draft',
        ]);

        $response->assertSessionHasErrors(['title']);
        $response->assertSessionHasInput('content', '<p>Preserved CKEditor HTML Content</p>');
        $response->assertSessionHasInput('slug', 'custom-slug');

        $getForm = $this->actingAs($this->admin, 'admin')->get(route('admin.blogs.create'));
        $getForm->assertSee(e('<p>Preserved CKEditor HTML Content</p>'), false);
        $getForm->assertSee('custom-slug', false);
    }

    public function test_slug_behavior_and_preservation(): void
    {
        // 1. Auto slug on create if left blank
        $responseStore = $this->actingAs($this->admin, 'admin')->post(route('admin.blogs.store'), [
            'title' => 'Auto Slug Title',
            'slug' => '',
            'content' => 'Content here',
            'status' => 'draft',
        ]);
        $responseStore->assertRedirect(route('admin.blogs.index'));
        $this->assertDatabaseHas('blogs', ['title' => 'Auto Slug Title', 'slug' => 'auto-slug-title']);

        // 2. Manual slug override on create
        $responseManual = $this->actingAs($this->admin, 'admin')->post(route('admin.blogs.store'), [
            'title' => 'Another Title',
            'slug' => 'my-custom-override',
            'content' => 'Content here',
            'status' => 'draft',
        ]);
        $responseManual->assertRedirect(route('admin.blogs.index'));
        $this->assertDatabaseHas('blogs', ['title' => 'Another Title', 'slug' => 'my-custom-override']);

        // 3. Editing an existing blog preserves existing slug when not modified
        $blog = Blog::where('slug', 'my-custom-override')->firstOrFail();
        $responseUpdate = $this->actingAs($this->admin, 'admin')->put(route('admin.blogs.update', $blog), [
            'title' => 'Updated Title Name',
            'slug' => $blog->slug,
            'content' => 'Updated content',
            'status' => 'published',
        ]);
        $responseUpdate->assertRedirect(route('admin.blogs.index'));
        $this->assertDatabaseHas('blogs', ['id' => $blog->id, 'title' => 'Updated Title Name', 'slug' => 'my-custom-override']);
    }
}
