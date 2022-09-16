<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            //
            'name' => 'required|max:30',
            'number' => 'required',
            'url'=>'required',
            'reason' => 'required|max:1000'
        ];
    }
    
    public function messages()
    {
        return [
            'name.required' => '注文名を入力してください',
            'name.max' => '30字以内で入力してください',
            'number.required' => '数量を入力してください',
            'url.required' => 'URLを入力してください',
            'reason.required' => '理由を入力してください',
            'reason.max' => '理由を1000字以内で入力してください'
        ];
    }
}
