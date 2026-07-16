<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        Admin::create([
            'name'     => 'TaxLegal Admin',
            'email'    => 'admin@taxlegal.in',
            'password' => Hash::make('TaxLegal@Admin2024'),
        ]);
    }
}
