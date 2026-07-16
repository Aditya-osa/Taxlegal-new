<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('internship_reviews', function (Blueprint $table) {
            $table->id();
            $table->text('text');
            $table->string('author');
            $table->string('role');
            $table->string('linkedin_url')->nullable();
            $table->unsignedTinyInteger('row')->default(1)->comment('1 = row1 (scroll left), 2 = row2 (scroll right)');
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('internship_reviews');
    }
};
