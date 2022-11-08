<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Http\Requests\OrderRequest;


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
    public function store(OrderRequest $request, Order $order){
        $input = $request->all();
        $order->fill($input)->save();
        return redirect('/orders');
        
    }
    
    //Orderの編集画面の表示
    public function edit(Order $order){
        $user = auth()->user();
        $order = Order::with('user')->find($order->id);
        if($user->can('update',$order)){
            return Inertia::render('User/Order/EditOrder',['order' => $order]);
        }else{
            return redirect('/orders/'.$order->id);
        }
    }
    
    //Orderの更新
    public function update(OrderRequest $request, Order $order){
        $input =$request->all();
        
        $order->fill($input)->save();
        
        return redirect("/orders/".$order->id);
    }
    
    //Order削除
    public function delete(Order $order){
        $this->authorize('delete',$order);
        
        $order->delete();
        
        return redirect('/orders');
    }
    
    //Admin用のOrderList
    //Orderリストの表示
    public function adminIndex(){
        $orders = Order::with('user')->get();
        return Inertia::render('Admin/Order/OrderList',['orders' => $orders]);
    }
    
    //Orderの表示
    public function adminShow(Order $order){
        $order = Order::with('user')->find($order->id);
        return Inertia::render('Admin/Order/ShowOrder',['order' => $order]);
    }
    
    public function adminApprove(Order $order, Request $request){
        $order->approve = $request->approve;
        $order->save();
        return redirect('/admin/orders');
    }
    
}
