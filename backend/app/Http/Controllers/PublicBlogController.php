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

    public function index(): View|Response
    {
        $blogs = $this->blogService->getPublishedBlogs();

        return view()->exists('blogs.index')
            ? view('blogs.index', compact('blogs'))
            : response('Placeholder: blogs.index', 200);
    }

    public function show(string $slug): View|Response
    {
        $blog = $this->blogService->findPublishedBySlug($slug);

        return view()->exists('blogs.show')
            ? view('blogs.show', compact('blog'))
            : response('Placeholder: blogs.show', 200);
    }
}
