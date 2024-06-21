<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        $genres = Genre::all();
        return response()->json($genres);
    }

    public function create(Request $request)
    {
        // Logic untuk membuat genre baru
    }

    public function find($id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }
        return response()->json($genre);
    }

    public function update(Request $request, $id)
    {
        // Logic untuk mengupdate genre dengan ID tertentu
    }

    public function delete($id)
    {
        // Logic untuk menghapus genre dengan ID tertentu
    }
}
