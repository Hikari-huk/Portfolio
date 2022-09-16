import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 border-b-2 border-indigo-400  focus:border-indigo-700'
                    : 'text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
            }
        >
            {children}
        </Link>
    );
}
