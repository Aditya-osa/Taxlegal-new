<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InternshipReview;

class InternshipReviewController extends Controller
{
    public function index()
    {
        $row1 = InternshipReview::where('is_active', true)->where('row', 1)
            ->orderBy('sort_order')->orderBy('id')
            ->get(['id', 'text', 'author', 'role', 'linkedin_url']);

        $row2 = InternshipReview::where('is_active', true)->where('row', 2)
            ->orderBy('sort_order')->orderBy('id')
            ->get(['id', 'text', 'author', 'role', 'linkedin_url']);

        return response()->json(['row1' => $row1, 'row2' => $row2]);
    }
}
