<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin') — TaxLegal</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --primary: #c0392b;
            --primary-dark: #96281b;
            --sidebar-bg: #1a1a2e;
            --sidebar-hover: #16213e;
            --sidebar-active: #c0392b;
            --text-light: #ecf0f1;
            --text-muted: #95a5a6;
            --bg: #f0f2f5;
            --card-bg: #ffffff;
            --border: #e1e8ed;
            --success: #27ae60;
            --danger: #e74c3c;
            --warning: #f39c12;
            --info: #2980b9;
        }

        body { font-family: 'Inter', sans-serif; background: var(--bg); color: #2c3e50; display: flex; min-height: 100vh; }

        /* Sidebar */
        .sidebar {
            width: 260px;
            background: var(--sidebar-bg);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0; left: 0; bottom: 0;
            z-index: 100;
            overflow-y: auto;
        }
        .sidebar-brand {
            padding: 24px 20px;
            border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .sidebar-brand .logo-text {
            font-size: 22px;
            font-weight: 700;
            color: #fff;
            letter-spacing: -.5px;
        }
        .sidebar-brand .logo-text span { color: var(--primary); }
        .sidebar-brand small {
            display: block;
            font-size: 11px;
            color: var(--text-muted);
            margin-top: 2px;
            letter-spacing: .5px;
            text-transform: uppercase;
        }
        .sidebar-nav { padding: 16px 0; flex: 1; }
        .nav-section-label {
            font-size: 10px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 12px 20px 6px;
        }
        .nav-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 11px 20px;
            color: rgba(255,255,255,.7);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all .2s;
            border-left: 3px solid transparent;
        }
        .nav-link:hover { background: var(--sidebar-hover); color: #fff; }
        .nav-link.active { background: rgba(192,57,43,.15); color: #fff; border-left-color: var(--primary); }
        .nav-link svg { width: 18px; height: 18px; flex-shrink: 0; }

        .sidebar-footer {
            padding: 16px 20px;
            border-top: 1px solid rgba(255,255,255,.08);
        }
        .sidebar-footer form button {
            width: 100%;
            background: rgba(192,57,43,.2);
            border: 1px solid rgba(192,57,43,.4);
            color: #fff;
            padding: 9px 16px;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: background .2s;
            font-family: inherit;
        }
        .sidebar-footer form button:hover { background: var(--primary); }

        /* Main */
        .main-content {
            margin-left: 260px;
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .topbar {
            background: var(--card-bg);
            border-bottom: 1px solid var(--border);
            padding: 0 28px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 50;
        }
        .topbar h1 { font-size: 20px; font-weight: 600; color: #1a1a2e; }
        .topbar-right { display: flex; align-items: center; gap: 12px; }
        .admin-badge {
            background: var(--sidebar-bg);
            color: #fff;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
        }

        .page-content { padding: 28px; flex: 1; }

        /* Alerts */
        .alert {
            padding: 14px 18px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .alert-success { background: #d5f5e3; color: #1e8449; border: 1px solid #a9dfbf; }
        .alert-danger  { background: #fde8e8; color: #c0392b; border: 1px solid #f5b7b1; }

        /* Cards */
        .card {
            background: var(--card-bg);
            border-radius: 12px;
            border: 1px solid var(--border);
            overflow: hidden;
            box-shadow: 0 1px 4px rgba(0,0,0,.06);
        }
        .card-header {
            padding: 18px 24px;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #fafbfc;
        }
        .card-header h2 { font-size: 16px; font-weight: 600; color: #1a1a2e; }
        .card-body { padding: 24px; }

        /* Table */
        .table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        thead th {
            background: #f7f8fa;
            padding: 12px 16px;
            text-align: left;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: .5px;
            border-bottom: 1px solid var(--border);
        }
        tbody td {
            padding: 14px 16px;
            border-bottom: 1px solid #f0f0f0;
            vertical-align: middle;
            color: #2c3e50;
        }
        tbody tr:last-child td { border-bottom: none; }
        tbody tr:hover td { background: #fafbfc; }

        /* Badges */
        .badge {
            display: inline-flex;
            align-items: center;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .3px;
        }
        .badge-success { background: #d5f5e3; color: #1e8449; }
        .badge-secondary { background: #f0f0f0; color: #7f8c8d; }
        .badge-info { background: #d6eaf8; color: #1a5276; }
        .badge-warning { background: #fef9e7; color: #b7770d; }

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            text-decoration: none;
            border: none;
            transition: all .2s;
            font-family: inherit;
        }
        .btn-primary { background: var(--primary); color: #fff; }
        .btn-primary:hover { background: var(--primary-dark); }
        .btn-secondary { background: #ecf0f1; color: #2c3e50; border: 1px solid var(--border); }
        .btn-secondary:hover { background: #dfe6e9; }
        .btn-sm { padding: 5px 11px; font-size: 13px; }
        .btn-danger { background: #fde8e8; color: var(--danger); border: 1px solid #f5b7b1; }
        .btn-danger:hover { background: var(--danger); color: #fff; }
        .btn-warning { background: #fef9e7; color: var(--warning); border: 1px solid #f9e4b7; }
        .btn-warning:hover { background: var(--warning); color: #fff; }

        /* Forms */
        .form-group { margin-bottom: 20px; }
        .form-group label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 6px;
        }
        .form-group label .required { color: var(--primary); margin-left: 2px; }
        .form-control {
            width: 100%;
            padding: 10px 14px;
            border: 1.5px solid var(--border);
            border-radius: 8px;
            font-size: 14px;
            font-family: inherit;
            color: #2c3e50;
            background: #fff;
            transition: border-color .2s;
            outline: none;
        }
        .form-control:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(192,57,43,.08); }
        textarea.form-control { resize: vertical; min-height: 100px; }
        .form-error { color: var(--danger); font-size: 12px; margin-top: 4px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }

        /* Checkbox toggle */
        .toggle-wrap { display: flex; align-items: center; gap: 10px; }
        .toggle-wrap input[type="checkbox"] {
            width: 18px; height: 18px;
            accent-color: var(--primary);
            cursor: pointer;
        }
        .toggle-wrap span { font-size: 14px; color: #2c3e50; }

        /* Pagination */
        .pagination { display: flex; gap: 6px; justify-content: center; margin-top: 24px; flex-wrap: wrap; }
        .pagination a, .pagination span {
            padding: 7px 13px;
            border-radius: 8px;
            font-size: 13px;
            text-decoration: none;
            color: #2c3e50;
            border: 1px solid var(--border);
            background: #fff;
        }
        .pagination .active span {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
        }
        .pagination a:hover { background: #f0f0f0; }

        /* Stat cards */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-bottom: 28px; }
        .stat-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px 24px;
            box-shadow: 0 1px 4px rgba(0,0,0,.06);
        }
        .stat-card .stat-label { font-size: 12px; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: .5px; }
        .stat-card .stat-value { font-size: 32px; font-weight: 700; color: #1a1a2e; margin-top: 6px; }
        .stat-card .stat-sub { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

        /* Truncate */
        .text-truncate { max-width: 260px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .text-muted { color: var(--text-muted); }

        /* Responsive */
        @media (max-width: 900px) {
            .form-row, .form-row-3 { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

<aside class="sidebar">
    <div class="sidebar-brand">
        <div class="logo-text">Tax<span>Legal</span></div>
        <small>Admin Panel</small>
    </div>

    <nav class="sidebar-nav">
        <div class="nav-section-label">Content</div>
        <a href="{{ route('admin.blogs.index') }}" class="nav-link {{ request()->routeIs('admin.blogs.*') ? 'active' : '' }}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
            Blog Posts
        </a>
        <a href="{{ route('admin.testimonials.index') }}" class="nav-link {{ request()->routeIs('admin.testimonials.*') ? 'active' : '' }}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            Client Testimonials
        </a>
        <a href="{{ route('admin.internship-reviews.index') }}" class="nav-link {{ request()->routeIs('admin.internship-reviews.*') ? 'active' : '' }}">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            Internship Reviews
        </a>

        <div class="nav-section-label" style="margin-top:12px;">API Endpoints</div>
        <a href="/api/testimonials" target="_blank" class="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            /api/testimonials ↗
        </a>
        <a href="/api/internship-reviews" target="_blank" class="nav-link">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            /api/internship-reviews ↗
        </a>
    </nav>

    <div class="sidebar-footer">
        <form method="POST" action="{{ route('admin.logout') }}">
            @csrf
            <button type="submit">⏻ &nbsp;Logout</button>
        </form>
    </div>
</aside>

<div class="main-content">
    <header class="topbar">
        <h1>@yield('page-title', 'Dashboard')</h1>
        <div class="topbar-right">
            <span class="admin-badge">👤 {{ auth('admin')->user()->name }}</span>
        </div>
    </header>

    <main class="page-content">
        @if(session('success'))
            <div class="alert alert-success">✓ {{ session('success') }}</div>
        @endif
        @if(session('error'))
            <div class="alert alert-danger">✗ {{ session('error') }}</div>
        @endif

        @yield('content')
    </main>
</div>

</body>
</html>
