<?php

namespace App\Http\Controllers;

use App\department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $department = new department;
         $data = $request;
        return response()->json([
            'result'  => $department->get(),
            'total' => $department->get()->count(),
            'data' => $request->Emp_ID
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $department = new Department;
        $data = $department
        ->when($request->Emp_ID, function ($query) use ($request) {
            return $query->where('DepID', $request->Emp_ID);
        })
        ->when($request->Emp_FirstName, function ($query) use ($request) {
            return $query->where('DepName', $request->Emp_FirstName);
        })
        ->get();
        return response()->json([
            'result'  => $data,
            'total'  => $data->count()
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(department $department)
    {
        //
       $result = $department->where('DeleteFlag', 0)
                            ->get();
        return response()->json([
                            'result'  => $result,
                            'total'  => $result->count()
                            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(department $department)
    {
        //
    }
}
