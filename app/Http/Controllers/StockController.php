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
    
    public function index(){
        $items = Item::with('category')->groupby('name')->get();
        return Inertia::render('User/Stock/Index',['items' => $items]);
    }
    
    public function show(Item $item){
        $item = Item::with('category','images','users')->find($item->id);
        return Inertia::render("User/Stock/Show",[
            'item' => $item
            ]);
    }
    
    
    //借用画面の表示
    public function create(Item $item){
        $item = Item::with('category','images')->find($item->id);
        return Inertia::render('User/Stock/Borrow',[
            'item' => $item
            ]);
    }
    
    //借用の処理
    public function store(Request $request){
        // dd($request->returned_at);
        $user = Auth::user();
        $user->items()->attach($request->item_id, [
            'returned_at' => $request->returned_at,
            'borrowed_at' => date('Y-m-d')
        ]);
        
        
        return redirect("/stock/$request->item_id");
        
    }
    
    //返却画面の表示
    public function edit(Item $item){
        
        $user = Auth::user();
        $day = $user->items()->where('item_id',$item->id)->first()->pivot->returned_at;
        return Inertia::render('User/Stock/Return',[
            'item' => $item->with('category','images')->find($item->id),
            'returned_at' => $day
        ]);
    }
    
    //延長の処理
    public function update(Request $request,Item $item){
        $input = $request->all();
        $user = Auth::user();
        $user->items()->sync([
            $item->id => ['returned_at' => $input["returned_at"]]    
        ]);
        return redirect("/stock/".$item->id);
    }
    
    //返却の処理
    public function delete(Item $item){
        $user_id = Auth::user();
        $item->users()->detach($user_id);
        
        return redirect("/stock/".$item->id);
    }
    
}
