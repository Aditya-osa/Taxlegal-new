@extends('admin.layout')

@section('title', 'Preview: ' . $blog->title)
@section('page-title', 'Admin Blog Preview (Read-Only)')

@section('content')
<div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
    <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary btn-sm">← Back to Blogs</a>
    <div style="display: flex; gap: 10px; align-items: center;">
        @if($blog->status === 'published')
            <span class="badge badge-success" style="font-size: 13px; padding: 6px 12px;">● Published</span>
            <form method="POST" action="{{ route('admin.blogs.updateStatus', $blog) }}" style="display: inline;">
                @csrf @method('PATCH')
                <input type="hidden" name="status" value="draft">
                <button type="submit" class="btn btn-warning btn-sm">Move to Draft</button>
            </form>
        @else
            <span class="badge badge-secondary" style="font-size: 13px; padding: 6px 12px;">● Draft</span>
            <form method="POST" action="{{ route('admin.blogs.updateStatus', $blog) }}" style="display: inline;">
                @csrf @method('PATCH')
                <input type="hidden" name="status" value="published">
                <button type="submit" class="btn btn-primary btn-sm" style="background: var(--success); border-color: var(--success);">Publish Now</button>
            </form>
        @endif
        <a href="{{ route('admin.blogs.edit', $blog) }}" class="btn btn-warning btn-sm">Edit Blog</a>
    </div>
</div>

<div style="display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 24px;">
    <!-- Main Content Preview -->
    <div class="card">
        <div class="card-header">
            <h2>Blog Post Preview</h2>
            <span class="badge badge-info">Admin Only View</span>
        </div>
        <div class="card-body">
            @if($blog->image)
                <div style="margin-bottom: 24px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border);">
                    <img src="{{ asset('storage/' . $blog->image) }}" alt="{{ $blog->title }}" style="width: 100%; max-height: 400px; object-fit: cover; display: block;">
                </div>
            @endif

            <h1 style="font-size: 28px; font-weight: 700; color: #1a1a2e; margin-bottom: 12px; line-height: 1.3;">
                {{ $blog->title }}
            </h1>

            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border); color: var(--text-muted); font-size: 13px; flex-wrap: wrap;">
                <span><strong>Slug:</strong> <code>{{ $blog->slug }}</code></span>
                <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="{{ $blog->slug }}" style="padding: 2px 8px; font-size: 11px;">Copy Slug</button>
                <span>•</span>
                <span><strong>Published:</strong> {{ $blog->published_at ? $blog->published_at->format('M d, Y H:i') : 'Unpublished' }}</span>
                <span>•</span>
                <span><strong>Last Updated:</strong> {{ $blog->updated_at ? $blog->updated_at->format('M d, Y H:i') : '—' }}</span>
            </div>

            @if($blog->excerpt)
                <div style="background: #fafbfc; border-left: 4px solid var(--primary); padding: 16px; margin-bottom: 24px; border-radius: 0 8px 8px 0; font-style: italic; color: #34495e;">
                    <strong>Excerpt:</strong> {{ $blog->excerpt }}
                </div>
            @endif

            <div class="ck-content" style="line-height: 1.7; color: #2c3e50; font-size: 15px;">
                {!! $blog->content !!}
            </div>
        </div>
    </div>

    <!-- Sidebar Info & SEO Metadata Section -->
    <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="card">
            <div class="card-header">
                <h2>Publish Information</h2>
            </div>
            <div class="card-body" style="display: flex; flex-direction: column; gap: 14px; font-size: 14px;">
                <div>
                    <span class="text-muted" style="font-size: 12px; display: block;">Current Status</span>
                    @if($blog->status === 'published')
                        <span class="badge badge-success" style="margin-top: 4px;">Published</span>
                    @else
                        <span class="badge badge-secondary" style="margin-top: 4px;">Draft</span>
                    @endif
                </div>
                <div>
                    <span class="text-muted" style="font-size: 12px; display: block;">Published Date</span>
                    <strong>{{ $blog->published_at ? $blog->published_at->format('M d, Y H:i:s') : 'Not published yet' }}</strong>
                </div>
                <div>
                    <span class="text-muted" style="font-size: 12px; display: block;">Created At</span>
                    <strong>{{ $blog->created_at ? $blog->created_at->format('M d, Y H:i:s') : '—' }}</strong>
                </div>
                <div>
                    <span class="text-muted" style="font-size: 12px; display: block;">Last Updated At</span>
                    <strong>{{ $blog->updated_at ? $blog->updated_at->format('M d, Y H:i:s') : '—' }}</strong>
                </div>
            </div>
        </div>

        <div class="card" style="border-color: #d6eaf8;">
            <div class="card-header" style="background: #ebf5fb;">
                <h2 style="color: #1a5276;">SEO Metadata (Admin Only)</h2>
            </div>
            <div class="card-body" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span class="text-muted" style="font-size: 12px; font-weight: 600;">SEO TITLE</span>
                        <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="{{ $blog->seo_title ?? $blog->title }}" style="padding: 2px 8px; font-size: 11px;">Copy SEO Title</button>
                    </div>
                    <div style="background: #fafbfc; padding: 10px; border-radius: 6px; border: 1px solid var(--border); font-size: 13px; word-break: break-all;">
                        {{ $blog->seo_title ?: ($blog->title . ' (Fallback to Title)') }}
                    </div>
                </div>

                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span class="text-muted" style="font-size: 12px; font-weight: 600;">SEO DESCRIPTION</span>
                        <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="{{ $blog->seo_description ?? $blog->excerpt }}" style="padding: 2px 8px; font-size: 11px;">Copy SEO Description</button>
                    </div>
                    <div style="background: #fafbfc; padding: 10px; border-radius: 6px; border: 1px solid var(--border); font-size: 13px; word-break: break-word;">
                        {{ $blog->seo_description ?: ($blog->excerpt ?: 'No description configured') }}
                    </div>
                </div>

                <div>
                    <span class="text-muted" style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">SEO KEYWORDS</span>
                    <div style="background: #fafbfc; padding: 10px; border-radius: 6px; border: 1px solid var(--border); font-size: 13px;">
                        {{ $blog->seo_keywords ?: 'None' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy') || '';
            navigator.clipboard.writeText(textToCopy).then(() => {
                const origText = this.textContent;
                this.textContent = '✓ Copied';
                this.style.background = '#d5f5e3';
                this.style.color = '#1e8449';
                this.style.borderColor = '#a9dfbf';
                setTimeout(() => {
                    this.textContent = origText;
                    this.style.background = '';
                    this.style.color = '';
                    this.style.borderColor = '';
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
