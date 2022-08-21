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
        
        $item = Item::with('category','images')->find($item->id);
        return Inertia::render("Item/Show",[
            'item' => $item
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
        $item = Item::with('category','images')->find($item->id);
        return Inertia::render("Item/Edit",[
            'item' => $item,
            'categories' => $categories->get()
            ]);
    }
    
    public function update(ItemRequest $request, Item $item)
    {
        
        $input = $request->all();
        $item->fill($input)->save();
        //選択された関連付けされている画像を削除する
        
        if(array_key_exists('deleteArray', $input)){
            foreach($input["deleteArray"] as $delete_image_id){
                $item->images()->find($delete_image_id)->delete();
            }
        }
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
        dd("hello");
        $item->images()->delete();
        $item->delete();
        
        return redirect("/");
    }
}
