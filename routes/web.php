<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\StockController;
Use App\Http\Controllers\OrderController;

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
    return Inertia::render('User/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth:admin', 'verified'])->name('admin.dashboard');


Route::group(['middleware' => ['auth']],function(){
    //在庫管理のルーティング
    Route::get('/stock', [StockController::class,'index'])->name('stock.index');
    Route::get('/stock/{item}/borrow', [StockController::class,'create']);
    Route::post('/stock', [StockController::class,'store']);
    Route::get('/stock/{item}', [StockController::class,'show']);
    Route::get('/stock/{item}/return', [StockController::class, 'edit']);
    Route::put('/stock/{item}', [StockController::class,'update']);
    Route::delete('/stock/{item}', [StockController::class,'delete']);
    
    //Orderのルーティング
    Route::get('/orders', [OrderController::class,'index'])->name('order.index');
    Route::get('/orders/create', [OrderController::class, 'create'])->name('order.create');
    Route::post('/orders', [OrderController::class, 'store']);
    Route::get('/orders/{order}', [OrderController::class, 'show']);
    Route::get('/orders/{order}/edit', [OrderController::class, 'edit']);
    Route::put('/orders/{order}', [OrderController::class, 'update']);
    Route::delete('/orders/{order}', [OrderController::class, 'delete']);
    
});

Route::group(['middleware' => ['auth:admin']], function(){
    Route::get('/admin', [ItemController::class, 'index'])->name('admin.item.index');
    Route::post('/admin/items',  [ItemController::class, 'store']);
    Route::get('/admin/items/create',  [ItemController::class, 'create'])->name('admin.item.create');
    Route::get('/admin/items/{item}',  [ItemController::class, 'show']);
    //Inertia.jsではファイルの処理においてputが使えないためpostで更新する
    Route::post('/admin/items/{item}',  [ItemController::class, 'update']);
    Route::delete('/admin/items/{item}',  [ItemController::class, 'delete']);
    Route::get('/admin/items/{item}/edit',  [ItemController::class, 'edit']);
});

require __DIR__.'/auth.php';

require __DIR__.'/admin.php';
