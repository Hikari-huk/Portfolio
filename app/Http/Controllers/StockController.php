<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Storage;
use App\Http\Requests\StockRequest;

class StockController extends Controller
{
    
    public function index(){
        $items = Item::with('category','images')->get();
        return Inertia::render('User/Stock/Index',['items' => $items]);
    }
    
    public function show(Item $item){
        $item = Item::with('category','images','users')->find($item->id);
        // dd($item);
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
    public function store(StockRequest $request){
        
        $user = Auth::user();
        $item = Item::find($request->item_id);
        $item->number = $item->number - $request->number;
        $item->update();
        $user->items()->attach($request->item_id, [
            'returned_at' => $request->returned_at,
            'number' => $request->number,
            'borrowed_at' => date('Y-m-d')
        ]);
        
        
        return redirect("/stock/$request->item_id");
        
    }
    
    //延長画面の表示
    public function edit(Item $item){
        
        $user = Auth::user();
        $item_user = $user->items()->where('item_id',$item->id)->first()->pivot;
        return Inertia::render('User/Stock/Extention',[
            'item' => $item->with('category','images')->find($item->id),
            'item_user' => $item_user
        ]);
    }
    
    //延長の処理
    public function update(StockRequest $request,Item $item){
        $input = $request->all();
        $user = Auth::user();
        //今現在借りている数
        $borrowNowNum = $user->items()->where('item_id',$item->id)->first()->pivot->number;
        //現在の在庫の数＋借りている数-新たに設定する借りる数
        $item->number = $item->number + $borrowNowNum - $input["number"];
        $item->update();
        $user->items()->sync([
            $item->id => ['returned_at' => $input["returned_at"],'number' => $input["number"]]
        ]);
        return redirect("/stock/".$item->id);
    }
    
    //返却の処理
    public function delete(Item $item){
        $user = Auth::user();
        $return_num = $user->items()->where('item_id',$item->id)->first()->pivot->number;
        //在庫数を元に戻す
        $item->number = $item->number + $return_num;
        $item->update();
        $item->users()->detach($user);
        
        return redirect("/stock/".$item->id);
    }
    
}
