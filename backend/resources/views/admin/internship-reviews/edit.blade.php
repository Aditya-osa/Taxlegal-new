@extends('admin.layout')

@section('title', 'Edit Review')
@section('page-title', 'Edit Internship Review')

@section('content')
<div style="max-width:860px;">
    <div class="card">
        <div class="card-header">
            <h2>Edit — {{ $internshipReview->author }}</h2>
            <a href="{{ route('admin.internship-reviews.index') }}" class="btn btn-secondary">← Back</a>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.internship-reviews.update', $internshipReview) }}">
                @csrf @method('PUT')

                <div class="form-row">
                    <div class="form-group">
                        <label>Intern Name <span class="required">*</span></label>
                        <input type="text" name="author" class="form-control"
                               value="{{ old('author', $internshipReview->author) }}" required>
                        @error('author')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                    <div class="form-group">
                        <label>Role / Year <span class="required">*</span></label>
                        <input type="text" name="role" class="form-control"
                               value="{{ old('role', $internshipReview->role) }}" required>
                        @error('role')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="form-group">
                    <label>LinkedIn Profile URL</label>
                    <input type="url" name="linkedin_url" class="form-control"
                           value="{{ old('linkedin_url', $internshipReview->linkedin_url) }}"
                           placeholder="https://linkedin.com/in/...">
                    @error('linkedin_url')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-group">
                    <label>Review Text <span class="required">*</span></label>
                    <textarea name="text" class="form-control" rows="4" required>{{ old('text', $internshipReview->text) }}</textarea>
                    @error('text')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Marquee Row <span class="required">*</span></label>
                        <select name="row" class="form-control" required>
                            <option value="1" {{ old('row', $internshipReview->row) == 1 ? 'selected' : '' }}>Row 1 — scrolls left ←</option>
                            <option value="2" {{ old('row', $internshipReview->row) == 2 ? 'selected' : '' }}>Row 2 — scrolls right →</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Sort Order</label>
                        <input type="number" name="sort_order" class="form-control"
                               value="{{ old('sort_order', $internshipReview->sort_order) }}">
                    </div>
                </div>

                <div class="form-group">
                    <div class="toggle-wrap">
                        <input type="checkbox" id="is_active" name="is_active" value="1"
                               {{ old('is_active', $internshipReview->is_active) ? 'checked' : '' }}>
                        <span>Active (visible on website)</span>
                    </div>
                </div>

                <div style="display:flex;gap:12px;margin-top:8px;">
                    <button type="submit" class="btn btn-primary">Update Review</button>
                    <a href="{{ route('admin.internship-reviews.index') }}" class="btn btn-secondary">Cancel</a>
                    <form method="POST" action="{{ route('admin.internship-reviews.destroy', $internshipReview) }}"
                          onsubmit="return confirm('Are you sure you want to delete this review?')"
                          style="margin-left:auto;">
                        @csrf @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
