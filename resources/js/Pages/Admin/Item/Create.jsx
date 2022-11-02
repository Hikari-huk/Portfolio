import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/inertia-react';


const Create = (props) => {
    const { categories } = props;
    
    const { data, setData, errors, post } = useForm({
        name: "",
        number: "",
        content: "",
        publicated_at: "",
        manufacture: "",
        category_id: "1",
        images: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        // Inertia.post(route("posts.store"),data);

        post("/admin/items");
    }
    console.log(data);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">在庫作成</h2>}
        >
        <Head title="Create" />
        <div className="flex justify-center py-12 px-12 md:px-24 lg:px-40 xl:px-56 shodow">
                <div class="w-full bg-white py-10 sm:py-10 lg:py-12 rounded-md border-solid border-4 border-gray-200">
                    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                        <form name="createForm" onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                            
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">アイテム名</label>
                                        </div>
                                        <input
                                            type="text"
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
                                            <label className="flex-1 text-center">アイテム内容</label>
                                        </div>
                                        <textarea
                                            rows="5"
                                            className="w-full md:w-10/12 self-center"
                                            onChange={(e) =>
                                                setData("content", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.content}
                                    </span>
                                </div>
                                
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">販売日時</label>
                                        </div>
                                        <input
                                            type="date"
                                            className="w-full md:w-10/12 self-center"
                                            min="1"
                                            onChange={(e) =>
                                                setData("publicated_at", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.publicated_at}
                                    </span>
                                </div>
                            
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">出版社・ブランド名</label>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full md:w-10/12 self-center"
                                            onChange={(e) =>
                                                setData("manufacture", e.target.value)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.manufacture}
                                    </span>
                                </div>

                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">カテゴリー</label>
                                        </div>
                                        <select 
                                        className="w-full md:w-10/12 self-center"
                                        onChange={(e) => setData('category_id',e.target.value)}
                                        >
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                        </select>
                                        
                                    </div>
                                    <span className="text-red-600">
                                        {errors.category_id}
                                    </span>
                                </div>
                                
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">写真追加</label>
                                        </div>
                                        <input
                                            type="file"
                                            className="w-full md:w-10/12 self-center"
                                            multiple
                                            onChange={(e) =>
                                                setData("images", e.target.files)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.images}
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
                                    作成
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