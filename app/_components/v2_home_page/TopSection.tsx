'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const TopSection = () => {

     gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement>(null);
  const blackBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.to(blackBox.current, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top center',
        end: 'top top',
        scrub: true,
      },

      rotate: 360,
      borderRadius: '100px',
      opacity: 0.5,
      backgroundColor: 'red',
      ease: 'none',

    }), { }




  })
  return (
    <section className="top-container flex-col flex items-center justify-center  h-[100vh] w-full" >
        <div className="top-line">Welcome to the New World </div>
        <div ref={container} className="box w-50 h-50 boder-1 border-black bg-white m-20 rounded-[0px] shadow-gray-500 shadow-md"></div>
      </section>
  )
}

export default TopSection