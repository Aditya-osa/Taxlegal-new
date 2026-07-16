@extends('admin.layout')

@section('title', 'Add Testimonial')
@section('page-title', 'Add New Testimonial')

@section('content')
<div style="max-width:860px;">
    <div class="card">
        <div class="card-header">
            <h2>New Client Testimonial</h2>
            <a href="{{ route('admin.testimonials.index') }}" class="btn btn-secondary">← Back</a>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.testimonials.store') }}">
                @csrf

                <div class="form-row">
                    <div class="form-group">
                        <label>Client Name <span class="required">*</span></label>
                        <input type="text" name="name" class="form-control"
                               value="{{ old('name') }}" placeholder="e.g. Mr. Alagappan Ramiya" required>
                        @error('name')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                    <div class="form-group">
                        <label>Company</label>
                        <input type="text" name="company" class="form-control"
                               value="{{ old('company') }}" placeholder="e.g. Toyota Lifts India Pvt. Ltd.">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Designation</label>
                        <input type="text" name="designation" class="form-control"
                               value="{{ old('designation') }}" placeholder="e.g. Managing Director">
                    </div>
                    <div class="form-group">
                        <label>Rating <span class="required">*</span></label>
                        <select name="rating" class="form-control" required>
                            @for($i = 5; $i >= 1; $i--)
                                <option value="{{ $i }}" {{ old('rating', 5) == $i ? 'selected' : '' }}>
                                    {{ str_repeat('★', $i) }} ({{ $i }}/5)
                                </option>
                            @endfor
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Short Excerpt <span class="required">*</span></label>
                    <textarea name="excerpt" class="form-control" rows="3" required
                              placeholder="A brief 1-2 sentence preview shown on cards...">{{ old('excerpt') }}</textarea>
                    @error('excerpt')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-group">
                    <label>Full Testimonial <span class="required">*</span></label>
                    <textarea name="testimonial" class="form-control" rows="6" required
                              placeholder="The complete testimonial text shown in modal...">{{ old('testimonial') }}</textarea>
                    @error('testimonial')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Sort Order</label>
                        <input type="number" name="sort_order" class="form-control"
                               value="{{ old('sort_order') }}" placeholder="Leave blank for auto">
                    </div>
                    <div class="form-group" style="display:flex;align-items:flex-end;padding-bottom:4px;">
                        <div class="toggle-wrap">
                            <input type="checkbox" id="is_active" name="is_active" value="1"
                                   {{ old('is_active', '1') ? 'checked' : '' }}>
                            <span>Active (visible on website)</span>
                        </div>
                    </div>
                </div>

                <div style="display:flex;gap:12px;margin-top:8px;">
                    <button type="submit" class="btn btn-primary">Save Testimonial</button>
                    <a href="{{ route('admin.testimonials.index') }}" class="btn btn-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
