<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;


class OrderController extends Controller
{
    //Orderリストの表示
    public function index(){
        $orders = Order::with('user')->get();
        return Inertia::render('User/Order/OrderList',['orders' => $orders]);
    }
    
    //Orderの表示
    public function show(Order $order){
        $order = Order::with('user')->find($order->id);
        return Inertia::render('User/Order/ShowOrder',['order' => $order]);
    }
    
    
    //Order作成画面の表示
    public function create(){
        return Inertia::render('User/Order/CreateOrder');
    }
    
    //Order作成
    public function store(Request $request, Order $order){
        $input = $request->all();
        $order->fill($input)->save();
        return redirect('/orders');
        
    }
    
    //Orderの編集画面の表示
    public function edit(Order $order){
        $order = Order::with('user')->find($order->id);
        return Inertia::render('User/Order/EditOrder',['order' => $order]);
    }
    
    //Orderの更新
    public function update(Request $request, Order $order){
        $input =$request->all();
        
        $order->fill($input)->save();
        
        return redirect("/orders/".$order->id);
    }
    
    //Order削除
    public function delete(Order $order){
        $order->delete();
        
        return redirect('/orders');
    }
    
    
}
