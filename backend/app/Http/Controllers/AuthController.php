<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        return User::create([
            'name'=> $request->input(key:'name'),
            'email'=> $request->input(key:'email'),
            'password'=>Hash::make($request->input(key:'password'))
        ]);
    }

    public function user(){
        return 'Authenticated user';
    }
}
