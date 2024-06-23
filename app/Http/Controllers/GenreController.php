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
        return response()->json([
            'message' => 'Genre fetching successfully',
            'genre' => $genres
        ], 201);
    }

    public function create(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $genre = Genre::create([
            'name' => $validate['name']
        ]);

        return response()->json([
            'message' => 'Genre created successfully',
            'genre' => $genre
        ], 201);
    }

    public function find($id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }

        return response()->json([
            'message' => 'Genre fetching successfully',
            'genre' => $genre
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }

        $genre->update([
            'name' => $request->name
        ]);

        return response()->json([
            'message' => 'Genre updated successfully',
            'genre' => $genre
        ], 201);
    }

    public function delete($id)
    {
        $genre = Genre::find($id);
        if ($genre) {
            $genre->delete();
            return response()->json(['message' => 'Genre deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Genre not found.'], 404);
        }
    }
}
