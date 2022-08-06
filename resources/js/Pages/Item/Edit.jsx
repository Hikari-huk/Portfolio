import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const Edit = (props) => {
    const { item } = props;
    
    const { data, setData, put, errors } = useForm({
        name: item.name || "",
        number: item.number || "",
        content: item.content || "",
        publicated_at: item.publicated_at || "",
        manufacture: item.manufacture || ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(`/items/${item.id}`);
    }
    const handleDeleteItem = (id) => {
        Inertia.delete(`/items/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit</h2>}
        >
        <Head title="Edit" />
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div className="max-w-3xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">名前</label>
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
                                    className="w-full px-4 py-2"
                                    min="1"
                                    value={data.number}
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
                                    value={data.content}
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
                                    value={data.publicated_at}
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
                                    value={data.manufacture}
                                    onChange={(e) =>
                                        setData("manufacture", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.manufacture}
                                </span>
                            </div>
                            
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-green-500 rounded"
                            >
                                更新
                            </button>
                            <button
                                onClick={()=>handleDeleteItem(item.id)}
                                tabIndex="-1"
                                type="button"
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                削除
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};

export default Edit;