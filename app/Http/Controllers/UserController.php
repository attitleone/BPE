<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Role;
use App\Permission;
use App\Menu;
use App\Titlemenu;
class UserController extends Controller
{
    //
    public function index(Request $request)
    {
        // User
        $roles = new Role;
        $Role = $roles->where('PID', $request->user()->RolePID)
                        ->where('DeleteFlag', 0)
                        ->firstOrFail();
        $Name = $request->user()->name;
        $Email = $request->user()->email;
        $photo = $request->user()->photo_url;

        // Menu
        $items = $this->getMenuList();

        // TitleMenu
        $Title = $this->getTitleMenu($items);

        return response()->json([
                                    'user' => [
                                        'Name' => $Name,
                                        'Email' => $Email,
                                        'Role' => $Role->RoleName,
                                        'photo_url' => $photo
                                    ],
                                    'Menu' => [
                                         'items' => $items,
                                         'title' => $Title
                                    ]
                                ]);
    }

    public function getMenuList(){
        $permissionMenu = $this->CheckPermission();
        $menu = new Menu;
        $menuList = $menu->whereIn('PID', $permissionMenu)
                                ->where('Parent',0)
                                ->where('DeleteFlag', 0)
                                ->get();
                                // 
                                
        return $menuList;

    }
    
    public function getTitleMenu($menu){

        $TitleMenu = new Titlemenu;
        $TitlePID = [];
        
        foreach ($menu as $Title) 
        {
           array_push($TitlePID, $Title->TitlePID);   
        }

        $Titles = $TitleMenu->whereIn('PID', $TitlePID)
           ->where('DeleteFlag', 0)
           ->get();

        return $Titles;

    }

    public function CheckPermission(){
        $permissions = new Permission;
        $PermissionMenu = $permissions->where('RolesPID', request()->user()->RolePID)
                                ->where('DeleteFlag', 0)
                                ->pluck('MenuPID');
        return $PermissionMenu;
    }
    
}
