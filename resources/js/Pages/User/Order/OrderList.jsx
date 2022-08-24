import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link} from '@inertiajs/inertia-react';

const Index = (props) => {
    const { orders } = props;
    console.log(orders);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">注文リスト</h2>}
        >
        <Head title="注文リスト" />
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">注文リスト</h1>
                <div className="flex items-center justify-between mb-6">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href="/orders/create"
                    >
                        新規注文
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">欲しいアイテム</th>
                                <th className="px-6 pt-5 pb-4">数</th>
                                <th className="px-6 pt-5 pb-4">注文者</th>
                                <th className="px-6 pt-5 pb-4">詳細</th>
                            </tr>
                        </thead>
                        <tbody>
                             {orders.map((order) => (
                                <tr key={order.id} className="">
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {order.name}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {order.number}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {order.user.name}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            href={"/orders/"+order.id}
                                        >
                                            詳細
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
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