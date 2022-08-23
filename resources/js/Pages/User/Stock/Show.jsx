import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Link, Head } from '@inertiajs/inertia-react'


const Show = (props) => {
    const { item } = props;
    

    return (
        <Authenticated 
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Show
                </h2>
            }>
            <Head title="Show"/>
            <h1 className="mb-8 text-3xl font-bold text-center">Show</h1>
                <div className="flex items-center justify-between mb-6">
                    <Link
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={"/stock/"+item.id+"/borrow"}
                    >
                        借用
                    </Link>
                    <Link
                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                        href={"/stock/"+item.id+"/return"}
                    >
                        返却
                    </Link>
                    
                </div>
                
                <div className="p-12">
                    <h1>{ item.name }</h1>
                
                <div>
                    <h3>数量</h3>
                    <p>{ item.number }</p>
                </div>
                
                <div>
                    <h3>内容</h3>
                    <p>{ item.content }</p>
                </div>
                
                <div>
                    <h3>発売日</h3>
                    <p>{ item.publicated_at }</p>
                </div>
                
                <div>
                    <h3>製作元・出版社</h3>
                    <p>{ item.manufacture }</p>
                </div>
                <div>
                    <h3>カテゴリー</h3>
                    <p> { item.category.name }</p>
                </div>
                
                 <div>
                    <h3>画像</h3>
                    <div className="flex">
                    {item.images.map((image) => {
                    console.log(image);
                        return <img className="w-64 mx-5" src={image.image_path} />
                    })}
                    </div>
                </div>
                
                
                <div>
                    <Link href="/stock">戻る</Link>
                </div>
            </div>
            
        </Authenticated>
        );
}

export default Show;
