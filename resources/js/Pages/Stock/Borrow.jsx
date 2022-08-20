import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

const Borrow = (props) => {
   const { item } = props;
   console.log(props.auth.user.id);
   const { data, setData, errors, post} = useForm({
       item_id: item.id,
       user_id: props.auth.user.id,
       returned_at: ""
   });
   
   function handleSubmit(e) {
        e.preventDefault();
        post("/stocks");
    }
   
   return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">借用</h2>}
        >
        <Head title="Borrow" />
        
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        {item.name}
                    </h1>
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
                
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            
                            <div className="mb-4">
                                <label className="">返却日</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2"
                                    onChange={(e) =>
                                        setData("returned_at", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.returned_at}
                                </span>
                            </div>
                            
                            
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                借りる
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Authenticated>
    );
};

export default Borrow;