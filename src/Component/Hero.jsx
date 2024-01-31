import React from 'react'
import { Button } from './Button'
import Hero1 from '../images/Hero/hero1.png'
import { MainNavigation } from './MainNavigation'
import HeroBg from '../images/Hero/hero-bg.jpg'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
    const navigate = useNavigate()
    const goToShop = () => {
        setTimeout(() => {
            navigate('/shop')
        }, 600)
    }
    return (
        <section className="hero-clip-path" style={{ backgroundImage: `linear-gradient(to right bottom, #662d8cee ,#ed1e78ea), url(${HeroBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <MainNavigation />
            <div className='pt-10 md:pt-0 flex px-5 lg:px-20 flex-col md:flex-row' style={{ height: '100%' }}>
                <div className="w-full md:w-3/4 flex flex-col justify-center gap-3 relative z-10"  >
                    <h1 className='font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji text-4xl font-extrabold text-gray-200 text-center md:text-left'>Lorem ipsum dolor</h1>
                    <p className='w-full md:w-3/4 text-gray-100 text-center md:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam excepturi blanditiis nihil amet deserunt optio ipsa. Accusantium, accusamus.</p>
                    <div className='hero-button mx-auto md:mx-0 mb-8' onClick={goToShop}><Button text={'Shop Now'} /></div>
                </div>
                <div className='hero-img m-auto h-full w-3/4 flex justify-end items-end'>
                    <div className="w-full md:h-full md:w-auto flex items-end">
                        <img style={{ filter: 'drop-shadow(10px 10px 20px black)' }} alt="front-img" className="w-full rounded-lg object-cover object-bottom md:w-full md:h-auto xl:w-auto xl:h-3/4" src={Hero1} />
                    </div>
                </div>
            </div>
        </section>
    )
}
