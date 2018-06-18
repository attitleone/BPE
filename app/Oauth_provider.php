<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Oauth_provider extends Model  {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'oauth_providers';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'provider', 'provider_user_id', 'access_token', 'refresh_token'];

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
    protected $casts = [];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [];

}