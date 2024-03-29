import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({product}) => {
  return (
    <div className="w-full max-w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={product.image}
                    alt="Product" className="w-full object-cover rounded-t-xl" style={{height:'290px'}} />
            <div className="px-4 py-0 w-full">
                <span className="text-gray-400 mr-3 uppercase text-xs">{product.category}</span>
                <Link to={`/product/${product.id}`}><p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p></Link>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{Math.round(product.price)}</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">{Math.round(product.price + product.price*0.1)}</p>
                    </del>
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
    </div>
  )
}
