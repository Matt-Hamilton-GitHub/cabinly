'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import img from '@/public/_assets/icon.png'


const MidSection = () => {

     gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement>(null);
  const blackBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.to(blackBox.current, {
      scrollTrigger: {
        trigger: blackBox.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: true,
      },
      width: '10px',
      height: '10px',
      borderRadius: '100px',
      background: '#BF092F',
      ease: 'none',
    }), { scope: container }

  })

  return (
    <section className="flex flex-col items-center justify-center gap-5  h-[100vh] w-full bg-black" ref={container}>
        <div ref={blackBox} className=" w-50 h-50 bg-[#BF092F] shadow-inner shadow-gray-900 rounded-2xl">
            <Image 
            src={img}
            className=' object-cover'
            width='30px'
            alt='place '/>
        </div>
        <div className='relative'>
            <h4 className='text-white'>Cabinly is a platform where </h4>
        </div>
      </section>
  )
}

export default MidSection