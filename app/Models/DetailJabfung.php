<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetailJabfung extends Model
{
    //
    protected $table = 'detail_jabfung';

    public $timestamps = true;

    public function kategori()
    {
        return $this->belongsTo('App\Models\Kategori', 'kategori');
    }

    public function jabfung()
    {
        return $this->belongsTo('App\Models\JabatanFungsional', 'jabfung');
    }

    public function jabatan_fungsional()
    {
        return $this->belongsTo('App\Models\JabatanFungsional', 'jabfung');
    }

    public function jenjang_jabatan()
    {
        return $this->hasMany('App\Models\JenjangJabatan', 'id');
    }
}
