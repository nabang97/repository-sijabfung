<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JenjangJabatan extends Model
{
    //
    protected $table = 'jenjang_jabfung';
    public $timestamps = true;

    public function detail_jabfung()
    {
        return $this->belongsTo('App\Models\DetailJabfung', 'id_detail_jabfung');
    }

    public function pegawai()
    {
        return $this->hasMany('App\Models\Pegawai', 'id');
    }
}
