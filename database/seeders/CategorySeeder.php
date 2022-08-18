<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use DateTime;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Category::create([
            'name' => '本',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime()
        ]);
        
        Category::create([
            'name' => 'デバイス',
            'created_at' => new DateTime(),
            'updated_at' => new DateTime()
        ]);
        
    }
}
