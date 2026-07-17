@if ($errors->any())
    <div class="alert alert-danger" id="validationErrorsSummary" style="display:block;margin-bottom:20px;">
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
        <input type="text" name="slug" id="slugInput" class="form-control @error('slug') form-control-error @enderror"
               value="{{ old('slug', $blog->slug ?? '') }}" placeholder="Leave blank to auto-generate from title"
               data-is-edit="{{ isset($blog) && $blog->exists ? 'true' : 'false' }}">
        @error('slug')<div class="form-error">{{ $message }}</div>@enderror
    </div>
</div>

<div class="publish-section" style="background:#fafbfc; border:1px solid var(--border); border-radius:10px; padding:20px; margin:24px 0;">
    <h3 style="font-size:15px; font-weight:600; color:#1a1a2e; margin-bottom:16px; padding-bottom:10px; border-bottom:1px solid var(--border);">Publishing Controls</h3>
    <div class="form-row">
        <div class="form-group" style="margin-bottom: {{ isset($blog) && $blog->exists ? '16px' : '0' }};">
            <label>Status <span class="required">*</span></label>
            <select name="status" class="form-control @error('status') form-control-error @enderror" required>
                <option value="draft" {{ old('status', $blog->status ?? 'draft') === 'draft' ? 'selected' : '' }}>Draft</option>
                <option value="published" {{ old('status', $blog->status ?? '') === 'published' ? 'selected' : '' }}>Published</option>
            </select>
            @error('status')<div class="form-error">{{ $message }}</div>@enderror
        </div>
        <div class="form-group" style="margin-bottom: {{ isset($blog) && $blog->exists ? '16px' : '0' }};">
            <label>Published Date</label>
            <input type="datetime-local" name="published_at" class="form-control @error('published_at') form-control-error @enderror"
                   value="{{ old('published_at', isset($blog) && $blog->published_at ? $blog->published_at->format('Y-m-d\TH:i') : '') }}">
            @error('published_at')<div class="form-error">{{ $message }}</div>@enderror
        </div>
    </div>
    @if(isset($blog) && $blog->exists)
    <div class="form-row" style="margin-top:4px;">
        <div class="form-group" style="margin-bottom:0;">
            <label style="color:var(--text-muted);">Created At</label>
            <input type="text" class="form-control" value="{{ $blog->created_at ? $blog->created_at->format('M d, Y H:i:s') : '—' }}" readonly disabled style="background:#f0f2f5; color:#7f8c8d; cursor:not-allowed;">
        </div>
        <div class="form-group" style="margin-bottom:0;">
            <label style="color:var(--text-muted);">Updated At</label>
            <input type="text" class="form-control" value="{{ $blog->updated_at ? $blog->updated_at->format('M d, Y H:i:s') : '—' }}" readonly disabled style="background:#f0f2f5; color:#7f8c8d; cursor:not-allowed;">
        </div>
    </div>
    @endif
</div>

<div class="form-group">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <label style="margin-bottom:0;">Excerpt</label>
        <span id="excerpt_counter" style="font-size:12px; color:var(--text-muted);">0 / 500 characters</span>
    </div>
    <textarea name="excerpt" class="form-control @error('excerpt') form-control-error @enderror" rows="3" placeholder="Brief summary of the blog post...">{{ old('excerpt', $blog->excerpt ?? '') }}</textarea>
    @error('excerpt')<div class="form-error">{{ $message }}</div>@enderror
</div>

<div class="form-group">
    <label>Featured Image</label>
    @if(isset($blog) && $blog->image)
        <div id="currentImageWrapper" style="margin-bottom: 12px;">
            <div style="font-size: 12px; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">Current Image</div>
            <img src="{{ asset('storage/' . $blog->image) }}" alt="Featured Image" style="max-height: 140px; border-radius: 6px; border: 1px solid var(--border); object-fit: contain;">
        </div>
    @endif
    <div id="imagePreviewWrapper" style="margin-bottom: 12px; display: none;">
        <div style="font-size: 12px; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">New Image Preview</div>
        <img id="imagePreviewImg" src="" alt="Image Preview" style="max-height: 140px; border-radius: 6px; border: 1px solid var(--border); object-fit: contain; display: block; margin-bottom: 8px;">
        <button type="button" id="removeImageBtn" class="btn btn-sm btn-secondary" style="color: var(--danger); border-color: #f5b7b1; background: #fff;">
            ✕ Remove selected image
        </button>
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
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <label style="margin-bottom:0;">SEO Title</label>
            <span id="seo_title_counter" style="font-size:12px; color:var(--text-muted);">0 / 60 characters</span>
        </div>
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
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <label style="margin-bottom:0;">SEO Description</label>
        <span id="seo_description_counter" style="font-size:12px; color:var(--text-muted);">0 / 160 characters</span>
    </div>
    <textarea name="seo_description" class="form-control @error('seo_description') form-control-error @enderror" rows="3" placeholder="Meta description for search engines...">{{ old('seo_description', $blog->seo_description ?? '') }}</textarea>
    @error('seo_description')<div class="form-error">{{ $message }}</div>@enderror
</div>

