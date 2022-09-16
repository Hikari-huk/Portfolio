<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        
        return [
            'name' => 'required|max:30',
            'number' => 'required',
            'content' => 'required',
            'publicated_at' => 'required|date|before:tomorrow',
            'manufacture' => 'required|max:20',
            'category_id' => 'required',
            'images.*' => 'image|max:10240'
        ];
    }
    
    public function messages()
    {
        return [
            'name.required' => '商品名を入力してください',
            'name.max' => 'アイテム名は30文字以内で入力してください',
            'number.required' => '数を入力してください',
            'content.required' => '内容を入力してください',
            'publicated_at.required' => '発売日を入力してください',
            'publicated_at.before' =>'本日以前の日付を入力してください',
            'publicated_at.date' => '日付を入力してください',
            'manufacture.required' => '出版社・ブランド名を入力してください',
            'manufacture.max' => '出版社・ブランド名は20字以内で入力してください',
            'category_id.required' => 'カテゴリーを選択してください',
            'images.*.image'=>'画像ファイルを選択してください'
        ];   
    }
}
