<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Golongan extends Model
{
    //
    protected $table = 'golongans';
    protected $fillable = ['name'];
    public $timestamps = true;

    public function pegawais()
    {
        return $this->hasMany('App\Models\Pegawai', 'id');
    }
}
