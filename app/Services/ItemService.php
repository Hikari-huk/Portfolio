<?php
 
namespace App\Services;
 
use App\Models\Item;
 
/**
 * Item関連サービス
 */
class ItemService
{
  //itemsテーブルにある引数の名前と一致したレコードの数を返す
    public function item_count(String $name){
        return count(Item::where('name',$name)->get());
    }
}