<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        return view('students.index');
    }
}
