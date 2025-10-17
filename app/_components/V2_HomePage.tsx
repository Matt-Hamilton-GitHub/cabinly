'use client'

import React, { useRef } from 'react'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TopSection from './v2_home_page/TopSection';
import MidSection from './v2_home_page/MidSection';
import BtmSection from './v2_home_page/BtmSection';



//create a container 
function V2_HomePage() {

  gsap.registerPlugin(ScrollTrigger);

  const topContainer = useRef<HTMLDivElement>(null);

  const midContainer = useRef<HTMLDivElement>(null);

  const btmContainer = useRef<HTMLDivElement>(null);

  const blackBox = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    gsap.to(blackBox.current, {
      scrollTrigger: {
        trigger: blackBox.current,
        start: 'top center',
        end: 'toptop',
        scrub: true,
      },
      rotate: 360,
      borderRadius: '100px',
      opacity: 0.5,
      backgroundColor: 'red',
      ease: 'none',
    }), { scope: topContainer }

  })

  return (
    <div >
    <TopSection />
    <MidSection />
    <BtmSection />
    </div>)

}

export default V2_HomePage