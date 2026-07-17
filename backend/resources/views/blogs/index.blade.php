<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blogs | Tax Legal Synergy</title>
    <meta name="description" content="Latest insights from Tax Legal Synergy.">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">
    
    <!-- Navigation -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="text-2xl font-bold tracking-tight text-red-800">TaxLegal</a>
                </div>
                <div class="flex items-center space-x-6">
                    <a href="/" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Home</a>
                    <a href="/blogs" class="text-sm font-semibold text-red-800 border-b-2 border-red-800 py-5">Blogs</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
        
        <!-- Hero Section & Search -->
        <div class="bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    
                    <div>
                        <!-- Breadcrumb -->
                        <nav class="flex text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
                            <ol class="flex items-center space-x-2">
                                <li>
                                    <a href="/" class="hover:text-gray-900 transition">Home</a>
                                </li>
                                <li>
                                    <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </li>
                                <li>
                                    <span class="text-gray-900 font-medium" aria-current="page">Blogs</span>
                                </li>
                            </ol>
                        </nav>
                        
                        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                            Insights & Updates
                        </h1>
                        <p class="text-lg text-gray-600 max-w-2xl">
                            Stay informed with the latest legal perspectives, taxation updates, and expert opinions from Tax Legal Synergy.
                        </p>
                    </div>

                    <!-- Search Box -->
                    <div class="w-full md:w-80">
                        <form action="{{ url('/blogs') }}" method="GET" class="relative">
                            <label for="search" class="sr-only">Search blogs</label>
                            <input 
                                type="text" 
                                name="search" 
                                id="search" 
                                value="{{ request('search') }}"
                                class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-800 focus:border-red-800 sm:text-sm transition shadow-sm"
                                placeholder="Search title, excerpt, content..."
                            >
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            @if(request('search'))
                <div class="mb-8 flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-gray-800">
                        Search Results for "{{ request('search') }}"
                    </h2>
                    <a href="{{ url('/blogs') }}" class="text-sm text-red-800 hover:text-red-900 font-medium">Clear Search</a>
                </div>
            @endif

            <!-- Empty State -->
            @if($blogs->isEmpty() && !$featuredBlog)
                <div class="text-center py-24 bg-white rounded-xl shadow-sm border border-gray-200">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <h3 class="mt-2 text-xl font-medium text-gray-900">No blogs available.</h3>
                    <p class="mt-1 text-gray-500">
                        @if(request('search'))
                            We couldn't find anything matching your search.
                        @else
                            Check back later for new insights and updates.
                        @endif
                    </p>
                    @if(request('search'))
                        <div class="mt-6">
                            <a href="{{ url('/blogs') }}" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition">
                                View all blogs
                            </a>
                        </div>
                    @endif
                </div>
            @else
                
                <!-- Featured Blog -->
                @if($featuredBlog && $blogs->currentPage() === 1 && !request('search'))
                    <div class="mb-16">
                        <div class="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row transition hover:shadow-md">
                            
                            <div class="md:w-1/2 aspect-w-16 aspect-h-9 md:aspect-none md:h-auto overflow-hidden bg-gray-100 relative">
                                @if($featuredBlog->image)
                                    <img src="{{ Storage::url($featuredBlog->image) }}" alt="{{ $featuredBlog->title }}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                                @else
                                    <!-- Placeholder -->
                                    <div class="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-105 transition duration-500">
                                        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                @endif
                            </div>

                            <div class="md:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                <div class="flex items-center text-sm text-gray-500 mb-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full font-medium bg-red-100 text-red-800 mr-4">
                                        Featured
                                    </span>
                                    <time datetime="{{ $featuredBlog->published_at ? $featuredBlog->published_at->format('Y-m-d') : $featuredBlog->created_at->format('Y-m-d') }}">
                                        {{ $featuredBlog->published_at ? $featuredBlog->published_at->format('d M Y') : $featuredBlog->created_at->format('d M Y') }}
                                    </time>
                                </div>
                                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-800 transition">
                                    <a href="#" class="focus:outline-none">
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                        {{ $featuredBlog->title }}
                                    </a>
                                </h2>
                                <p class="text-gray-600 mb-8 line-clamp-3">
                                    {{ $featuredBlog->excerpt ?? Str::limit(strip_tags($featuredBlog->content), 150) }}
                                </p>
                                <div class="mt-auto">
                                    <span class="inline-flex items-center font-semibold text-red-800 group-hover:text-red-900">
                                        Read More
                                        <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif

                <!-- Latest Articles Grid -->
                @if($blogs->isNotEmpty())
                    @if(!$featuredBlog || request('search') || $blogs->currentPage() > 1)
                        <h2 class="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                    @endif

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        @foreach($blogs as $blog)
                            <article class="group relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 overflow-hidden flex flex-col transition">
                                <div class="aspect-w-16 aspect-h-10 bg-gray-100 overflow-hidden relative">
                                    @if($blog->image)
                                        <img src="{{ Storage::url($blog->image) }}" alt="{{ $blog->title }}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-500">
                                    @else
                                        <!-- Placeholder -->
                                        <div class="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-105 transition duration-500">
                                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    @endif
                                </div>
                                <div class="p-6 flex flex-col flex-grow">
                                    <div class="flex items-center text-xs text-gray-500 mb-3">
                                        <time datetime="{{ $blog->published_at ? $blog->published_at->format('Y-m-d') : $blog->created_at->format('Y-m-d') }}">
                                            {{ $blog->published_at ? $blog->published_at->format('d M Y') : $blog->created_at->format('d M Y') }}
                                        </time>
                                    </div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-800 transition line-clamp-2">
                                        <a href="#" class="focus:outline-none">
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            {{ $blog->title }}
                                        </a>
                                    </h3>
                                    <p class="text-gray-600 text-sm mb-6 line-clamp-3">
                                        {{ $blog->excerpt ?? Str::limit(strip_tags($blog->content), 120) }}
                                    </p>
                                    <div class="mt-auto">
                                        <span class="inline-flex items-center text-sm font-semibold text-red-800 group-hover:text-red-900">
                                            Read More
                                            <svg class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        @endforeach
                    </div>

                    <!-- Pagination -->
                    <div class="mt-12">
                        {{ $blogs->withQueryString()->links() }}
                    </div>
                @endif
            @endif
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">TaxLegal</h3>
                    <p class="text-sm text-gray-400">Your trusted partner in legal and taxation matters.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/" class="hover:text-white transition">Home</a></li>
                        <li><a href="/blogs" class="hover:text-white transition">Blogs</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Contact</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>Mumbai, India</li>
                        <li>info@taxlegal.in</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {{ date('Y') }} Tax Legal Synergy. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
