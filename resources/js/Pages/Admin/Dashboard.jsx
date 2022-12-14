import React from 'react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    console.log(props);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-solid border-4 border-gray-200">You're Admin User!</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
