<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Item;
use App\Http\Requests\ItemRequest;
use App\Models\Category;
use App\Models\Image;
use Storage;
use App\Services\ItemService;

class ItemController extends Controller
{   
    //Itemに関するサービスクラスのインスタンス
    // private $itemService;
    
    // public function __construct()
    // {
    //     $this->itemService = new ItemService();
    // }
    
    public function index()
    {
        // $items = Item::with('category','images')->get();
        $items = Item::with('category','images')->get();
        return Inertia::render("Admin/Item/Index",['items' => $items]);
    }
    
    public function show(Item $item)
    {
        $item = Item::with('category','images')->find($item->id);
        return Inertia::render("Admin/Item/Show",[
            'item' => $item
            ]);
    }
    
    public function create(Category $categories)
    {
        return Inertia::render("Admin/Item/Create",['categories' => $categories->get()]);
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
        
        
        return redirect("/admin");
    }
    
    public function edit(Item $item, Category $categories)
    {
        $item = Item::with('category','images')->find($item->id);
        return Inertia::render("Admin/Item/Edit",[
            'item' => $item,
            'categories' => $categories->get()
            ]);
    }
    //修正中
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
        
        
        return redirect("/admin/items/".$item->id);
    }
    
    public function delete(Item $item)
    {
        $item->images()->delete();
        $item->delete();
        return redirect("/admin");
    }
    
}
