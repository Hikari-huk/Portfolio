import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/inertia-react';

const Edit = (props) => {
    const { item , categories} = props;
    
    
    //inertia.jsではファイルの処理においてputが使えないため,postで送信する
    const { data, setData, post, errors } = useForm({
        name: item.name || "",
        number: item.number || "",
        content: item.content || "",
        publicated_at: item.publicated_at || "",
        manufacture: item.manufacture || "",
        category_id: item.category_id || "",
        deleteArray: [],
        images: ""
    });
    
    
    
    function handleSubmit(e) {
        e.preventDefault();
        post(`/admin/items/${item.id}`);
    }
    
    function handleChangeCheckbox(e){
        if(data.deleteArray.includes(e.target.value)){
            setData('deleteArray',data.deleteArray.filter(id => id !== e.target.value));
        }else{
            setData('deleteArray',[...data.deleteArray,e.target.value]);
        }
        
    }
    
    

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit</h2>}
        >
        <Head title="Edit" />
         <div className="flex justify-center py-12 px-12 md:px-24 lg:px-40 xl:px-56 shodow">
                <div class="w-full bg-white py-10 sm:py-10 lg:py-12 rounded-md">
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
                                            value={data.name}
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
                                            <label className="flex-1 text-center">在庫数</label>
                                        </div>
                                        <input
                                            type="number"
                                            className="w-full md:w-10/12 self-center"
                                            value={data.number}
                                            min="1"
                                            max={item.number}
                                            onChange={(e) =>(
                                                setData("number", e.target.value))
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
                                            value={data.content}
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
                                            value={data.publicated_at}
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
                                            value={data.manufacture}
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
                                            {categories.map((category) => {
                                            if(data.category_id == category.id){
                                                return <option key={category.id} value={category.id} selected>{category.name}</option>;
                                            }else{
                                                return <option key={category.id} value={category.id}>{category.name}</option>;
                                            }
                                            })}
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
                                            multiple
                                            className="w-full md:w-10/12 self-center"
                                            onChange={(e) =>
                                                setData("images", e.target.files)
                                            }
                                        />
                                    </div>
                                    <span className="text-red-600">
                                        {errors.images}
                                    </span>
                                </div>
                                { item.images[0] ?
                                <div className="flex-col py-4">
                                    <div className="md:flex">
                                        <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                            <label className="flex-1 text-center">削除する写真の選択</label>
                                        </div>
                                        <div className={item.images.length > 3 ? "lg:grid grid-cols-3 gap-4" :"lg:flex"}>
                                            {item.images.map((image) => {
                                                return (
                                                    <div name="check_delete_image">
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                value={image.id}
                                                                checked={data.deleteArray.includes(String(image.id))}
                                                                onChange={handleChangeCheckbox}
                                                            />
                                                            <img className="aspect-auto w-64 mx-5" src={image.image_path} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                :
                                <div></div>
                                }
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
                                    更新
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

export default Edit;