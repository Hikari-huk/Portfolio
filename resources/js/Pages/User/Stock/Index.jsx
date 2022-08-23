import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const Index = (props) => {
    const { items } = props;
   
    

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">在庫一覧</h2>}
        >
        <Head title="在庫一覧" />
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">在庫一覧</h1>
                <div className="flex items-center justify-between mb-6">
                    
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">名前</th>
                                <th className="px-6 pt-5 pb-4">カテゴリー</th>
                            </tr>
                        </thead>
                        <tbody>
                             {items.map((item) => (
                                <tr key={item.id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={"/stock/" + item.id}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {item.id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={"/stock/" + item.id}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {item.name}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={"/stock/" + item.id}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {item.category.name}
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {items.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        在庫がありません.
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