<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Http\Requests\ItemRequest;

class ItemController extends Controller
{
    //
    public function index(Item $items)
    {
       
        return Inertia::render("Item/Index",['items' => $items->get()]);
    }
    
    public function show(Item $item)
    {
        // dd($item);
        return Inertia::render("Item/Show",['item' => $item]);
    }
    
    public function create()
    {
        return Inertia::render("Item/Create");
    }
    
    public function store(ItemRequest $request, Item $item)
    {
        $input = $request->all();
        $item->fill($input)->save();
        return redirect("/");
    }
    
    public function edit(Item $item)
    {
        return Inertia::render("Item/Edit",['item' => $item]);
    }
    public function update(ItemRequest $request, Item $item)
    {
        $input = $request->all();
        $item->fill($input)->save();
        return redirect("/items/".$item->id);
    }
    
    public function delete(Item $item)
    {
        $item->delete();
        
        return redirect("/");
    }
}
