import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';


const Create = (props) => {
    const { order } = props;
    
    const { data, setData, errors, put } = useForm({
        name:order.name || "",
        number:order.number || "",
        url:order.url || "",
        reason:order.reason || "",
        user_id:order.user.id || "" 
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(`/orders/${order.id}`);
    }
    
    

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">注文編集</h2>}
        >
        <Head title="注文編集" />
        <div className="flex justify-center py-12 px-12 md:px-24 lg:px-40 xl:px-56 shodow">
                <div class="w-full bg-white py-10 sm:py-10 lg:py-12 rounded-md">
                    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                        <form name="createForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                            
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">注文商品</label>
                                        </div>
                                        <input
                                            type="text"
                                            value={data.name}
                                            className="w-full md:w-10/12 self-center"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.name}
                                    </span>
                                </div>
                            
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">数量</label>
                                        </div>
                                        <input
                                            type="number"
                                            className="w-full md:w-10/12 self-center"
                                            min="1"
                                            value={data.number}
                                            onChange={(e) =>
                                                setData("number", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.number}
                                    </span>
                                </div>
                                
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">商品URL</label>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full md:w-10/12 self-center"
                                            value={data.url}
                                            onChange={(e) =>
                                                setData("url", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.url}
                                    </span>
                                </div>
                                
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">理由</label>
                                        </div>
                                        <textarea
                                            rows="5"
                                            className="w-full md:w-10/12 self-center"
                                            value={data.reason}
                                            onChange={(e) =>
                                                setData("reason", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.reason}
                                    </span>
                                </div>
                                <div className="mt-4 self-center">
                                    <button
                                        type="submit"
                                        className=
                                        "w-32
                                        h-12
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
                                    編集
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};

export default Create;