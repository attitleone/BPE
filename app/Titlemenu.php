<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Titlemenu extends Model  {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'titlemenu';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['PID', 'Title', 'Name', 'Class', 'created_by', 'updated_by', 'DeleteFlag'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'created_by', 'updated_by', 'DeleteFlag'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = ['Title' => 'boolean', 'DeleteFlag' => 'boolean'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [];

}