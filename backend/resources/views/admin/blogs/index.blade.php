@extends('admin.layout')

@section('title', 'Blogs')
@section('page-title', 'Blog Management')

@section('content')
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
                    <td colspan="7" style="text-align:center;color:#7f8c8d;padding:40px;">
                        No blogs exist. <a href="{{ route('admin.blogs.create') }}">Create one →</a>
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
