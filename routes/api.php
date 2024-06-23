<?php

use App\Http\Controllers\GenreController;
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