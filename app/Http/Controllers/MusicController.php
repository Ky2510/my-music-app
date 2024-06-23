<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Music;
use Illuminate\Http\Request;

class MusicController extends Controller
{
    public function index()
    {
        $musics = Music::all();
        return response()->json([
            'message' => 'Music fetching successfully',
            'music' => $musics
        ], 201);
    }

    public function create(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'release' => 'nullable|string',
            'linkUrl' => 'required|string',
            'albumId' => 'required',
            'genreId' => 'required',
        ]);
    
        $music = Music::create([
            'title' => $validate['title'], 
            'release' => $validate['release'],
            'linkUrl' => $validate['linkUrl'],
            'genreId' => $validate['genreId'],
            'albumId' => $validate['albumId'],
        ]);
    
        return response()->json([
            'message' => 'Music created successfully',
            'music' => $music
        ], 201);
    }
    

    public function find($id)
    {
        $music = Music::find($id);
        if (!$music) {
            return response()->json(['message' => 'Music not found'], 404);
        }

        return response()->json([
            'message' => 'Music fetching successfully',
            'music' => $music
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $music = Music::find($id);
        if (!$music) {
            return response()->json(['message' => 'Music not found'], 404);
        }

        $music->update([
            'title' => $request->name,
            'release' => $request->release,
            'linkUrl' => $request->linkUrl,
            'genreId' => $request->genreId,
            'albumId' => $request->albumId,
        ]);

        return response()->json([
            'message' => 'Music updated successfully',
            'music' => $music
        ], 201);
    }

    public function delete($id)
    {
        $music = Music::find($id);
        if ($music) {
            $music->delete();
            return response()->json(['message' => 'Music deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Music not found.'], 404);
        }
    }
}