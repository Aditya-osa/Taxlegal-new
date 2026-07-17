<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::share('highlight', function ($text) {
            $search = trim(request('search', ''));
            if ($search === '' || $text === null || $text === '') {
                return e($text);
            }
            return preg_replace('/(' . preg_quote($search, '/') . ')/i', '<mark style="background:#fff3cd;color:#856404;padding:0 2px;border-radius:2px;">$1</mark>', e($text));
        });
    }
}
