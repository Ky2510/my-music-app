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
        Schema::create('choice_music', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('artistId');
            $table->unsignedBigInteger('musicId');
            $table->timestamps();

            $table->foreign('artistId')->on("artists")->references('id');
            $table->foreign('musicId')->on("music")->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('choice_music');
    }
};
