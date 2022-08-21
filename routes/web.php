<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\StockController;

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

Route::get('/welcome', function () {
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
    Route::get('/', [ItemController::class, 'index'])->name('item.index');
    Route::post('/items',  [ItemController::class, 'store']);
    Route::get('/items/create',  [ItemController::class, 'create']);
    Route::get('/items/{item}',  [ItemController::class, 'show']);
    //Inertia.jsではファイルの処理においてputが使えないためpostで更新する
    Route::post('/items/{item}',  [ItemController::class, 'update']);
    Route::delete('/items/{item}',  [ItemController::class, 'delete']);
    Route::get('/items/{item}/edit',  [ItemController::class, 'edit']);
    
    //Stockのルーティング
    Route::get('/stock', [StockController::class,'index']);
    Route::get('/stock/{item}/borrow', [StockController::class,'create']);
    Route::post('/stock', [StockController::class,'store']);
    Route::get('/stock/{item}', [StockController::class,'show']);
    Route::get('/stock/{item}/return', [StockController::class, 'edit']);
    Route::put('/stock/{item}', [StockController::class,'update']);
    Route::delete('/stock/{item}', [StockController::class,'delete']);
    
});

require __DIR__.'/auth.php';
