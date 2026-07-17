@extends('admin.layout')

@section('title', 'Blogs')
@section('page-title', 'Blog Management')

@section('content')
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-label">Total Blogs</div>
        <div class="stat-value">{{ \App\Models\Blog::count() }}</div>
        <div class="stat-sub">all posts</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Published</div>
        <div class="stat-value">{{ \App\Models\Blog::where('status', 'published')->count() }}</div>
        <div class="stat-sub">live posts</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Drafts</div>
        <div class="stat-value">{{ \App\Models\Blog::where('status', 'draft')->count() }}</div>
        <div class="stat-sub">unpublished</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Recycle Bin</div>
        <div class="stat-value">{{ \App\Models\Blog::onlyTrashed()->count() }}</div>
        <div class="stat-sub">trashed posts</div>
    </div>
</div>

<div class="card">
    <div class="card-header" style="flex-wrap: wrap; gap: 16px;">
        <h2>All Blogs</h2>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-left: auto;">
            <form method="GET" action="{{ route('admin.blogs.index') }}" style="display: flex; gap: 8px; align-items: center;">
                <input type="text" name="search" class="form-control" style="padding: 6px 12px; width: 200px;" placeholder="Search blogs..." value="{{ request('search') }}">
                <select name="status" class="form-control" style="padding: 6px 12px; width: auto;" onchange="this.form.submit()">
                    <option value="">All Status</option>
                    <option value="draft" {{ request('status') === 'draft' ? 'selected' : '' }}>Draft</option>
                    <option value="published" {{ request('status') === 'published' ? 'selected' : '' }}>Published</option>
                </select>
                @if(request('search') || request('status'))
                    <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary btn-sm">Reset</a>
                @else
                    <button type="submit" class="btn btn-secondary btn-sm">Filter</button>
                @endif
            </form>
            <a href="{{ route('admin.blogs.trash') }}" class="btn btn-warning btn-sm">
                🗑 Recycle Bin
            </a>
            <a href="{{ route('admin.blogs.create') }}" class="btn btn-primary btn-sm">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                Create Blog
            </a>
        </div>
    </div>

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Published Date</th>
                    <th>Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($blogs as $blog)
                <tr>
                    <td>
                        @if($blog->image)
                            <img src="{{ asset('storage/' . $blog->image) }}" alt="{{ $blog->title }}" style="width: 48px; height: 36px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border);">
                        @else
                            <span class="text-muted" style="font-size:12px;">No image</span>
                        @endif
                    </td>
                    <td style="font-weight:600;">{{ $blog->title }}</td>
                    <td><code style="font-size:12px;color:#7f8c8d;">{{ $blog->slug }}</code></td>
                    <td>
                        @if($blog->status === 'published')
                            <span class="badge badge-success">Published</span>
                        @else
                            <span class="badge badge-secondary">Draft</span>
                        @endif
                    </td>
                    <td style="font-size:13px;">{{ $blog->published_at ? $blog->published_at->format('M d, Y H:i') : '—' }}</td>
                    <td style="font-size:13px;color:#7f8c8d;">{{ $blog->updated_at ? $blog->updated_at->format('M d, Y H:i') : '—' }}</td>
                    <td>
                        <div style="display:flex;gap:6px;">
                            <a href="{{ route('admin.blogs.edit', $blog) }}" class="btn btn-sm btn-warning">Edit</a>
                            <form method="POST" action="{{ route('admin.blogs.destroy', $blog) }}"
                                  onsubmit="return confirm('Move this blog to recycle bin?')">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="7" style="text-align:center;padding:48px 20px;">
                        <div style="color:var(--text-muted);margin-bottom:12px;">
                            <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin:0 auto;opacity:.5;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                        </div>
                        <div style="font-weight:600;color:#2c3e50;margin-bottom:6px;">No blog posts found</div>
                        <div style="color:var(--text-muted);font-size:13px;margin-bottom:16px;">Create your first blog post or adjust search and filter criteria.</div>
                        <a href="{{ route('admin.blogs.create') }}" class="btn btn-primary btn-sm">Create New Blog →</a>
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($blogs->hasPages())
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;">
            {{ $blogs->withQueryString()->links('admin.pagination') }}
        </div>
    @endif
</div>
@endsection
