import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Link, Head } from '@inertiajs/inertia-react'


const Show = (props) => {
    const { item, item_num } = props;
    
    const handleDeleteItem = (id) => {
        Inertia.delete(`/admin/items/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated 
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {item.name}
                </h2>
            }>
            <Head title="Show"/>
            <div className="flex justify-center px-12 py-12 md:px-24 lg:px-40 xl:px-56 showdow">
                <div class="bg-white py-10 sm:py-10 lg:py-12 rounded-md">
                    <div class="max-w-screen-x1 px-4 md:px-8 mx-auto">
                        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {item.images[0] ? 
                            <div>
                                <div class="h-64 md:h-full bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                    <img src={item.images[0].image_path} loading="lazy" alt="画像無し" class="w-full h-full object-contain object-center" />
                                </div>
                            </div>
                            :
                            <div>
                                <div class="h-64 md:h-full bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                    <img src="/images/no_image.jpg" loading="lazy" alt="画像無し" class="w-full h-full object-cover object-center" />
                                </div>
                            </div>
                            }
                            <div class="pt-2">
                                <div class="flex-col items-center pb-4" name="item_name">
                                    <p class="text-base opacity-50">アイテム</p>
                                    <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left">{ item.name }</h1>
                                    <hr/>
                                </div>
                                <div class="flex-col items-center pb-4" name="item_name">
                                    <p class="text-base opacity-50">数量</p>
                                    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2">{item_num}</h2>
                                    <hr/>
                                </div>
                                
                                <div class="flex-col items-center pb-4" name="item_name">
                                    <p class="text-base opacity-50">内容</p>
                                    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2">{item.content}</h2>
                                    <hr/>
                                </div>
                                
                                <div class="flex-col items-center pb-4" name="item_name">
                                    <p class="text-base opacity-50">発売日</p>
                                    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2">{item.publicated_at}</h2>
                                    <hr/>
                                </div>
                                
                                <div class="flex-col items-center pb-4" name="item_name">
                                    {item.category.name === "本"?
                                        <p class="text-base opacity-50">出版社</p>
                                        :
                                        <p class="text-base opacity-50">ブランド名</p>
                                    }
                                    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2">{item.manufacture}</h2>
                                    <hr/>
                                </div>
                                
                                <div class="flex-col items-center pb-4" name="item_name">
                                    <p class="text-base opacity-50">カテゴリー</p>
                                    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2">{item.category.name}</h2>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                            
                        <div className="flex items-center justify-center my-12">
                            <button
                                type="button"
                                className=
                                    "w-32
                                    h-12
                                    mx-4
                                    bg-gray-200
                                    text-xl
                                    text-gray-600 
                                    hover:text-black
                                    hover:bg-gray-1000 
                                    hover:text-2xl
                                    hover:shadow-2xl 
                                    hover:scale-105 
                                    active:ring
                                    active:ring-gray-400 
                                    rounded 
                                    duration-200"
                            >
                            <Link
                                href={"/admin/items/"+item.id+"/edit"}
                            >
                                編集
                            </Link>
                            </button>
                            
                            <button
                                type="button"
                                className=
                                        "w-32
                                        h-12
                                        mx-4
                                        bg-gray-200
                                        text-xl
                                        text-gray-600 
                                        hover:text-black
                                        hover:bg-gray-1000 
                                        hover:text-2xl
                                        hover:shadow-2xl 
                                        hover:scale-105 
                                        active:ring
                                        active:ring-gray-400 
                                        rounded 
                                        duration-200"
                                        onClick={() => handleDeleteItem(item.id)}
                            >
                                削除
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Authenticated>
        );
}

export default Show;