<div style="display:flex;gap:12px;margin-top:24px;">
    <button type="submit" id="blogSubmitBtn" class="btn btn-primary">{{ isset($blog) && $blog->exists ? 'Update Blog' : 'Create Blog' }}</button>
    <a href="{{ route('admin.blogs.index') }}" id="blogCancelBtn" class="btn btn-secondary">Cancel</a>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // 1. AUTO SLUG
    const titleInput = document.querySelector('input[name="title"]');
    const slugInput = document.querySelector('input[name="slug"]');
    if (titleInput && slugInput) {
        const isEdit = slugInput.dataset.isEdit === 'true';
        let autoSlug = !isEdit && !slugInput.value.trim();

        function toSlug(str) {
            return str.toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/[\s-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }

        titleInput.addEventListener('input', function() {
            if (autoSlug) {
                slugInput.value = toSlug(titleInput.value);
                slugInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });

        slugInput.addEventListener('input', function() {
            if (slugInput.value.trim() !== '') {
                autoSlug = false;
            } else if (!isEdit) {
                autoSlug = true;
                slugInput.value = toSlug(titleInput.value);
            }
        });
    }

    // 2. SEO HELPERS & CHAR COUNTERS
    function setupCounter(selector, counterSelector, limit) {
        const el = document.querySelector(selector);
        const counter = document.querySelector(counterSelector);
        if (!el || !counter) return;

        function update() {
            const count = el.value.length;
            counter.textContent = `${count} / ${limit} characters`;
            if (count > limit) {
                counter.style.color = 'var(--danger)';
                counter.style.fontWeight = '600';
                el.classList.add('form-control-error');
            } else {
                counter.style.color = 'var(--text-muted)';
                counter.style.fontWeight = '400';
                el.classList.remove('form-control-error');
            }
        }
        el.addEventListener('input', update);
        update();
    }
    setupCounter('input[name="seo_title"]', '#seo_title_counter', 60);
    setupCounter('textarea[name="seo_description"]', '#seo_description_counter', 160);
    setupCounter('textarea[name="excerpt"]', '#excerpt_counter', 500);

    // 3. IMAGE UX
    const imageInput = document.getElementById('blogImageInput');
    const previewWrap = document.getElementById('imagePreviewWrapper');
    const previewImg = document.getElementById('imagePreviewImg');
    const currentWrap = document.getElementById('currentImageWrapper');
    const removeBtn = document.getElementById('removeImageBtn');

    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    previewImg.src = event.target.result;
                    previewWrap.style.display = 'block';
                    if (currentWrap) currentWrap.style.display = 'none';
                };
                reader.readAsDataURL(file);
            } else {
                previewWrap.style.display = 'none';
                previewImg.src = '';
                if (currentWrap) currentWrap.style.display = 'block';
            }
        });
    }
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            if (imageInput) imageInput.value = '';
            if (previewWrap) previewWrap.style.display = 'none';
            if (previewImg) previewImg.src = '';
            if (currentWrap) currentWrap.style.display = 'block';
            if (imageInput) imageInput.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    // 4. FORM UX & UNSAVED CHANGES
    const form = document.querySelector('form[action*="blogs"]');
    let formDirty = false;

    if (form) {
        form.addEventListener('input', () => { formDirty = true; });
        form.addEventListener('change', () => { formDirty = true; });

        window.addEventListener('beforeunload', function(e) {
            if (formDirty) {
                e.preventDefault();
                e.returnValue = '';
                return '';
            }
        });

        const submitBtn = document.getElementById('blogSubmitBtn');
        form.addEventListener('submit', function(e) {
            const contentEl = document.querySelector('textarea[name="content"]');
            if (contentEl && contentEl.ckEditorInstance) {
                contentEl.value = contentEl.ckEditorInstance.getData();
            } else if (contentEl && window.ckEditorInstance) {
                contentEl.value = window.ckEditorInstance.getData();
            }

            if (!form.checkValidity()) {
                return;
            }

            if (form.dataset.submitting === 'true') {
                e.preventDefault();
                return false;
            }
            form.dataset.submitting = 'true';
            formDirty = false;

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span style="display:inline-block;width:14px;height:14px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;animation:spin .6s linear infinite;margin-right:6px;"></span> Submitting...';
            }
        });

        // 5. VALIDATION UX (client-side invalid handling)
        form.addEventListener('invalid', function(e) {
            e.preventDefault();
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) {
                firstInvalid.classList.add('form-control-error');
                scrollToAndFocus(firstInvalid);
            }
        }, true);
    }

    // 5. VALIDATION UX (server-side error handling & scroll/focus helper)
    function scrollToAndFocus(el) {
        if (!el) return;
        if (el.name === 'content' && (el.ckEditorInstance || window.ckEditorInstance)) {
            const editorInst = el.ckEditorInstance || window.ckEditorInstance;
            const editorView = el.nextElementSibling || el.parentElement.querySelector('.ck-editor');
            if (editorView) {
                editorView.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            if (editorInst && editorInst.editing && editorInst.editing.view) {
                editorInst.editing.view.focus();
            }
            return;
        }
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
    }

    const firstServerErr = document.querySelector('.form-control-error');
    if (firstServerErr) {
        scrollToAndFocus(firstServerErr);
    }
});
</script>
<style>
@keyframes spin { to { transform: rotate(360deg); } }
</style>
