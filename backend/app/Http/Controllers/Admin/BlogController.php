<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Blog;
use App\Services\BlogService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class BlogController extends Controller
{
    public function __construct(protected BlogService $blogService)
    {
    }

    public function index(Request $request): View|RedirectResponse
    {
        try {
            $blogs = $this->blogService->getPaginated(
                $request->input('search'),
                $request->input('status')
            );

            return view('admin.blogs.index', compact('blogs'));
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to retrieve blogs.');
        }
    }

    public function create(): View
    {
        return view('admin.blogs.create');
    }

    public function store(StoreBlogRequest $request): RedirectResponse
    {
        try {
            $this->blogService->create($request->validated());

            return redirect()->route('admin.blogs.index')
                ->with('success', 'Blog created successfully.');
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to create blog.');
        }
    }

    public function edit(Blog $blog): View
    {
        return view('admin.blogs.edit', compact('blog'));
    }

    public function update(UpdateBlogRequest $request, Blog $blog): RedirectResponse
    {
        try {
            $this->blogService->update($blog, $request->validated());

            return redirect()->route('admin.blogs.index')
                ->with('success', 'Blog updated successfully.');
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to update blog.');
        }
    }

    public function destroy(Blog $blog): RedirectResponse
    {
        try {
            $this->blogService->delete($blog);

            return redirect()->route('admin.blogs.index')
                ->with('success', 'Blog deleted successfully.');
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to delete blog.');
        }
    }

    public function trash(Request $request): View|RedirectResponse
    {
        try {
            $blogs = $this->blogService->getTrashedPaginated(
                $request->input('search'),
                $request->input('status')
            );

            return view('admin.blogs.trash', compact('blogs'));
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to retrieve trashed blogs.');
        }
    }

    public function restore($id): RedirectResponse
    {
        try {
            $this->blogService->restore($id);

            return back()->with('success', 'Blog restored successfully.');
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to restore blog.');
        }
    }

    public function forceDelete($id): RedirectResponse
    {
        try {
            $this->blogService->forceDelete($id);

            return back()->with('success', 'Blog permanently deleted.');
        } catch (\Throwable $e) {
            return back()->with('error', 'Failed to permanently delete blog.');
        }
    }
}
