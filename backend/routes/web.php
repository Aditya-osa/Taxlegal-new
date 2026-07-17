<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BlogController;
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

        Route::get('/blogs/trash', [BlogController::class, 'trash'])->name('blogs.trash');
        Route::post('/blogs/{blog}/restore', [BlogController::class, 'restore'])->name('blogs.restore')->withTrashed();
        Route::delete('/blogs/{blog}/force-delete', [BlogController::class, 'forceDelete'])->name('blogs.forceDelete')->withTrashed();
        Route::get('/blogs/{blog}/preview', [BlogController::class, 'preview'])->name('blogs.preview');
        Route::patch('/blogs/{blog}/status', [BlogController::class, 'updateStatus'])->name('blogs.updateStatus');
        Route::resource('blogs', BlogController::class);

        Route::resource('testimonials', TestimonialController::class);
        Route::resource('internship-reviews', InternshipReviewController::class);
    });
});

