'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import placeImg from '@/public/_assets/bg-img-1.png'
const TopSection = () => {

     gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement>(null);
  const animatedBox1 = useRef<HTMLDivElement>(null);
  const animatedBox2 = useRef<HTMLDivElement>(null);
  const animatedBox3 = useRef<HTMLDivElement>(null);
  const aImage = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.fromTo(animatedBox1.current, {y: '10vh', fontSize: 40, color: 'black'},
        
    {
      y: '93vh',
      duration: 1,
    
      ease: 'none',
      width: '100vw',
      
      color: 'white',

       scrollTrigger: {
        trigger: animatedBox1.current,
        start: 'top 30%',
        end: 'bottom 10%',
        scrub: true,
      },

    })

    gsap.fromTo(animatedBox2.current, {y: 300, fontSize: 40, background: '#BF092F', width: '40px', height: '40px'},
        
    {
      y: '1100px',
      duration: 1,
     
      ease: 'none',
      width: '1000px',
      height:'1000px',
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
    
    
    , { scope: container}

  })
  return (
    <section ref={container} className="text-center flex  justify-center items-bottom h-[100vh] w-full gap-5" >
            <div  ref={animatedBox1} className="flex justify-center items-start  h-25 m-20  font-bold text-3xl w-full"><h1>Welcome to The Dream World</h1></div>
            {/* <div ref={animatedBox2} className="box w-20 h-2 0 border-0 border-black bg-white m-20 rounded-[0px] shadow-gray-500 shadow-md"></div>
            <div ref={animatedBox3} className="box w-50 h-50 border-0 items-end border-black bg-white m-20 rounded-[0px] shadow-gray-500 shadow-md"></div> */}
            {/* <div ref={animatedBox2}  className=" absolute w-20 h-20 bg-white border-0 border-black rounded-[3px] shadow-gray-900 shadow"></div> */}
            {/* <div className='absolute z-0 w-[100vw] h-100 items-end self-end'>
                <Image
                            src={placeImg}
                            className='relative object-cover object-top'
                            fill
                            alt='place '/>
            </div> */}
      </section>
  )
}

export default TopSection