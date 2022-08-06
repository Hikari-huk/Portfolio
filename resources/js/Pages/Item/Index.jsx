import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const Index = (props) => {
    const { items } = props;
    console.log(items);
    console.log(typeof items);
    

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Index</h2>}
        >
        <Head title="Index" />
        <div>
            <div className="container mx-auto">
                <h1 className="mb-8 text-3xl font-bold text-center">Items</h1>
                <div className="flex items-center justify-between mb-6">
                    <InertiaLink
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href="/items/create"
                    >
                        新規作成
                    </InertiaLink>
                </div>

                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-white bg-gray-600">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">#</th>
                                <th className="px-6 pt-5 pb-4">名前</th>
                            </tr>
                        </thead>
                        <tbody>
                             {items.map((item) => (
                                <tr key={item.id} className="">
                                    <td className="border-t">
                                        <InertiaLink
                                            href={"/items/" + item.id}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {item.id}
                                        </InertiaLink>
                                    </td>
                                    <td className="border-t">
                                        <InertiaLink
                                            href={"/items/" + item.id}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {item.name}
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
                                        No contacts found.
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