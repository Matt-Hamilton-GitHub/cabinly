'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import placeImg from '@/public/_assets/bg-img-1.png';
import { MapPinHouse } from 'lucide-react';

const TopSection = () => {

    gsap.registerPlugin(ScrollTrigger);

    const container = useRef<HTMLDivElement>(null);
    const animatedBox1 = useRef<HTMLDivElement>(null);
    const animatedBox2 = useRef<HTMLDivElement>(null);
    const animatedBox3 = useRef<HTMLDivElement>(null);
    const aImage = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        gsap.fromTo(animatedBox1.current, { y: '10vh', fontSize: 50, color: 'black' },

            {
                y: '75vh',
                duration: 1,
                
                ease: 'none',
                color: 'white',

                scrollTrigger: {
                    trigger: animatedBox1.current,
                    start: 'top 30%',
                    end: 'bottom 10%',
                    scrub: true,
                },

            })

        gsap.fromTo(animatedBox2.current, { y: 300, fontSize: 40, background: '#BF092F', width: '40px', height: '40px' },

            {
                y: '700px',
                duration: 1,

                ease: 'none',
                width: '1000px',
                height: '1000px',
                background: '#BF092F',
                borderRadius: '100px',



                scrollTrigger: {
                    trigger: animatedBox2.current,
                    start: 'top 40%',
                    end: 'bottom 10%',
                    scrub: true,
                },

            })

        gsap.to(animatedBox3.current, {
            scrollTrigger: {
                trigger: animatedBox3.current,
                start: 'top center',
                end: 'top top',
                scrub: true,
            },

            rotate: 360,
            borderRadius: '100px',
            opacity: 1,
            backgroundColor: 'red',
            ease: 'none',

        })


            , { scope: container }

    })
    return (
        <section ref={container} className="text-center overflow-clip flex flex-col  justify-start items-center h-[80vh] w-full gap-5" >
            <div ref={animatedBox1} className="flex justify-center items-start  h-25 my-10   font-bold text-3xl w-full"><h1>Find the World That Awaits You</h1></div>
            <div><MapPinHouse size={60}/></div>
            <div className='w-full' ><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3></div>
        </section>
    )
}

export default TopSection