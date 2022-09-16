<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
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
            'returned_at' => 'required|date|after:today',
            'number' => 'required'
        ];
    }
    
    public function messages()
    {
        return [
            'returned_at.required' => '日付を入力してください',
            'returned_at.date' => '日付を入力してください',
            'returned_at.after' => '明日以降の日付を入力してください',
            'number.required' => '個数を入力してください'
        ];
    }
}
