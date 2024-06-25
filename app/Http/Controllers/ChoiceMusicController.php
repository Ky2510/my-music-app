<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ChoiceMusic;
use App\Models\Music;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class ChoiceMusicController extends Controller
{
    public function index()
    {
        $choiceMusics = ChoiceMusic::with(['music', 'artist'])->get();
        $response = $choiceMusics->map(function ($choiceMusic){
            return [
                'musicId' => [
                    'title' => $choiceMusic->music->title ?? 'Unknown Music',
                    'albumId' => [
                        'name' => $choiceMusic->music->album->name ?? 'Unknown Album',
                        'release' => $choiceMusic->music->album->release ?? 'Unknown release Album',
                        'image' => $choiceMusic->music->album->image ?? 'Unknown image Album',
                    ],
                    'genreId' => [
                        'name' => $choiceMusic->music->genre->name ?? 'Unknown Genre Name',
                    ],
                    'release' => $choiceMusic->music->release,
                    'linkUrl' => $choiceMusic->music->linkUrl,
                    'created_at' => $choiceMusic->music->created_at,
                    'updated_at' => $choiceMusic->music->updated_at,
                ],
                'artistId' => [
                    'name' => $choiceMusic->artist->name ?? 'Unknown Artist'
                ],
            ];
        });

        return response()->json([
            'message' => 'Music fetching successfully',
            'choice_musics' => $response
        ], 201);
    }

    public function create(Request $request)
    {
        try {
            $validate = $request->validate([
                'artistId' => 'required',
                'musicId' => 'required',
            ]);
        
            $choiceMusic = ChoiceMusic::create([
                'artistId' => $validate['artistId'], 
                'musicId' => $validate['musicId'],
            ]);
        
            return response()->json([
                'message' => 'Choice music created successfully',
                'choiceMusic' => $choiceMusic
            ], 201);
        }  catch (ValidationException $e) {
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
        $choiceMusic = ChoiceMusic::find($id);
        if (!$choiceMusic) {
            return response()->json(['message' => 'Choice Music not found'], 404);
        }

        return response()->json([
            'message' => 'Choice Music fetching successfully',
            'choiceMusic' => $choiceMusic
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $choiceMusic = ChoiceMusic::find($id);
        if (!$choiceMusic) {
            return response()->json(['message' => 'Choice Music not found'], 404);
        }

        $choiceMusic->update([
            'artistId' => $request->artistId,
            'musicId' => $request->musicId,
        ]);

        return response()->json([
            'message' => 'Music updated successfully',
            'choiceMusic' => $choiceMusic
        ], 201);
    }

    public function delete($id)
    {
        $choiceMusic = ChoiceMusic::find($id);
        if ($choiceMusic) {
            $choiceMusic->delete();
            return response()->json(['message' => 'Choice Music deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Choice Music not found.'], 404);
        }
    }
}
