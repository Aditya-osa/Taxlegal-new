@extends('admin.layout')

@section('title', 'Client Testimonials')
@section('page-title', 'Client Testimonials')

@section('content')
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-label">Total</div>
        <div class="stat-value">{{ $testimonials->total() }}</div>
        <div class="stat-sub">testimonials</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Active</div>
        <div class="stat-value">{{ \App\Models\Testimonial::where('is_active', true)->count() }}</div>
        <div class="stat-sub">shown on site</div>
    </div>
    <div class="stat-card">
        <div class="stat-label">Hidden</div>
        <div class="stat-value">{{ \App\Models\Testimonial::where('is_active', false)->count() }}</div>
        <div class="stat-sub">not shown</div>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <h2>All Testimonials</h2>
        <a href="{{ route('admin.testimonials.create') }}" class="btn btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add New
        </a>
    </div>

    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Company / Designation</th>
                    <th>Excerpt</th>
                    <th>Rating</th>
                    <th>Status</th>
                    <th>Order</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($testimonials as $t)
                <tr>
                    <td class="text-muted" style="font-size:12px;">{{ $t->id }}</td>
                    <td style="font-weight:600;">{{ $t->name }}</td>
                    <td>
                        <div style="font-size:13px;">{{ $t->company ?: '—' }}</div>
                        @if($t->designation)
                            <div style="font-size:12px;color:#7f8c8d;">{{ $t->designation }}</div>
                        @endif
                    </td>
                    <td><div class="text-truncate" style="max-width:240px;font-size:13px;">{{ $t->excerpt }}</div></td>
                    <td>
                        <span style="color:#f39c12;font-size:14px;">
                            @for($i = 0; $i < $t->rating; $i++)★@endfor
                        </span>
                    </td>
                    <td>
                        @if($t->is_active)
                            <span class="badge badge-success">Active</span>
                        @else
                            <span class="badge badge-secondary">Hidden</span>
                        @endif
                    </td>
                    <td><span class="text-muted">{{ $t->sort_order }}</span></td>
                    <td>
                        <div style="display:flex;gap:6px;">
                            <a href="{{ route('admin.testimonials.edit', $t) }}" class="btn btn-sm btn-warning">Edit</a>
                            <form method="POST" action="{{ route('admin.testimonials.destroy', $t) }}"
                                  onsubmit="return confirm('Delete this testimonial?')">
                                @csrf @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                            </form>
                        </div>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="8" style="text-align:center;color:#7f8c8d;padding:40px;">
                        No testimonials yet. <a href="{{ route('admin.testimonials.create') }}">Add one →</a>
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    @if($testimonials->hasPages())
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;">
            {{ $testimonials->links('admin.pagination') }}
        </div>
    @endif
</div>
@endsection
