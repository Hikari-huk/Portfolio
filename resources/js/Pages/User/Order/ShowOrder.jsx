import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Link, Head } from '@inertiajs/inertia-react'


const Show = (props) => {
    const { order } = props;
    
    const handleDeleteItem = (id) => {
        Inertia.delete(`/orders/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }

    return (
        <Authenticated 
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    注文詳細
                </h2>
            }>
            <Head title="注文詳細"/>
            <h1 className="mb-8 text-3xl font-bold text-center">Show</h1>
                <div className="flex items-center justify-between mb-6">
                    <Link
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={"/orders/"+order.id+"/edit"}
                    >
                        編集
                    </Link>
                    <button
                        type="button"
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        onClick={() => handleDeleteItem(order.id)}
                    >
                        注文取消
                    </button>
                    
                </div>
                
                <div className="p-12">
                    <h1>{ order.name }</h1>
                
                <div>
                    <h3>数量</h3>
                    <p>{ order.number }</p>
                </div>
                
                <div>
                    <h3>欲しい商品のURL</h3>
                    <p>{ order.url }</p>
                </div>
                
                
                <div>
                    <h3>使い道</h3>
                    <p>{ order.reason }</p>
                </div>
                <div>
                    <h3>注文者</h3>
                    <p> { order.user.name }</p>
                </div>
                
                
                
                <div>
                    <Link href="/orders">リストに戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;
