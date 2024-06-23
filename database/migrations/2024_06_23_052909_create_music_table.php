<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('music', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('genreId');
            $table->unsignedBigInteger('albumId');
            $table->string('title');
            $table->string('release')->nullable();
            $table->string('linkUrl');
            $table->timestamps();

            $table->foreign('genreId')->references('id')->on('genres');
            $table->foreign("albumId")->references('id')->on('albums');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('music');
    }
};
