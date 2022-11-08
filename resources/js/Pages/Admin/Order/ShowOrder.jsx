import React,{useState, useForm} from "react";
import { Inertia } from "@inertiajs/inertia";
import AdminAuthenticated from "@/Layouts/AdminAuthenticated";
import { Link, Head } from '@inertiajs/inertia-react'


const Show = (props) => {
    const { order } = props;
   
    const handleApprove = (id, isApprove) => {
        Inertia.post(`/admin/orders/${id}`, {approve:isApprove});
    };
    

    return (
        <AdminAuthenticated 
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    注文詳細
                </h2>
            }>
            <Head title="注文詳細"/>
            <div className="flex justify-center py-12 px-24 md:px-32 lg:px-56 xl:px-64 shodow">
                <div class="w-full bg-white py-10 sm:py-10 lg:py-12 rounded-md border-4 border-gray-200">
                    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                        <div className="flex flex-col w-full">
                            <div className="flex-col py-4">
                                <div className="md:flex">
                                    <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                        <label className="flex-1 text-center">注文商品</label>
                                    </div>
                                    <div class="w-full md:w-10/12 flex justify-center rounded-sm border-2 border-gray-200">
                                        <h2 className="text-center">{order.name}</h2>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-col py-4">
                                <div className="md:flex">
                                    <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                        <label className="flex-1 text-center">数量</label>
                                    </div>
                                    <div class="w-full md:w-10/12 flex justify-center rounded-sm border-2 border-gray-200">
                                        <h3 className="text-center">{order.number}</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-col py-4">
                                <div className="md:flex">
                                    <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                        <label className="flex-1 text-center">欲しい商品のURL</label>
                                    </div>
                                    <div class="w-full md:w-10/12 flex justify-center rounded-sm border-2 border-gray-200">
                                        <h3 className="text-center">{order.url}</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-col py-4">
                                <div className="md:flex">
                                    <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                        <label className="flex-1 text-center">理由</label>
                                    </div>
                                    <div class="w-full md:w-10/12 rounded-sm border-2 border-gray-200">
                                        <h3 className="text-center">{order.reason}</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-col py-4">
                                <div className="md:flex">
                                    <div class="w-2/12 bg-gray-200 md:h-10 flex items-center rounded-sm mx-0 md:mx-2 my-1 md:my-0">
                                        <label className="flex-1 text-center">注文者</label>
                                    </div>
                                    <div class="w-auto md:w-10/12 flex justify-center rounded-sm border-2 border-gray-200">
                                        <h3 className="text-center">{order.user.name}</h3>
                                    </div>
                                </div>
                            </div>
                            {order.approve === null ?
                            <div className="flex justify-center pt-4">
                                <button
                                    className="flex items-center
                                    w-auto
                                    h-12
                                    px-6
                                    mx-6
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
                                    onClick={() => handleApprove(order.id, true)}
                                >
                                    承認
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center
                                    w-auto
                                    h-12
                                    px-6
                                    mx-6
                                    bg-red-300
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
                                    onClick={() => handleApprove(order.id, false)}
                                >
                                    拒否
                                </button>
                            </div>
                            : <div className="flex justify-center pt-4">
                                <button
                                    className="flex items-center
                                    w-auto
                                    h-12
                                    px-6
                                    mx-6
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
                                    onClick={() => handleApprove(order.id, null)}
                                >
                                    差し置く
                                </button>
                            </div>   
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticated>
        );
}

export default Show;
