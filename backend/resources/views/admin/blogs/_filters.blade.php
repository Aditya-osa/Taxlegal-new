<div style="background: #fafbfc; padding: 16px 24px; border-bottom: 1px solid var(--border);">
    <form method="GET" action="{{ $actionRoute }}" id="blogFilterForm">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 12px;">
            <input type="text" name="search" class="form-control" style="padding: 6px 12px; width: 220px;" placeholder="Search title, excerpt, SEO..." value="{{ request('search') }}">
            
            <select name="status" class="form-control" style="padding: 6px 12px; width: auto;" onchange="this.form.submit()">
                <option value="">All Status</option>
                <option value="draft" {{ request('status') === 'draft' ? 'selected' : '' }}>Draft</option>
                <option value="unpublished" {{ request('status') === 'unpublished' ? 'selected' : '' }}>Unpublished</option>
                <option value="published" {{ request('status') === 'published' ? 'selected' : '' }}>Published</option>
            </select>

            <select name="sort" class="form-control" style="padding: 6px 12px; width: auto; font-weight: 600;" onchange="this.form.submit()">
                <option value="newest" {{ request('sort', 'newest') === 'newest' ? 'selected' : '' }}>Sort: Newest First</option>
                <option value="oldest" {{ request('sort') === 'oldest' ? 'selected' : '' }}>Sort: Oldest First</option>
                <option value="title_asc" {{ request('sort') === 'title_asc' ? 'selected' : '' }}>Sort: Title (A → Z)</option>
                <option value="title_desc" {{ request('sort') === 'title_desc' ? 'selected' : '' }}>Sort: Title (Z → A)</option>
                <option value="published_at" {{ request('sort') === 'published_at' ? 'selected' : '' }}>Sort: Published Date</option>
                <option value="updated_at" {{ request('sort') === 'updated_at' ? 'selected' : '' }}>Sort: Last Updated</option>
            </select>

            <button type="submit" class="btn btn-secondary btn-sm">Filter</button>
            @if(request()->hasAny(['search', 'status', 'sort', 'created_from', 'created_to', 'published_from', 'published_to']))
                <a href="{{ $actionRoute }}" class="btn btn-secondary btn-sm" style="color: var(--danger);">Reset All</a>
            @endif
        </div>

        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; font-size: 13px; color: var(--text-muted); background: #fff; padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-weight: 600; color: #2c3e50;">Created:</span>
                <input type="date" name="created_from" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('created_from') }}" onchange="this.form.submit()" title="Created From">
                <span>to</span>
                <input type="date" name="created_to" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('created_to') }}" onchange="this.form.submit()" title="Created To">
            </div>
            <div style="width: 1px; height: 20px; background: var(--border);"></div>
            <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-weight: 600; color: #2c3e50;">Published:</span>
                <input type="date" name="published_from" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('published_from') }}" onchange="this.form.submit()" title="Published From">
                <span>to</span>
                <input type="date" name="published_to" class="form-control" style="padding: 4px 8px; width: auto; font-size: 12px;" value="{{ request('published_to') }}" onchange="this.form.submit()" title="Published To">
            </div>
        </div>
    </form>
</div>
