@extends('admin.layout')

@section('title', 'Add Internship Review')
@section('page-title', 'Add New Internship Review')

@section('content')
<div style="max-width:860px;">
    <div class="card">
        <div class="card-header">
            <h2>New Internship Review</h2>
            <a href="{{ route('admin.internship-reviews.index') }}" class="btn btn-secondary">← Back</a>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.internship-reviews.store') }}">
                @csrf

                <div class="form-row">
                    <div class="form-group">
                        <label>Intern Name <span class="required">*</span></label>
                        <input type="text" name="author" class="form-control"
                               value="{{ old('author') }}" placeholder="e.g. Trushali Mhatre" required>
                        @error('author')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                    <div class="form-group">
                        <label>Role / Year <span class="required">*</span></label>
                        <input type="text" name="role" class="form-control"
                               value="{{ old('role') }}" placeholder="e.g. Web Development Intern - 2025" required>
                        @error('role')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                </div>

                <div class="form-group">
                    <label>LinkedIn Profile URL</label>
                    <input type="url" name="linkedin_url" class="form-control"
                           value="{{ old('linkedin_url') }}" placeholder="https://linkedin.com/in/...">
                    @error('linkedin_url')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-group">
                    <label>Review Text <span class="required">*</span></label>
                    <textarea name="text" class="form-control" rows="4" required
                              placeholder="What did the intern learn and experience?">{{ old('text') }}</textarea>
                    @error('text')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Marquee Row <span class="required">*</span></label>
                        <select name="row" class="form-control" required>
                            <option value="1" {{ old('row') == '1' ? 'selected' : '' }}>Row 1 — scrolls left ←</option>
                            <option value="2" {{ old('row') == '2' ? 'selected' : '' }}>Row 2 — scrolls right →</option>
                        </select>
                        <div style="font-size:12px;color:#7f8c8d;margin-top:4px;">Determines which marquee row this review appears in</div>
                    </div>
                    <div class="form-group">
                        <label>Sort Order</label>
                        <input type="number" name="sort_order" class="form-control"
                               value="{{ old('sort_order') }}" placeholder="Leave blank for auto">
                    </div>
                </div>

                <div class="form-group">
                    <div class="toggle-wrap">
                        <input type="checkbox" id="is_active" name="is_active" value="1"
                               {{ old('is_active', '1') ? 'checked' : '' }}>
                        <span>Active (visible on website)</span>
                    </div>
                </div>

                <div style="display:flex;gap:12px;margin-top:8px;">
                    <button type="submit" class="btn btn-primary">Save Review</button>
                    <a href="{{ route('admin.internship-reviews.index') }}" class="btn btn-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
