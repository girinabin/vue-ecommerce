<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('products')->group(function() {
    Route::get('/', 'ProductsController@index');
    Route::any('/{any}',function(){
        return view('welcome');
    });
    
});
Route::any('/{any}',function(){
    return view('welcome');
});







