<?php

namespace App\Http\Controllers;

use App\Services\BlogService;
use Illuminate\Http\Response;
use Illuminate\View\View;

class PublicBlogController extends Controller
{
    public function __construct(protected BlogService $blogService)
    {
    }

    public function index(\Illuminate\Http\Request $request): View|Response|\Illuminate\Http\JsonResponse
    {
        $search = $request->get('search');
        $blogs = $this->blogService->getPublishedBlogs($search, 9);
        $featuredBlog = null;

        // If no search and on page 1, use the newest blog as featured and remove it from the grid.
        if (empty($search) && $blogs->currentPage() === 1 && $blogs->isNotEmpty()) {
            $featuredBlog = $blogs->shift();
        }

        if ($request->wantsJson()) {
            return response()->json([
                'featuredBlog' => $featuredBlog,
                'blogs' => $blogs
            ]);
        }

        return view()->exists('blogs.index')
            ? view('blogs.index', compact('featuredBlog', 'blogs', 'search'))
            : response('Placeholder: blogs.index', 200);
    }

    public function show(\Illuminate\Http\Request $request, string $slug): View|Response|\Illuminate\Http\JsonResponse
    {
        $blog = $this->blogService->findPublishedBySlug($slug);

        if ($request->wantsJson()) {
            return response()->json([
                'blog' => $blog
            ]);
        }

        return view()->exists('blogs.show')
            ? view('blogs.show', compact('blog'))
            : response('Placeholder: blogs.show', 200);
    }
}
