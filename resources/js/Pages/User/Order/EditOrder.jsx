import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/AdminAuthenticated';
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
    
    const handleReturnItem = (id) => {
        Inertia.delete(`/orders/${id}`,{
            onBefore: () => confirm("注文を取り消しますか?"),
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">注文編集</h2>}
        >
        <Head title="注文編集" />
        
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">注文商品</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    value={data.name}
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
                                    value={data.number}
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
                                    value={data.url}
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
                                    value={data.url}
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
                                編集
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