<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login — TaxLegal</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-wrapper {
            width: 100%;
            max-width: 420px;
            padding: 20px;
        }
        .login-logo {
            text-align: center;
            margin-bottom: 32px;
        }
        .login-logo .logo-text {
            font-size: 36px;
            font-weight: 800;
            color: #fff;
            letter-spacing: -1px;
        }
        .login-logo .logo-text span { color: #c0392b; }
        .login-logo small {
            display: block;
            color: rgba(255,255,255,.5);
            font-size: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-top: 6px;
        }
        .login-card {
            background: rgba(255,255,255,.97);
            border-radius: 20px;
            padding: 40px 36px;
            box-shadow: 0 25px 60px rgba(0,0,0,.4);
        }
        .login-card h2 {
            font-size: 22px;
            font-weight: 700;
            color: #1a1a2e;
            margin-bottom: 6px;
        }
        .login-card p { color: #7f8c8d; font-size: 14px; margin-bottom: 28px; }
        .form-group { margin-bottom: 18px; }
        .form-group label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 6px;
        }
        .form-control {
            width: 100%;
            padding: 12px 16px;
            border: 1.5px solid #dfe6e9;
            border-radius: 10px;
            font-size: 15px;
            font-family: inherit;
            color: #2c3e50;
            background: #fff;
            outline: none;
            transition: border-color .2s, box-shadow .2s;
        }
        .form-control:focus {
            border-color: #c0392b;
            box-shadow: 0 0 0 3px rgba(192,57,43,.1);
        }
        .form-error {
            color: #c0392b;
            font-size: 12px;
            margin-top: 5px;
        }
        .check-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 22px;
        }
        .check-row input { accent-color: #c0392b; width: 16px; height: 16px; cursor: pointer; }
        .check-row label { font-size: 13px; color: #7f8c8d; cursor: pointer; }
        .btn-login {
            width: 100%;
            background: #c0392b;
            color: #fff;
            border: none;
            padding: 14px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: background .2s;
            font-family: inherit;
        }
        .btn-login:hover { background: #96281b; }
        .alert-danger {
            background: #fde8e8;
            color: #c0392b;
            border: 1px solid #f5b7b1;
            padding: 12px 16px;
            border-radius: 10px;
            font-size: 13px;
            margin-bottom: 18px;
        }
    </style>
</head>
<body>
<div class="login-wrapper">
    <div class="login-logo">
        <div class="logo-text">Tax<span>Legal</span></div>
        <small>Admin Panel</small>
    </div>

    <div class="login-card">
        <h2>Welcome back</h2>
        <p>Sign in to manage your website content</p>

        @if ($errors->any())
            <div class="alert-danger">{{ $errors->first() }}</div>
        @endif

        <form method="POST" action="{{ route('admin.login') }}">
            @csrf

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" class="form-control"
                       value="{{ old('email') }}" placeholder="admin@taxlegal.in" required autofocus>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" class="form-control"
                       placeholder="••••••••" required>
            </div>

            <div class="check-row">
                <input type="checkbox" id="remember" name="remember">
                <label for="remember">Keep me signed in</label>
            </div>

            <button type="submit" class="btn-login">Sign In →</button>
        </form>
    </div>
</div>
</body>
</html>
