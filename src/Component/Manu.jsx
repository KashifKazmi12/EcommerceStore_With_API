import React from 'react'
import close from '../images/close.svg'
import { Link } from 'react-router-dom'

export const Manu = (props) => {
  return (
    <div className={`responsive-manu ${props.openmanu?"block":"hidden"} absolute z-50 top-0 left-0 right-0 bottom-0 backdrop-blur md:hidden flex justify-center align-center h-screen`} style={{backgroundImage: 'linear-gradient(to right bottom, #662d8cee ,#ed1e78ea)'}}>
                <ul className='flex justify-center align-middle flex-col gap-5 text-center text-gray-300 font-extrabold'>
                    <li className='hover:text-white hover:cursor-pointer' style={{margin:'0 auto'}}><img src={close} alt="close" width={28}  onClick={()=>{props.setOpenManu(false)}}/></li>
                    <li><Link className="hover:text-white" to="/shop">Shop</Link></li>
                    <li><Link className="hover:text-white" to={'/checkout'}>Categories</Link></li>
                    <li><Link className="hover:text-white" to={'/cart'}>Cart</Link></li>
                    <li><Link className="hover:text-white" to={'/checkout'}>Checkout</Link></li>
                    <li><Link className="hover:text-white" to={'/login/signup'}>My Account</Link></li>
                    <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
                </ul>
            </div>
  )
}
