<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function index()
    {
        $albums = Album::all();
        return response()->json([
            'message' => 'Album fetching successfully',
            'album' => $albums
        ], 201);
    }

    public function create(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'release' => 'nullable|string', 
            'image' => 'nullable|string',
        ]);

        $album = Album::create([
            'name' => $validate['name'],
            'release' => $validate['release'],
            'image' => $validate['image']
        ]);

        return response()->json([
            'message' => 'Album created successfully',
            'album' => $album
        ], 201);
    }

    public function find($id)
    {
        $album = Album::find($id);
        if (!$album) {
            return response()->json(['message' => 'Album not found'], 404);
        }

        return response()->json([
            'message' => 'Album fetching successfully',
            'album' => $album
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $album = Album::find($id);
        if (!$album) {
            return response()->json(['message' => 'Album not found'], 404);
        }

        $album->update([
            'name' => $request->name,
            'release' => $request->release,
            'image' => $request->image,
        ]);

        return response()->json([
            'message' => 'Album updated successfully',
            'album' => $album
        ], 201);
    }

    public function delete($id)
    {
        $album = Album::find($id);
        if ($album) {
            $album->delete();
            return response()->json(['message' => 'Album deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Album not found.'], 404);
        }
    }
}
