<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\InternshipReviewController;
use Illuminate\Support\Facades\Route;

// Redirect root to admin
Route::get('/', fn() => redirect()->route('admin.dashboard'));

// Admin auth routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Protected admin routes
    Route::middleware('admin.auth')->group(function () {
        Route::get('/dashboard', fn() => redirect()->route('admin.testimonials.index'))->name('dashboard');

        Route::resource('testimonials', TestimonialController::class);
        Route::resource('internship-reviews', InternshipReviewController::class);
    });
});
