import React, { useState } from 'react';
import AppPortfolioLogo from '@/Components/AppPortfolioLogo';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link,Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    console.log(props);
    return (
      
        
        <div class="max-w-screen-2xl mx-auto bg-white">
        <Head title="Welcome" />
          <div class="flex justify-between items-center border-b py-4 lg:py-8 bg-white">
            <Link href="/" class="mx-6 inline-flex items-center text-black-800 text-xl lg:text-2xl font-bold gap-2.5" aria-label="logo">
              <AppPortfolioLogo className="block h-8 w-auto text-gray-500" />
                  Lab Manager
            </Link>
              {props.auth.user ? (
                <nav class="hidden lg:flex gap-12 ">
                  <NavLink href={route('welcome')} active={route().current('welcome')}>
                      Home
                  </NavLink>
                  <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                      Dashboard
                  </NavLink>
                  <NavLink href={route('stock.index')} active={route().current('stock.index')}>
                      在庫一覧
                  </NavLink>
                  <NavLink href={route('order.index')} active={route().current('order.index')}>
                      欲しいものリスト
                  </NavLink>
                </nav>
              ):(
                <div></div>
              )}
                
              <div  class="mx-6 hidden lg:flex ">
                  <Dropdown>
                      <Dropdown.Trigger>
                          <span className="rounded-md">
                              <button
                                  type="button"
                                  className="inline-flex items-center text-lg lg:text-xl px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                              >
                                  {props.auth.user ? props.auth.user.name:"ログイン"}
                                  
                                  <svg
                                      className="ml-2 -mr-0.5 h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              </button>
                          </span>
                      </Dropdown.Trigger>
          
                      <Dropdown.Content>
                        {props.auth.user ? (
                          <Dropdown.Link href={route('logout')} method="post" as="button">
                              Log Out
                          </Dropdown.Link>
                        ):(
                        <div>
                          
                          <Dropdown >
                              <Link href={route('login')} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">User login</Link>
                          </Dropdown>
                          <Dropdown>
                              <Link href={route('admin.login')} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Admin login</Link>
                          </Dropdown>
                        </div>
                        )}
                      </Dropdown.Content>
                  </Dropdown>
              </div>

                <div className="mr-2 flex items-center lg:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' lg:hidden bg-white'}>
            {props.auth.user ? (
            <div>
                <div className="bg-white pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">{props.auth.user.name}</div>
                        <div className="font-medium text-sm text-gray-500">{props.auth.user.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
                </div>
                ):(
                  <div>
                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink>
                          <Link href={route('login')} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">User login</Link>
                        </ResponsiveNavLink>
                    </div>
                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink>
                          <Link href={route('admin.login')} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Admin login</Link>
                        </ResponsiveNavLink>
                    </div>
                </div>
                )}
            </div>

    <section class="flex flex-col items-center">
      <div class="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-20">

        <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Lab Manager</h1>
        <h2 class="text-black-200 text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">~研究室在庫管理システム~</h2>
        
        <p class="text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
          データ上で実験器具を管理するために<br/>管理者と学生ユーザで機能を割り振りしている<br/>
        </p>
        
        {props.auth.user ? (
          <div>
            <a href={route('logout')} class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Log out</a>
          </div>
        ):(
        <div class="flex justify-center">
          <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <Link href={route('register')} class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">学生の新規登録</Link>
              <Link href={route('admin.register')} class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">管理者の新規登録</Link>
          </div>
          </div>
        )}
      </div>
    </section>
  </div>
    );
}
