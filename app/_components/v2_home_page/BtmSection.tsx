'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';


const BtmSection = () => {


    

  const container = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLHeadingElement>(null)


  useGSAP(() => {
    const el = textRef.current

    gsap.to(el, {
      color: '#ff6600', // target color
      duration: 50,
      scrollTrigger: {
        trigger: el,
        start: 'top center', // when text enters center of viewport
        end: '+=500',         // color transition happens over 500px of scroll
        scrub: true,          // smooth connection to scroll
        pin: true,            // keeps text fixed while color changes
        markers: false,       // set true for debugging
      },
    })
  }, [])
  return (
   <section className="h-[150vh] w-full relative " ref={container}>
  <div className="absolute inset-0 flex justify-center items-center">
    <h1 ref={textRef} className="text-6xl font-bold">
      Scroll to Change My Color
    </h1>
  </div>
</section>

  )
}

export default BtmSection