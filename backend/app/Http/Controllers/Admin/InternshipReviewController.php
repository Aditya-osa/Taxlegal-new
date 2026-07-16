<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InternshipReview;
use Illuminate\Http\Request;

class InternshipReviewController extends Controller
{
    public function index()
    {
        $reviews = InternshipReview::orderBy('row')->orderBy('sort_order')->orderBy('id')->paginate(20);
        return view('admin.internship-reviews.index', compact('reviews'));
    }

    public function create()
    {
        return view('admin.internship-reviews.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'text'         => ['required', 'string'],
            'author'       => ['required', 'string', 'max:255'],
            'role'         => ['required', 'string', 'max:255'],
            'linkedin_url' => ['nullable', 'url', 'max:500'],
            'row'          => ['required', 'integer', 'in:1,2'],
            'is_active'    => ['boolean'],
            'sort_order'   => ['nullable', 'integer'],
        ]);

        $data['is_active'] = $request->has('is_active');
        $data['sort_order'] = $data['sort_order'] ?? (InternshipReview::where('row', $data['row'])->max('sort_order') + 1);

        InternshipReview::create($data);

        return redirect()->route('admin.internship-reviews.index')->with('success', 'Review added successfully.');
    }

    public function edit(InternshipReview $internshipReview)
    {
        return view('admin.internship-reviews.edit', compact('internshipReview'));
    }

    public function update(Request $request, InternshipReview $internshipReview)
    {
        $data = $request->validate([
            'text'         => ['required', 'string'],
            'author'       => ['required', 'string', 'max:255'],
            'role'         => ['required', 'string', 'max:255'],
            'linkedin_url' => ['nullable', 'url', 'max:500'],
            'row'          => ['required', 'integer', 'in:1,2'],
            'is_active'    => ['boolean'],
            'sort_order'   => ['nullable', 'integer'],
        ]);

        $data['is_active'] = $request->has('is_active');

        $internshipReview->update($data);

        return redirect()->route('admin.internship-reviews.index')->with('success', 'Review updated successfully.');
    }

    public function destroy(InternshipReview $internshipReview)
    {
        $internshipReview->delete();
        return redirect()->route('admin.internship-reviews.index')->with('success', 'Review deleted.');
    }
}
