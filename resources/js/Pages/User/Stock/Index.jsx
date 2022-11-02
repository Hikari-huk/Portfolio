import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

const Index = (props) => {
    const { items } = props;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">在庫一覧</h2>}
        >
        <Head title="Index" />
        <div className="py-24">
            <div className="container mx-auto">
                <div className="overflow-x-auto bg-white rounded shadow border-solid border-4 border-gray-200">
                    <table className="w-full whitespace-nowrap table-auto">
                        <thead className="text-black bg-gray-100">
                            <tr className="font-bold text-left">
                                <th className="px-32 pt-5 pb-4">名前</th>
                                <th className="px-2 pt-5 pb-4">カテゴリー</th>
                                <th className="px-2 pt-5 pb-4">詳細</th>
                            </tr>
                        </thead>
                        <tbody>
                             {items.map((item) => (
                                <tr key={item.id}>
                                    <td className="border-t flex">
                                    {item.images[0] ?
                                            <div className="pl-6 py-4">
                                                <img src={item.images[0].image_path} loading="lazy" alt="画像無し" class="w-16 h-16 object-contain object-cover object-center" />
                                            </div>
                                            :
                                            <div className="pl-6 py-4">
                                                <img src="/images/no_image.jpg" loading="lazy" alt="画像無し" class="w-16 h-16 object-contain object-cover object-center" />
                                            </div>
                                    }
                                        <p className="flex items-center px-10 py-4 focus:text-indigo-700 focus:outline-none">
                                            {item.name}
                                        </p>
                                    </td>
                                    <td className="border-t">
                                        <p className="flex items-center px-2 py-4 focus:text-indigo-700 focus:outline-none">
                                            {item.category.name}
                                        </p>
                                    </td>
                                    <td className="border-t">
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
                                            <Link href={"/stock/"+item.id}>詳細</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        在庫を登録してください.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};

export default Index;