<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory;
    
    use SoftDeletes;
    
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    
    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('returned_at');
    }
    
    protected $fillable = [
        'name',
        'number',
        'content',
        'date',
        'publicated_at',
        'manufacture',
        'category_id'
    ];
}
