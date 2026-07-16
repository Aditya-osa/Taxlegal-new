@extends('admin.layout')

@section('title', 'Internship Reviews')
@section('page-title', 'Internship Reviews')

@section('content')
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-label">Total</div>
        <div class="stat-value">{{ $reviews->total() }}</div>
        <div class="stat-sub">reviews</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Row 1 (Left)</div>
        <div class="stat-value">{{ \App\Models\InternshipReview::where('row', 1)->count() }}</div>
        <div class="stat-sub">scrolls left</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Row 2 (Right)</div>
        <div class="stat-value">{{ \App\Models\InternshipReview::where('row', 2)->count() }}</div>
        <div class="stat-sub">scrolls right</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Active</div>
        <div class="stat-value">{{ \App\Models\InternshipReview::where('is_active', true)->count() }}</div>
        <div class="stat-sub">shown on site</div>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <h2>All Internship Reviews</h2>
        <a href="{{ route('admin.internship-reviews.create') }}" class="btn btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add New
        </a>
    </div>

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Role / Year</th>
                    <th>Review Preview</th>
                    <th>Row</th>
                    <th>Status</th>
                    <th>Order</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($reviews as $r)
                <tr>
                    <td class="text-muted" style="font-size:12px;">{{ $r->id }}</td>
                    <td style="font-weight:600;">
                        {{ $r->author }}
                        @if($r->linkedin_url)
                            <a href="{{ $r->linkedin_url }}" target="_blank" style="color:#0077b5;font-size:11px;margin-left:4px;">in</a>
                        @endif
                    </td>
                    <td style="font-size:13px;color:#7f8c8d;">{{ $r->role }}</td>
                    <td><div class="text-truncate" style="max-width:220px;font-size:13px;">{{ $r->text }}</div></td>
                    <td>
                        <span class="badge {{ $r->row == 1 ? 'badge-info' : 'badge-warning' }}">
                            Row {{ $r->row }} {{ $r->row == 1 ? '(←)' : '(→)' }}
                        </span>
                    </td>
                    <td>
                        @if($r->is_active)
                            <span class="badge badge-success">Active</span>
                        @else
                            <span class="badge badge-secondary">Hidden</span>
                        @endif
                    </td>
                    <td><span class="text-muted">{{ $r->sort_order }}</span></td>
                    <td>
                        <div style="display:flex;gap:6px;">
                            <a href="{{ route('admin.internship-reviews.edit', $r) }}" class="btn btn-sm btn-warning">Edit</a>
                            <form method="POST" action="{{ route('admin.internship-reviews.destroy', $r) }}"
                                  onsubmit="return confirm('Delete this review?')">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="8" style="text-align:center;color:#7f8c8d;padding:40px;">
                        No reviews yet. <a href="{{ route('admin.internship-reviews.create') }}">Add one →</a>
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($reviews->hasPages())
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;">
            {{ $reviews->links('admin.pagination') }}
        </div>
    @endif
</div>
@endsection
