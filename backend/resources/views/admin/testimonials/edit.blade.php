@extends('admin.layout')

@section('title', 'Edit Testimonial')
@section('page-title', 'Edit Testimonial')

@section('content')
<div style="max-width:860px;">
    <div class="card">
        <div class="card-header">
            <h2>Edit — {{ $testimonial->name }}</h2>
            <a href="{{ route('admin.testimonials.index') }}" class="btn btn-secondary">← Back</a>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('admin.testimonials.update', $testimonial) }}">
                @csrf @method('PUT')

                <div class="form-row">
                    <div class="form-group">
                        <label>Client Name <span class="required">*</span></label>
                        <input type="text" name="name" class="form-control"
                               value="{{ old('name', $testimonial->name) }}" required>
                        @error('name')<div class="form-error">{{ $message }}</div>@enderror
                    </div>
                    <div class="form-group">
                        <label>Company</label>
                        <input type="text" name="company" class="form-control"
                               value="{{ old('company', $testimonial->company) }}">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Designation</label>
                        <input type="text" name="designation" class="form-control"
                               value="{{ old('designation', $testimonial->designation) }}">
                    </div>
                    <div class="form-group">
                        <label>Rating <span class="required">*</span></label>
                        <select name="rating" class="form-control" required>
                            @for($i = 5; $i >= 1; $i--)
                                <option value="{{ $i }}" {{ old('rating', $testimonial->rating) == $i ? 'selected' : '' }}>
                                    {{ str_repeat('★', $i) }} ({{ $i }}/5)
                                </option>
                            @endfor
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Short Excerpt <span class="required">*</span></label>
                    <textarea name="excerpt" class="form-control" rows="3" required>{{ old('excerpt', $testimonial->excerpt) }}</textarea>
                    @error('excerpt')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-group">
                    <label>Full Testimonial <span class="required">*</span></label>
                    <textarea name="testimonial" class="form-control" rows="6" required>{{ old('testimonial', $testimonial->testimonial) }}</textarea>
                    @error('testimonial')<div class="form-error">{{ $message }}</div>@enderror
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Sort Order</label>
                        <input type="number" name="sort_order" class="form-control"
                               value="{{ old('sort_order', $testimonial->sort_order) }}">
                    </div>
                    <div class="form-group" style="display:flex;align-items:flex-end;padding-bottom:4px;">
                        <div class="toggle-wrap">
                            <input type="checkbox" id="is_active" name="is_active" value="1"
                                   {{ old('is_active', $testimonial->is_active) ? 'checked' : '' }}>
                            <span>Active (visible on website)</span>
                        </div>
                    </div>
                </div>

                <div style="display:flex;gap:12px;margin-top:8px;">
                    <button type="submit" class="btn btn-primary">Update Testimonial</button>
                    <a href="{{ route('admin.testimonials.index') }}" class="btn btn-secondary">Cancel</a>
                    <form method="POST" action="{{ route('admin.testimonials.destroy', $testimonial) }}"
                          onsubmit="return confirm('Are you sure you want to delete this testimonial?')"
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
