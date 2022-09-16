import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, Head} from '@inertiajs/inertia-react';
import Button from '@/Components/Button';


const Show = (props) => {
    const { item } = props;
    
    const handleReturnItem = (id) => {
        Inertia.delete(`/stock/${id}`,{
            onBefore: () => confirm("返却しますか?"),
        })
    }
    
    
    return (
        <Authenticated 
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Show
                </h2>
            }>
            <Head title="Show"/>
            <div className="flex justify-center px-12 py-12 md:px-24 lg:px-40 xl:px-56 showdow">
                <div class="bg-white py-10 sm:py-10 lg:py-12 rounded-md">
                    <div class="max-w-screen-x1 px-4 md:px-8 mx-auto">
                        {item.users[0] && item.users[0].id === props.auth.user.id && item.number === 0? 
                            <div class="relative">
                                <p class="absolute bottom-2 right-0">{ item.users[0].pivot.returned_at }までに返却</p>
                            </div>
                        :
                            <div class="relative">
                                <p class="absolute bottom-2 right-0">数量：{item.number}</p>
                            </div>
                        }
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
                                
                            
                                    <div class="flex justify-center">
                                        {item.users[0] ? 
                                            (item.users[0].id === props.auth.user.id ? 
                                            <div>
                                                <button
                                                    className="
                                                    w-32
                                                    h-12
                                                    bg-gray-300
                                                    text-xl
                                                    text-gray-600 
                                                    hover:text-blue-800
                                                    hover:bg-gray-1000 
                                                    hover:shadow-2xl 
                                                    hover:scale-105 
                                                    active:ring 
                                                    active:ring-gray-400 
                                                    rounded 
                                                    duration-200"
                                                >
                                                    <Link href={"/stock/"+item.id+"/return"}>延長</Link>
                                                </button>
                                                <button
                                                    type="button"
                                                    className=
                                                    "w-32
                                                    h-12
                                                    mx-4
                                                    bg-gray-300
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
                                                    onClick={() => handleReturnItem(item.id)}
                                                >
                                                    返却
                                                </button>
                                                
                                            </div>
                                        :
                                            <div>
                                                <h1>{item.users[0].name}さんが{item.users[0].pivot.returned_at}まで借りています。</h1>
                                            </div>
                                        ):(
                                            <div>
                                                <button
                                                    className=
                                                    "w-32
                                                    h-12
                                                    bg-gray-300
                                                    text-xl
                                                    text-black 
                                                    hover:text-blue-800
                                                    hover:bg-blue-1000 
                                                    hover:shadow-2xl 
                                                    hover:scale-105 
                                                    active:ring 
                                                    active:ring-gray-400 
                                                    rounded 
                                                    duration-200"
                                                >
                                                    <Link href={"/stock/"+item.id+"/borrow"}>借りる</Link>
                                                </button>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
        );
}

export default Show;
