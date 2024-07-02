<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request) {
        try {
            $validate = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8',
            ]);

            $validate["password"] = Hash::make($validate["password"]);

            $register = User::create([
                'name' => $validate['name'],
                'email' => $validate['email'],
                'password' => $validate['password']
            ]);

            return response()->json([
                'message' => 'Register created successfully',
                'register' => $register
            ], 201);

        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Failed to register',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    public function login(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => 'required|email',
                'password' => 'required|string'
            ]);
    
            $user = User::where('email', $credentials['email'])->first();
    
            if (!$user || !Hash::check($credentials['password'], $user->password)) {
                return response()->json([
                    'message' => 'Unauthorized',
                ], 401);
            }
    
            $token = JWTAuth::fromUser($user);
    
            return response()->json([
                'message' => 'Login successful',
                'user' => $user,
                'token' => $token 
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Failed to login',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
