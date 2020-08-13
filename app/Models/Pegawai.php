<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    //
    protected $table = 'pegawais';
    protected $primaryKey = 'nip';
    protected $fillable =['nip','name','birthday_date','birthday_place','golongan', 'unit_kerja','id_jenjang_jabfung'];
    public $appends = ['status'];

    public function golongans()
    {
        return $this->belongsTo('App\Models\Golongan', 'golongan');
    }

    public function jenjang_jabatan()
    {
        return $this->belongsTo('App\Models\JenjangJabatan', 'id_jenjang_jabfung');
    }

    public function user()
    {
        return $this->hasMany('App\Models\User', 'nip');
    }

    public function diklat()
    {
        return $this->hasMany('App\Models\Diklat', 'nip');
    }

    public function getStatusAttribute(){
        
        $birth  = \Carbon\Carbon::parse($this->birthday_date);

        $data = $birth->diffInYears(\Carbon\Carbon::now());

        if($data > 65){
            return 1;
        }else{
            return 0;
        }
    }

    public function getNipAttribute($value)
    {
        return (string)$value;
    }
}
