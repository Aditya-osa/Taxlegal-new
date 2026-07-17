<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function blogsCreated(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        // ponytail: bidirectionality for created_by
        return $this->hasMany(Blog::class, 'created_by');
    }

    public function blogsUpdated(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        // ponytail: bidirectionality for updated_by
        return $this->hasMany(Blog::class, 'updated_by');
    }
}
