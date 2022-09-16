import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

import AppPortfolioLogo from '@/Components/AppPortfolioLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
          <div >
            <Link href="/" class="mx-6 inline-flex items-center text-black-800 text-xl lg:text-2xl font-bold gap-2.5" aria-label="logo">
              <AppPortfolioLogo className="block h-8 w-auto text-gray-500" />
                  Lab Manager
            </Link> 
        
        </div>
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-stone-50 shadow-md overflow-hidden sm:rounded-lg">
                {children}
        </div>
    </div>
    );
}
