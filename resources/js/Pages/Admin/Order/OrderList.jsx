import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import AdminAuthenticated from '@/Layouts/AdminAuthenticated';
import { Head, Link} from '@inertiajs/inertia-react';
import  Modal  from 'react-modal';


const Index = (props) => {
    const { orders } = props;
    
    const returnApprove = (isApprove) => {
      if(isApprove === 1){
          return '承認済み';
      }else if(isApprove === 0){
          return '拒否';
      }else {
          return '差し置き';
      } 
    };
    
    return (
        <AdminAuthenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">注文リスト</h2>}
        >
        <Head title="注文リスト" />
        <div className="py-24">
            <div className="container mx-auto">
                <div className="overflow-x-auto bg-white rounded shadow border-solid border-4 border-gray-200">
                    <table className="w-full whitespace-nowrap table-auto">
                        <thead className="text-black bg-gray-100">
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">欲しいアイテム</th>
                                <th className="px-6 pt-5 pb-4">数</th>
                                <th className="px-6 pt-5 pb-4">注文者</th>
                                <th className="px-6 pt-5 pb-4">承認</th>
                                <th className="px-6 pt-5 pb-4">詳細</th>
                            </tr>
                        </thead>
                        <tbody>
                             {orders.map((order) => (
                                <tr key={order.id} className="">
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-base"
                                        >
                                            {order.name}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-base"
                                        >
                                            {order.number}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-base"
                                        >
                                            {order.user.name}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <h1
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-base"
                                        >
                                           {returnApprove(order.approve)}
                                        </h1>
                                    </td>
                                    <td className="border-t">
                                        <button
                                            className=
                                            "w-24
                                            h-12
                                            px-6
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
                                            <InertiaLink
                                                tabIndex="1"
                                                href={"/admin/orders/"+order.id}
                                            >
                                            詳細
                                            </InertiaLink>
                                        </button>
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
        </AdminAuthenticated>
    );
};

export default Index;