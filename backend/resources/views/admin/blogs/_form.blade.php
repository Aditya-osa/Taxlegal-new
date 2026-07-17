@if ($errors->any())
    <div class="alert alert-danger" style="display:block;margin-bottom:20px;">
        <div style="font-weight:600;margin-bottom:6px;">✗ Please fix the following errors:</div>
        <ul style="margin-left:20px;font-size:13px;">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<div class="form-row">
    <div class="form-group">
        <label>Title <span class="required">*</span></label>
        <input type="text" name="title" class="form-control @error('title') form-control-error @enderror"
               value="{{ old('title', $blog->title ?? '') }}" placeholder="Enter blog title" required>
        @error('title')<div class="form-error">{{ $message }}</div>@enderror
    </div>
    <div class="form-group">
        <label>Slug</label>
        <input type="text" name="slug" class="form-control @error('slug') form-control-error @enderror"
               value="{{ old('slug', $blog->slug ?? '') }}" placeholder="Leave blank to auto-generate from title">
        @error('slug')<div class="form-error">{{ $message }}</div>@enderror
    </div>
</div>

<div class="form-row">
    <div class="form-group">
        <label>Status <span class="required">*</span></label>
        <select name="status" class="form-control @error('status') form-control-error @enderror" required>
            <option value="draft" {{ old('status', $blog->status ?? 'draft') === 'draft' ? 'selected' : '' }}>Draft</option>
            <option value="published" {{ old('status', $blog->status ?? '') === 'published' ? 'selected' : '' }}>Published</option>
        </select>
        @error('status')<div class="form-error">{{ $message }}</div>@enderror
    </div>
    <div class="form-group">
        <label>Published Date</label>
        <input type="datetime-local" name="published_at" class="form-control @error('published_at') form-control-error @enderror"
               value="{{ old('published_at', isset($blog) && $blog->published_at ? $blog->published_at->format('Y-m-d\TH:i') : '') }}">
        @error('published_at')<div class="form-error">{{ $message }}</div>@enderror
    </div>
</div>

<div class="form-group">
    <label>Excerpt</label>
    <textarea name="excerpt" class="form-control @error('excerpt') form-control-error @enderror" rows="3" placeholder="Brief summary of the blog post...">{{ old('excerpt', $blog->excerpt ?? '') }}</textarea>
    @error('excerpt')<div class="form-error">{{ $message }}</div>@enderror
</div>

<div class="form-group">
    <label>Featured Image</label>
    @if(isset($blog) && $blog->image)
        <div id="currentImageWrapper" style="margin-bottom: 10px;">
            <div style="font-size: 12px; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">Current Image</div>
            <img src="{{ asset('storage/' . $blog->image) }}" alt="Featured Image" style="max-height: 140px; border-radius: 6px; border: 1px solid var(--border);">
        </div>
    @endif
    <div id="imagePreviewWrapper" style="margin-bottom: 10px; display: none;">
        <div style="font-size: 12px; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">New Image Preview</div>
        <img id="imagePreviewImg" src="" alt="Image Preview" style="max-height: 140px; border-radius: 6px; border: 1px solid var(--border);">
    </div>
    <input type="file" name="image" id="blogImageInput" class="form-control @error('image') form-control-error @enderror" accept="image/jpeg,image/png,image/jpg,image/webp">
    @error('image')<div class="form-error">{{ $message }}</div>@enderror
</div>

<div class="form-group">
    <label>Content <span class="required">*</span></label>
    <textarea name="content" class="form-control @error('content') form-control-error @enderror" rows="12" required placeholder="Write blog content...">{{ old('content', $blog->content ?? '') }}</textarea>
    @error('content')<div class="form-error">{{ $message }}</div>@enderror
</div>

<h3 style="font-size: 15px; font-weight: 600; color: #1a1a2e; margin: 24px 0 16px; padding-top: 16px; border-top: 1px solid var(--border);">SEO Settings</h3>

<div class="form-row">
    <div class="form-group">
        <label>SEO Title</label>
        <input type="text" name="seo_title" class="form-control @error('seo_title') form-control-error @enderror"
               value="{{ old('seo_title', $blog->seo_title ?? '') }}" placeholder="Meta title for search engines">
        @error('seo_title')<div class="form-error">{{ $message }}</div>@enderror
    </div>
    <div class="form-group">
        <label>SEO Keywords</label>
        <input type="text" name="seo_keywords" class="form-control @error('seo_keywords') form-control-error @enderror"
               value="{{ old('seo_keywords', $blog->seo_keywords ?? '') }}" placeholder="e.g. tax, law, corporate">
        @error('seo_keywords')<div class="form-error">{{ $message }}</div>@enderror
    </div>
</div>

<div class="form-group">
    <label>SEO Description</label>
    <textarea name="seo_description" class="form-control @error('seo_description') form-control-error @enderror" rows="3" placeholder="Meta description for search engines...">{{ old('seo_description', $blog->seo_description ?? '') }}</textarea>
    @error('seo_description')<div class="form-error">{{ $message }}</div>@enderror
</div>

<div style="display:flex;gap:12px;margin-top:24px;">
    <button type="submit" class="btn btn-primary">{{ isset($blog) && $blog->exists ? 'Update Blog' : 'Create Blog' }}</button>
    <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary">Cancel</a>
</div>

<script>
    // ponytail: native FileReader for live preview without dependencies
    document.getElementById('blogImageInput')?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const previewWrap = document.getElementById('imagePreviewWrapper');
        const previewImg = document.getElementById('imagePreviewImg');
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                previewImg.src = event.target.result;
                previewWrap.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            previewWrap.style.display = 'none';
            previewImg.src = '';
        }
    });
</script>
