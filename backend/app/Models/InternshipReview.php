<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternshipReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'text',
        'author',
        'role',
        'linkedin_url',
        'row',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'row' => 'integer',
        'sort_order' => 'integer',
    ];
}
