<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pegawai; 
use App\Models\User; 
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    //
    public function index(){
        return view('register');
    }

    public function createAccount(Request $request){

        $pegawaiCheck = Pegawai::find($request->data['nip']);
        $userCheck = User::where('nip','=',$request->data['nip'])->first();
        
        if($pegawaiCheck){            
            if($userCheck){
                return response()->json(['error'=> true,'message' => 'NIP telah memiliki account']);
            }else{
                $user = User::create([
                    'email' => $request->data['email'],
                    'password' => Hash::make($request->data['password']),
                    'nip' => $request->data['nip']
                ]);
                $user->save();
                
                return response()->json(['error'=> false, 'message' => 'Registrasi berhasil']);
            }            
            
        }else{
            return response()->json(['error'=> true,'message' => 'NIP belum terdaftar']);
        }
       
    }
}
