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
                @if(request('search'))
                    <a href="{{ route('admin.blogs.trash') }}" class="btn btn-secondary btn-sm">Reset</a>
                @else
                    <button type="submit" class="btn btn-secondary btn-sm">Search</button>
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
                    <td style="font-size:13px;color:#7f8c8d;">{{ $blog->deleted_at ? $blog->deleted_at->format('M d, Y H:i') : '—' }}</td>
                    <td>
                        <div style="display:flex;gap:6px;">
                            <form method="POST" action="{{ route('admin.blogs.restore', $blog->id) }}">
                                @csrf
                                <button type="submit" class="btn btn-sm btn-primary" style="background:#27ae60;">Restore</button>
                            </form>
                            <form method="POST" action="{{ route('admin.blogs.forceDelete', $blog->id) }}"
                                  onsubmit="return confirm('Permanently delete this blog post? This action cannot be undone.')">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Delete Forever</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="4" style="text-align:center;color:#7f8c8d;padding:40px;">
                        Recycle bin is empty.
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
