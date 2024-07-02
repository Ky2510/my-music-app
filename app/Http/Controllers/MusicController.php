<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ChoiceMusic;
use App\Models\Music;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class MusicController extends Controller
{
    public function index()
    {
        $musics = Music::with(['genre', 'album'])->get();
        $response = $musics->map(function ($music){
            return [
                'genreId' => [
                    'name' => $music->genre->name ?? 'Unknown Genre'
                ],
                'albumId' => [
                    'name' => $music->album->name ?? 'Unknown Album',
                    'release' => $music->album->release ?? 'Unknown release Album',
                    'image' => $music->album->image ?? 'Unknown image Album',
                ],
                'title' => $music->title,
                'release' => $music->release,
                'linkUrl' => $music->linkUrl,
                'created_at' => $music->created_at,
                'updated_at' => $music->updated_at,
            ];
        });

        return response()->json([
            'message' => 'Music fetching successfully',
            'music' => $response
        ], 201);
    }

    public function create(Request $request)
    {
        try {
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
        }catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // Log the exception message
            Log::error('Error creating choice music: '.$e->getMessage());

            return response()->json([
                'message' => 'An error occurred while creating the choice music',
                'error' => $e->getMessage()
            ], 500);
        }
       
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

    public function musicFindAlbum($albumId)
    {

        $choiceMusics = ChoiceMusic::whereHas('music.album', function ($query) use ($albumId) {
            $query->where('id', $albumId);
        })->with('music.album', 'music.genre', 'artist')->get();

        // Memformat response
        $formattedMusics = $choiceMusics->map(function ($choiceMusic) {
            return [
                'musicId' => [
                    'title' => $choiceMusic->music->title,
                    'albumId' => [
                        'name' => $choiceMusic->music->album->name,
                        'release' => $choiceMusic->music->album->release,
                        'image' => $choiceMusic->music->album->image,
                    ],
                    'genreId' => [
                        'name' => $choiceMusic->music->genre->name,
                    ],
                    'release' => $choiceMusic->music->release,
                    'linkUrl' => $choiceMusic->music->linkUrl,
                    'created_at' => $choiceMusic->music->created_at,
                    'updated_at' => $choiceMusic->music->updated_at,
                ],
                'artistId' => [
                    'name' => $choiceMusic->artist->name,
                ],
            ];
        });

        return response()->json([
            'message' => 'Music fetching successfully',
            'choice_musics' => $formattedMusics,
        ], 200);
    }
    

}
