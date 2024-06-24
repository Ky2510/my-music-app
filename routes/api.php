<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\MusicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('genre')->controller(GenreController::class)->group(function () {
    Route::get('/', 'index')->name('genre.index');
    Route::post('/create', 'create')->name('genre.create');
    Route::get('/find/{id}', 'find')->name('genre.find');
    Route::post('/update/{id}', 'update')->name('genre.update');
    Route::delete('/delete/{id}', 'delete')->name('genre.delete');
});

Route::prefix('album')->controller(AlbumController::class)->group(function () {
    Route::get('/', 'index')->name('album.index');
    Route::post('/create', 'create')->name('album.create');
    Route::get('/find/{id}', 'find')->name('album.find');
    Route::post('/update/{id}', 'update')->name('album.update');
    Route::delete('/delete/{id}', 'delete')->name('album.delete');
});

Route::prefix('music')->controller(MusicController::class)->group(function () {
    Route::get('/', 'index')->name('music.index');
    Route::post('/create', 'create')->name('music.create');
    Route::get('/find/{id}', 'find')->name('music.find');
    Route::post('/update/{id}', 'update')->name('music.update');
    Route::delete('/delete/{id}', 'delete')->name('music.delete');
});

Route::prefix('artist')->controller(ArtistController::class)->group(function () {
    Route::get('/', 'index')->name('artist.index');
    Route::post('/create', 'create')->name('artist.create');
    Route::get('/find/{id}', 'find')->name('artist.find');
    Route::post('/update/{id}', 'update')->name('artist.update');
    Route::delete('/delete/{id}', 'delete')->name('artist.delete');
});