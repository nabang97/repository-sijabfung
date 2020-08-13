<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;

class HomeController extends Controller
{
    public function index()
    {
        $sliders= Slider::get();

       return view('home')->with(['sliders'=>$sliders]);
    }
}
