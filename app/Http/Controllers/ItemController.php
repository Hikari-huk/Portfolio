<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Http\Requests\ItemRequest;
use App\Models\Category;
use App\Models\Image;
use Storage;

class ItemController extends Controller
{
    //
    public function index()
    {
       $items = Item::with('category')->get();
        return Inertia::render("Item/Index",['items' => $items]);
    }
    
    public function show(Item $item)
    {
        
        return Inertia::render("Item/Show",[
            'item' => $item,
            'category' => $item->category()->get(),
            'images' => $item->images()->get()
            ]);
    }
    
    public function create(Category $categories)
    {
        return Inertia::render("Item/Create",['categories' => $categories->get()]);
    }
    
    public function store(ItemRequest $request, Item $item)
    {   
        //item内容追加
        $input = $request->all();
        $item->fill($input)->save();
        //imagesの追加
        $input_images = $request->file("images");
        if($input_images!=null){
            foreach($input_images as $image){
                $images = new Image();
                $path = Storage::disk('s3')->putFile('/', $image);
                $images->item_id = $item->id;
                $images->image_path = Storage::disk('s3')->url($path);
                $images->save();
            }
        }
        
        return redirect("/");
    }
    
    public function edit(Item $item, Category $categories)
    {
        return Inertia::render("Item/Edit",[
            'item' => $item,
            'categories' => $categories->get()
            ]);
    }
    
    public function update(ItemRequest $request, Item $item)
    {
        $input = $request->all();
        $item->fill($input)->save();
        //imagesの追加
        $item->images()->delete();//元々関連付けられている画像を削除
        
        $input_images = $request->file("images");
        //送信データにファイルがあるかどうか
        if($input_images!=null){
            foreach($input_images as $image){
                $images = new Image();
                $path = Storage::disk('s3')->putFile('/', $image);
                $images->item_id = $item->id;
                $images->image_path = Storage::disk('s3')->url($path);
                $images->save();
            }
        }
        
        return redirect("/items/".$item->id);
    }
    
    public function delete(Item $item)
    {
        $item->images()->delete();
        $item->delete();
        
        return redirect("/");
    }
}
