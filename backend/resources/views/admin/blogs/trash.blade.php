@extends('admin.layout')

@section('title', 'Recycle Bin - Blogs')
@section('page-title', 'Recycle Bin')

@section('content')
<div class="card">
    <div class="card-header" style="flex-wrap: wrap; gap: 16px;">
        <h2>Trashed Blogs</h2>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-left: auto;">
            <form method="GET" action="{{ route('admin.blogs.trash') }}" style="display: flex; gap: 8px; align-items: center;">
                <input type="text" name="search" class="form-control" style="padding: 6px 12px; width: 200px;" placeholder="Search trashed blogs..." value="{{ request('search') }}">
                <select name="status" class="form-control" style="padding: 6px 12px; width: auto;" onchange="this.form.submit()">
                    <option value="">All Status</option>
                    <option value="draft" {{ request('status') === 'draft' ? 'selected' : '' }}>Draft</option>
                    <option value="published" {{ request('status') === 'published' ? 'selected' : '' }}>Published</option>
                </select>
                @if(request('search') || request('status'))
                    <a href="{{ route('admin.blogs.trash') }}" class="btn btn-secondary btn-sm">Reset</a>
                @else
                    <button type="submit" class="btn btn-secondary btn-sm">Filter</button>
                @endif
            </form>
            <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary btn-sm">← Back to Blogs</a>
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
                    <th>Deleted At</th>
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
                    <td style="font-size:13px;color:#7f8c8d;">{{ $blog->deleted_at ? $blog->deleted_at->format('M d, Y H:i') : '—' }}</td>
                    <td>
                        <div style="display:flex;gap:6px;">
                            <form method="POST" action="{{ route('admin.blogs.restore', $blog) }}"
                                  onsubmit="return confirm('Restore this blog post to active status?')">
                                @csrf
                                <button type="submit" class="btn btn-sm btn-primary" style="background:#27ae60;">Restore</button>
                            </form>
                            <form method="POST" action="{{ route('admin.blogs.forceDelete', $blog) }}"
                                  onsubmit="return confirm('Permanently delete this blog post and its image? This action cannot be undone.')">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Delete Forever</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="7" style="text-align:center;padding:48px 20px;">
                        <div style="color:var(--text-muted);margin-bottom:12px;">
                            <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin:0 auto;opacity:.5;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </div>
                        <div style="font-weight:600;color:#2c3e50;margin-bottom:6px;">Recycle bin is empty</div>
                        <div style="color:var(--text-muted);font-size:13px;">No deleted blog posts found.</div>
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
