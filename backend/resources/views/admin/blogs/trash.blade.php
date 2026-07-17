@extends('admin.layout')

@section('title', 'Recycle Bin - Blogs')
@section('page-title', 'Recycle Bin')

@section('content')
    @include('admin.blogs._filters', ['actionRoute' => route('admin.blogs.trash')])

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Slug & Quick Copy</th>
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
                            <img src="{{ asset('storage/' . $blog->image) }}" alt="{{ $blog->title }}" loading="lazy" decoding="async" style="width: 48px; height: 36px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border);">
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
@endsection
