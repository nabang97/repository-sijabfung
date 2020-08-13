<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JabatanFungsional extends Model
{
    //
    protected $table = 'jabatan_fungsional';

    public $timestamps = true;

   
    public function rumpun_jabatan()
    {
        return $this->belongsTo('App\Models\RumpunJabatan', 'id_rumpun_jabatan');
    }

    public function detail_jabfung()
    {
        return $this->hasMany('App\Models\DetailJabfung', 'id');
    }
}
