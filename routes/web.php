<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ItemController;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::group(['middleware' => ['auth']],function(){
    Route::get('/', [ItemController::class, 'index']);
    Route::post('/items',  [ItemController::class, 'store']);
    Route::get('/items/create',  [ItemController::class, 'create']);
    Route::get('/items/{item}',  [ItemController::class, 'show']);
    Route::put('/items/{item}',  [ItemController::class, 'update']);
    Route::delete('/items/{item}',  [ItemController::class, 'delete']);
    Route::get('/items/{item}/edit',  [ItemController::class, 'edit']);
});

require __DIR__.'/auth.php';
