<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);
        
        $albumData = [
            'name' => $validate['name'],
            'release' => $validate['release'],
        ];
        
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('public/images'); 
            $albumData['image'] = $path;
        } else {
            return response()->json(['message' => 'No image uploaded'], 400);
        }
        
        $album = Album::create($albumData);
        
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
        if (!$album) {
            return response()->json(['message' => 'Album not found.'], 404);
        }
    
        try {
            if ($album->image) {
                Storage::delete($album->image);
            }
    
            $album->delete();
    
            return response()->json(['message' => 'Album deleted successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete album: ' . $e->getMessage()], 500);
        }
    }
    

}
