import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';


const Borrow = (props) => {
   const { item , item_user} = props;
   
   
   
   const { data, setData, errors, put} = useForm({
       item_id: item.id,
       user_id: props.auth.user.id,
       returned_at: item_user.returned_at,
       number: item_user.number
       
   });
   console.log(item_user);
   
   function handleSubmit(e) {
        e.preventDefault();
        put(`/stock/${item.id}`);
    }
    
   
   return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">返却</h2>}
        >
        <Head title="Extension" />
         <div className="flex justify-center py-12 px-12 md:px-24 lg:px-40 xl:px-56 shodow">
                <div class="w-full bg-white py-10 sm:py-10 lg:py-12 rounded-md shadow">
                    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
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
                                
                                <form name="createForm" onSubmit={handleSubmit}>
                                <div class="flex-col items-center pb-4" name="item_name">
                                        <p class="text-base mb-2">合計で借用数を設定してください</p>
                                        <input
                                            type="number"
                                            className="w-full px-4 mb-2 "
                                            min="1"
                                            max={item.number + item_user.number}
                                            value={data.number}
                                            onChange={(e) =>
                                                setData("number", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.number}
                                        </span>
                                        <hr/>
                                    </div>
                                     <div class="flex-col items-center pb-4" name="item_name">
                                        <p class="text-base mb-2">返却日を入力してください</p>
                                        <input
                                            type="date"
                                            className="w-full px-4 mb-2 "
                                            value={data.returned_at}
                                            onChange={(e) =>
                                                setData("returned_at", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.returned_at}
                                        </span>
                                        <hr/>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="w-32
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
                                        >
                                            延長
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Borrow;