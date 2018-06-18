<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model  {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'department';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['PID', 'DepID', 'DepName', 'created_by', 'updated_by', 'DeleteFlag'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = ['DeleteFlag' => 'boolean'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [];

}