<?php

namespace App\Services;

use App\Models\Blog;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BlogService
{
    public function getPaginated(?string $search = null, ?string $status = null, int $perPage = 15): LengthAwarePaginator
    {
        $query = Blog::query()->latest();

        if ($search !== null && $search !== '') {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%")
                  ->orWhere('seo_title', 'like', "%{$search}%")
                  ->orWhere('seo_keywords', 'like', "%{$search}%");
            });
        }

        if ($status !== null && $status !== '') {
            $query->where('status', $status);
        }

        return $query->paginate($perPage);
    }

    public function getTrashedPaginated(?string $search = null, ?string $status = null, int $perPage = 15): LengthAwarePaginator
    {
        $query = Blog::onlyTrashed()->latest();

        if ($search !== null && $search !== '') {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%")
                  ->orWhere('seo_title', 'like', "%{$search}%")
                  ->orWhere('seo_keywords', 'like', "%{$search}%");
            });
        }

        if ($status !== null && $status !== '') {
            $query->where('status', $status);
        }

        return $query->paginate($perPage);
    }

    public function find(int $id): Blog
    {
        return Blog::findOrFail($id);
    }

    public function create(array $validated): Blog
    {
        $slugSource = !empty($validated['slug']) ? $validated['slug'] : $validated['title'];
        $validated['slug'] = $this->generateUniqueSlug($slugSource);

        if (isset($validated['image']) && $validated['image'] instanceof UploadedFile) {
            $validated['image'] = $this->uploadImage($validated['image']);
        }

        $userId = Auth::id();
        $validated['created_by'] = $validated['created_by'] ?? $userId;
        $validated['updated_by'] = $validated['updated_by'] ?? $userId;

        if (($validated['status'] ?? 'draft') === 'published' && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }

        return DB::transaction(function () use ($validated) {
            return Blog::create($validated);
        });
    }

    public function update(Blog $blog, array $validated): Blog
    {
        $slugSource = !empty($validated['slug']) ? $validated['slug'] : ($validated['title'] ?? $blog->slug);
        $validated['slug'] = $this->generateUniqueSlug($slugSource, $blog->id);

        $oldImage = null;
        if (isset($validated['image']) && $validated['image'] instanceof UploadedFile) {
            $oldImage = $blog->image;
            $validated['image'] = $this->uploadImage($validated['image']);
        }

        $validated['updated_by'] = $validated['updated_by'] ?? Auth::id();

        $newStatus = $validated['status'] ?? $blog->status;
        if ($blog->status !== 'published' && $newStatus === 'published' && empty($blog->published_at) && empty($validated['published_at'])) {
            $validated['published_at'] = now();
        }

        return DB::transaction(function () use ($blog, $validated, $oldImage) {
            $blog->update($validated);

            if ($oldImage !== null && $oldImage !== $blog->image) {
                $this->deleteImage($oldImage);
            }

            return $blog;
        });
    }

    public function delete(Blog $blog): bool
    {
        return DB::transaction(function () use ($blog) {
            return (bool) $blog->delete();
        });
    }

    public function restore(int|Blog $blog): bool
    {
        return DB::transaction(function () use ($blog) {
            $model = $blog instanceof Blog ? $blog : Blog::withTrashed()->findOrFail($blog);
            return (bool) $model->restore();
        });
    }

    public function forceDelete(int|Blog $blog): bool
    {
        return DB::transaction(function () use ($blog) {
            $model = $blog instanceof Blog ? $blog : Blog::withTrashed()->findOrFail($blog);

            if ($model->image) {
                $this->deleteImage($model->image);
            }

            return (bool) $model->forceDelete();
        });
    }

    public function generateUniqueSlug(string $title, ?int $ignoreId = null): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while ($this->slugExists($slug, $ignoreId)) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }

    public function uploadImage(UploadedFile $file): string
    {
        return Storage::disk('public')->putFile('blogs', $file);
    }

    public function deleteImage(?string $path): void
    {
        if ($path === null || $path === '') {
            return;
        }

        try {
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        } catch (\Throwable $e) {
            // Never throw exception if missing or error
        }
    }

    private function slugExists(string $slug, ?int $ignoreId = null): bool
    {
        $query = Blog::withTrashed()->where('slug', $slug);

        if ($ignoreId !== null) {
            $query->where('id', '!=', $ignoreId);
        }

        return $query->exists();
    }
}
