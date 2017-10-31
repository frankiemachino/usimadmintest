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

Route::get('/', function () {
	
	$screen = "dashboard";
	return view('welcome', compact('screen'));
});


Route::get('/configuration', function () {
	
	$screen = "configuration";
	return view('welcome', compact('screen'));

});


Route::get('/collections', function () {
	
	$screen = "collection-index";
	return view('welcome', compact('screen'));

});


Route::get('/products', function () {

	$screen = "product-index";
	return view('welcome', compact('screen'));

});

Route::get('/showcases', function () {
	
	$screen = "showcase-index";
	return view('welcome', compact('screen'));

});

Route::get('/showcases/{id}/edit', function ($id) {

	$screen = "showcase-editor";
	$showcaseId = $id;
	
	return view('welcome', compact('screen', 'showcaseId'));
});

// $screen = "showcase-editor";
// return view('welcome', compact('screen'));
