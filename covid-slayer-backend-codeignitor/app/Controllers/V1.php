<?php

namespace App\Controllers;

class V1 extends BaseController
{
    public function index()
    {
        return view('welcome_message');
    }
}
