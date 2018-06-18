<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Permission;
use App\Titlemenu;
class Menu extends Model  {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'menu';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['PID', 'PageName', 'URL', 'Icon', 'Parent', 'TitlePID', 'HideMenu', 'created_by', 'updated_by', 'DeleteFlag'];

        /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
         'role',
         'children'
    ];

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
    protected $casts = ['HideMenu' => 'boolean', 'DeleteFlag' => 'boolean'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [];

    /**
     * Get the Role Menu attribute.
     *
     * @return string
     */
    public function getRoleAttribute()
    {
        $permissions = new Permission;
        $Permissionrole = $permissions->where('MenuPID', $this->PID)
                                // ->where('DeleteFlag', 0)
                                ->join('roles', 'RolesPID', '=', 'roles.PID')
                                ->pluck('RoleName');
        return $Permissionrole;
    }

    /**
     * Get the Children attribute.
     *
     * @return string
     */
    public function getChildrenAttribute()
    {
        $Menu = new Menu;
        
            return $Children = $Menu->where('Parent', $this->PID)
                                ->where('DeleteFlag', 0)
                                ->get();
    }

}