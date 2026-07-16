<?php

namespace Tests\Feature;

use App\Models\Blog;
use App\Services\BlogService;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BlogServiceTest extends TestCase
{
    use DatabaseTransactions;

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
}

