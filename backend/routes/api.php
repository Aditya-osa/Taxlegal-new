<?php

use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\InternshipReviewController;
use Illuminate\Support\Facades\Route;

Route::get('/testimonials', [TestimonialController::class, 'index']);
Route::get('/internship-reviews', [InternshipReviewController::class, 'index']);
