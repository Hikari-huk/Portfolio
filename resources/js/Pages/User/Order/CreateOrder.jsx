import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/inertia-react';


const Create = (props) => {
    
    const { data, setData, errors, post } = useForm({
        name: "",
        number:"",
        url:"",
        reason:"",
        user_id:props.auth.user.id
    });

    function handleSubmit(e) {
        e.preventDefault();
        // Inertia.post(route("posts.store"),data);

        post("/orders");
    }
    console.log(data);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">注文作成</h2>}
        >
        <Head title="注文作成" />
        
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <Link
                            href="/orders"
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            注文リスト
                        </Link>
                        <span className="font-medium text-indigo-600"> / </span>
                        注文作成
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">注文商品</label>
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
                                <label className="">商品URL</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.url}
                                </span>
                            </div>
                            <div className="mb-4">
                                <label className="">なぜ必要なのか</label>
                                <textarea
                                    type="text"
                                    className="w-full h-32 rounded"
                                    onChange={(e) =>
                                        setData("reason", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.reason}
                                </span>
                            </div>
                            
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                注文
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