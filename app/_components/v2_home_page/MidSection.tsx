'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';


const MidSection = () => {

     gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement>(null);
  const blackBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.to(blackBox.current, {
      scrollTrigger: {
        trigger: blackBox.current,
        start: 'top center',
        end: 'top top',
        scrub: true,
      },
      rotate: 360,
      borderRadius: '100px',
      opacity: 0.5,
      backgroundColor: 'white',
      ease: 'none',
    }), { scope: container }

  })

  return (
    <section className="top-container flex items-center justify-center top-container h-[100vh] w-full bg-black" ref={container}>
        <div ref={blackBox} className="box x-30 w-50 h-50 border-x-orange-700 m-20  border-2 border-white rounded-[0px] shadow-md shadow-black"></div>
      </section>
  )
}

export default MidSection