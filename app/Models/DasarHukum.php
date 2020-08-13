<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DasarHukum extends Model
{
    //
    protected $table = 'dasar_hukum';

    public $timestamps = true;

    protected $casts = [
        'status' => 'boolean',
    ];
}
