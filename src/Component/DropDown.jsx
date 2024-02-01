import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const DropDown = () => {
    const [colorToggle,setColorToggle] = useState(true)
    let path = useLocation().pathname
    useEffect(()=>{
        if(path==='/'){
            setColorToggle(true)
        }
        else{
            setColorToggle(false)
        }
    },[path])
    const [open, setOpen] = useState(false)
    return (
        <div onMouseOver={()=>setOpen(true)} onMouseLeave={()=>{setOpen(false)}} class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto text-white">
            <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                    <li>
                        <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class={`flex items-center justify-between w-full py-2 px-3 font-medium ${colorToggle?"text-white":"text-gray-800"} border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 hover:text-gray-300`}>
                            Categories <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="mega-menu-dropdown" class={`absolute ${!open? "hidden":""} z-10 flex flex-col w-auto text-sm border border-gray-200 rounded-lg shadow-md ${colorToggle?"backdrop-blur-sm":"backdrop-blur-none bg-white"} `}>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4">
                                <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                    <li>
                                        <Link to="/shop/men's clothing" class={`${colorToggle?"text-white":"text-gray-800"} hover:text-gray-300`}>
                                        Men's Clothing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/women's clothing" class={`${colorToggle?"text-white":"text-gray-800"} hover:text-gray-300 `}>
                                        Women's Clothing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/electronics" class={`${colorToggle?"text-white":"text-gray-800"} hover:text-gray-300`}>
                                        Electronics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/jewelery" class={`${colorToggle?"text-white":"text-gray-800"} hover:text-gray-300`}>
                                        Jewelery
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}
