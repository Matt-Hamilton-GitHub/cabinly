'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';


const BtmSection = () => {


     gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement>(null);

  const blackBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.to(blackBox.current, {
      scrollTrigger: {
        trigger: blackBox.current,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
      rotate: 360,
      borderRadius: '100px',
      opacity: 0.5,
      backgroundColor: 'red',
      ease: 'none',
    }), { scope: container }

  })

  return (
    <section className="top-container flex items-center justify-center top-container h-[100vh] w-full" ref={container}>
        <div ref={blackBox} className="box x-30 w-50 h-50 bg-white m-20 rounded-[0px]"></div>
      </section>
  )
}

export default BtmSection