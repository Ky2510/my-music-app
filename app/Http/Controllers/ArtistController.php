<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ArtistController extends Controller
{
    public function index()
    {
        $artist = Artist::all();
        return response()->json([
            'message' => 'Artist fetching successfully',
            'artist' => $artist
        ], 201);
    }

    public function create(Request $request)
    {
        try {
            $validate = $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $artist = Artist::create([
                'name' => $validate['name'],
            ]);

            return response()->json([
                'message' => 'Artist created successfully',
                'artist' => $artist
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // Log the exception message
            Log::error('Error creating artist: '.$e->getMessage());

            return response()->json([
                'message' => 'An error occurred while creating the artist',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function find($id)
    {
        $artist = Artist::find($id);
        if (!$artist) {
            return response()->json(['message' => 'Artist not found'], 404);
        }

        return response()->json([
            'message' => 'Artist fetching successfully',
            'artist' => $artist
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $artist = Artist::find($id);
        if (!$artist) {
            return response()->json(['message' => 'Artist not found'], 404);
        }

        $artist->update([
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Artist updated successfully',
            'artist' => $artist
        ], 201);
    }

    public function delete($id)
    {
        $artist = Artist::find($id);
        if ($artist) {
            $artist->delete();
            return response()->json(['message' => 'Artist deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Artist not found.'], 404);
        }
    }
}
