@extends('admin.layout')

@section('title', 'Blogs')
@section('page-title', 'Blog Management')

@section('content')
@php
    $highlight = function($text) {
        $search = trim(request('search', ''));
        if ($search === '' || $text === null || $text === '') return e($text);
        return preg_replace('/(' . preg_quote($search, '/') . ')/i', '<mark style="background:#fff3cd;color:#856404;padding:0 2px;border-radius:2px;">$1</mark>', e($text));
    };
@endphp

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
            <a href="{{ route('admin.blogs.trash') }}" class="btn btn-warning btn-sm">
                🗑 Recycle Bin
            </a>
            <a href="{{ route('admin.blogs.create') }}" class="btn btn-primary btn-sm">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                Create Blog
            </a>
        </div>
    </div>

    <!-- Filters and Sorting Bar -->
    <div style="background: #fafbfc; padding: 16px 24px; border-bottom: 1px solid var(--border);">
        <form method="GET" action="{{ route('admin.blogs.index') }}" id="filterForm">
            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 12px;">
                <input type="text" name="search" class="form-control" style="padding: 6px 12px; width: 220px;" placeholder="Search title, excerpt, SEO..." value="{{ request('search') }}">
                
                <select name="status" class="form-control" style="padding: 6px 12px; width: auto;" onchange="this.form.submit()">
                    <option value="">All Status</option>
                    <option value="draft" {{ request('status') === 'draft' ? 'selected' : '' }}>Draft</option>
                    <option value="unpublished" {{ request('status') === 'unpublished' ? 'selected' : '' }}>Unpublished</option>
                    <option value="published" {{ request('status') === 'published' ? 'selected' : '' }}>Published</option>
                </select>

                <select name="sort" class="form-control" style="padding: 6px 12px; width: auto; font-weight: 600;" onchange="this.form.submit()">
                    <option value="newest" {{ request('sort', 'newest') === 'newest' ? 'selected' : '' }}>Sort: Newest First</option>
                    <option value="oldest" {{ request('sort') === 'oldest' ? 'selected' : '' }}>Sort: Oldest First</option>
                    <option value="title_asc" {{ request('sort') === 'title_asc' ? 'selected' : '' }}>Sort: Title (A → Z)</option>
                    <option value="title_desc" {{ request('sort') === 'title_desc' ? 'selected' : '' }}>Sort: Title (Z → A)</option>
                    <option value="published_at" {{ request('sort') === 'published_at' ? 'selected' : '' }}>Sort: Published Date</option>
                    <option value="updated_at" {{ request('sort') === 'updated_at' ? 'selected' : '' }}>Sort: Last Updated</option>
                </select>

                <button type="submit" class="btn btn-secondary btn-sm">Filter</button>
                @if(request()->hasAny(['search', 'status', 'sort', 'created_from', 'created_to', 'published_from', 'published_to']))
                    <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary btn-sm" style="color: var(--danger);">Reset All</a>
                @endif
            </div>

            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; font-size: 13px; color: var(--text-muted); background: #fff; padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border);">
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-weight: 600; color: #2c3e50;">Created:</span>
                    <input type="date" name="created_from" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('created_from') }}" onchange="this.form.submit()" title="Created From">
                    <span>to</span>
                    <input type="date" name="created_to" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('created_to') }}" onchange="this.form.submit()" title="Created To">
                </div>
                <div style="width: 1px; height: 20px; background: var(--border);"></div>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-weight: 600; color: #2c3e50;">Published:</span>
                    <input type="date" name="published_from" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('published_from') }}" onchange="this.form.submit()" title="Published From">
                    <span>to</span>
                    <input type="date" name="published_to" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('published_to') }}" onchange="this.form.submit()" title="Published To">
                </div>
            </div>
        </form>
    </div>

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Slug & Quick Copy</th>
                    <th>Status</th>
                    <th>Published Date</th>
                    <th>Updated</th>
                    <th>Actions & Quick Status</th>
                </tr>
            </thead>
            <tbody>
                @forelse($blogs as $blog)
                <tr class="clickable-row" data-edit-url="{{ route('admin.blogs.edit', $blog) }}" style="transition: background 0.15s; cursor: pointer;">
                    <td>
                        @if($blog->image)
                            <img src="{{ asset('storage/' . $blog->image) }}" alt="{{ $blog->title }}" style="width: 48px; height: 36px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border);">
                        @else
                            <div style="width: 48px; height: 36px; border-radius: 4px; background: #f0f2f5; border: 1px dashed #cbd5e1; display: flex; align-items: center; justify-content: center; color: #94a3b8;" title="No thumbnail">
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            </div>
                        @endif
                    </td>
                    <td style="font-weight:600;" title="{{ $blog->title }}">
                        <div class="text-truncate" style="max-width: 240px;">{!! $highlight($blog->title) !!}</div>
                    </td>
                    <td>
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <code style="font-size:12px; color:#7f8c8d; display: block;">{!! $highlight($blog->slug) !!}</code>
                            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                                <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="{{ $blog->slug }}" style="padding: 1px 6px; font-size: 10px;" title="Copy Slug">📋 Slug</button>
                                <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="{{ $blog->seo_title ?? $blog->title }}" style="padding: 1px 6px; font-size: 10px;" title="Copy SEO Title">📋 SEO Title</button>
                                <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="{{ $blog->seo_description ?? $blog->excerpt }}" style="padding: 1px 6px; font-size: 10px;" title="Copy SEO Description">📋 SEO Desc</button>
                            </div>
                        </div>
                    </td>
                    <td>
                        @if($blog->status === 'published')
                            <span class="badge badge-success" style="display: inline-flex; align-items: center; gap: 5px;">
                                <span style="color: #2ecc71; font-size: 10px;">●</span> Published
                            </span>
                        @else
                            <span class="badge badge-secondary" style="display: inline-flex; align-items: center; gap: 5px;">
                                <span style="color: #95a5a6; font-size: 10px;">●</span> Draft
                            </span>
                        @endif
                    </td>
                    <td style="font-size:13px;">{{ $blog->published_at ? $blog->published_at->format('M d, Y H:i') : '—' }}</td>
                    <td style="font-size:13px;color:#7f8c8d;">{{ $blog->updated_at ? $blog->updated_at->format('M d, Y H:i') : '—' }}</td>
                    <td>
                        <div style="display:flex; gap:6px; align-items: center; flex-wrap: wrap;">
                            <a href="{{ route('admin.blogs.preview', $blog) }}" class="btn btn-sm btn-secondary" style="border-color: #d6eaf8; color: #1a5276; background: #f4fafe;" title="Admin Preview">Preview</a>
                            <a href="{{ route('admin.blogs.edit', $blog) }}" class="btn btn-sm btn-warning">Edit</a>
                            
                            @if($blog->status === 'draft')
                                <form method="POST" action="{{ route('admin.blogs.updateStatus', $blog) }}" style="display:inline;">
                                    @csrf @method('PATCH')
                                    <input type="hidden" name="status" value="published">
                                    <button type="submit" class="btn btn-sm btn-primary" style="background:#27ae60;border-color:#27ae60;" title="Quick Publish">Publish</button>
                                </form>
                            @else
                                <form method="POST" action="{{ route('admin.blogs.updateStatus', $blog) }}" style="display:inline;">
                                    @csrf @method('PATCH')
                                    <input type="hidden" name="status" value="draft">
                                    <button type="submit" class="btn btn-sm btn-secondary" style="color: #b7770d; border-color: #f9e4b7; background: #fef9e7;" title="Move to Draft">Draft</button>
                                </form>
                            @endif

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

<script>
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.clickable-row').forEach(row => {
        row.addEventListener('click', function(e) {
            if (!e.target.closest('a, button, form, input, select, textarea, code')) {
                const url = this.getAttribute('data-edit-url');
                if (url) window.location.href = url;
            }
        });
    });

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const textToCopy = this.getAttribute('data-copy') || '';
            navigator.clipboard.writeText(textToCopy).then(() => {
                const origText = this.innerHTML;
                this.innerHTML = '✓ Copied';
                this.style.background = '#d5f5e3';
                this.style.color = '#1e8449';
                setTimeout(() => {
                    this.innerHTML = origText;
                    this.style.background = '';
                    this.style.color = '';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Could not copy to clipboard.');
            });
        });
    });
});
</script>
@endsection
