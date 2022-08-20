<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Storage;


class StockController extends Controller
{
    //借用画面の表示
    public function create(Item $item){
        $item = Item::with('category','images')->find($item->id);
        return Inertia::render('Stock/Borrow',[
            'item' => $item
            ]);
    }
    
    //借用の処理
    public function store(Request $request){
        // dd($request->returned_at);
        $user = User::find($request->user_id);
        $user->items()->attach($request->item_id, [
            'returned_at' => $request->returned_at,
            'borrowed_at' => date('Y-m-d')
        ]);
        
        
        return redirect("/");
        
    }
    
    //返却画面の表示
    public function edit(Item $item){
        $user = Auth::user();
        dd($user->items()->where('item_id',$item->id)->first());
        return Inertia::render('Stock/Return',[
            'item' => $item,
            'images' => $item->images()->get(),
            'returned_at' => $user->items()->where('item_id',$item->id)->first()
        ]);
    }
    
    //延長の処理
    public function update(){
        
    }
    
    //返却の処理
    public function delete(){
        
    }
    
}
