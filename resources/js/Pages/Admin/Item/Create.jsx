import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/inertia-react';


const Create = (props) => {
    const { categories } = props;
    console.log(categories);
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create</h2>}
        >
        <Head title="Create" />
        
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <Link
                            href="/admin"
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Items
                        </Link>
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">名前</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.name}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">数量</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2"
                                    min="1"
                                    onChange={(e) =>
                                        setData("number", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.number}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">アイテムの内容</label>
                                <textarea
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.content}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">販売日時</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("publicated_at", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.publicated_at}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">販売元</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("manufacture", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.manufacture}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">カテゴリー</label>
                                <select 
                                className="w-full px-4 py-2"
                                onChange={(e) => setData('category_id',e.target.value)}
                                >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                                </select>
                                <span className="text-red-600">
                                    {errors.category_id}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <label className="">写真追加</label>
                                <input
                                    type="file"
                                    multiple
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("images", e.target.files)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.images}
                                </span>
                            </div>
                            
                            
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};

export default Create;