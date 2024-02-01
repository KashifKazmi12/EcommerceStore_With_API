import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = () => {
    return (
        <div className="pb-5">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <p className="text-xl leading-5 text-gray-600">2024 Trendsetters</p>
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
                            <Link onClick={() => { window.scrollTo(0, 0) }} to="/shop/women's clothing"><div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-sm font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women's Clothing</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div></Link>
                            <div className="flex flex-col space-y-4 md:space-y-8 md:mt-0">
                                <Link onClick={() => { window.scrollTo(0, 0) }} to={'/shop/electronics'} className="relative group flex justify-center items-center h-full w-full pl-2 md:pl-0">
                                    <img className="object-center object-cover h-full w-full" src="https://hips.hearstapps.com/hmg-prod/images/pop-desktop-computers-6553dcb9097ff.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" alt="shoe" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-sm font-medium leading-none text-gray-800 py-3 w-36 bg-white">Electronics</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </Link>
                                <Link onClick={() => { window.scrollTo(0, 0) }} to={'/shop/jewelery'} className="relative group flex justify-center items-center h-full w-full pl-2 md:pl-0">
                                    <img className="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" alt="watch" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-sm font-medium leading-none text-gray-800 py-3 w-36 bg-white">Jewelery</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </Link>
                            </div>
                            <Link onClick={() => { window.scrollTo(0, 0) }} to={"/shop/men's clothing"} className="relative group justify-center items-center h-full w-full hidden lg:flex">
                                <img className="object-center object-cover h-full w-full" src="https://img.freepik.com/free-photo/close-up-handsome-young-man-laughing-wearing-casual-clothes-standing-blue-background_1258-73371.jpg" alt="girl" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-sm font-medium leading-none text-gray-800 py-3 w-36 bg-white">Men's Clothing</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </Link>
                            {/* <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl" />
                                <img className="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div> */}
                        </div>
                    </div>
                    <span style={{display:'block', marginTop:'10px'}}/>
                    <Link onClick={() => { window.scrollTo(0, 0) }} to={"/shop/men's clothing"} className="relative group md:flex justify-start items-start h-72 md:h-96 w-full mt-4 md:mt-8 lg:hidden">
                        <img className="object-center object-cover h-full w-full md:block" src="https://img.freepik.com/free-photo/close-up-handsome-young-man-laughing-wearing-casual-clothes-standing-blue-background_1258-73371.jpg" alt="mens clothing" />
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-sm font-medium leading-none text-gray-800 py-3 w-36 bg-white  translate-x-5">Women</button>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50 translate-x-3" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
