'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'

import cabin1 from '../../public/_assets/cabin-about-page-1.png'
import cabin2 from '../../public/_assets/cabin-interior.png'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  

  return (
    <div  className="overflow-hidden text-lg">

      {/* Section 1 */}
      <section className="flex flex-col md:flex-row gap-10 items-center justify-center h-[100vh] px-10">
        <div className="relative flex-1">
          <Image
            src={cabin1}
            alt="Beautiful Cabin In The Woods"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl mb-5 text-orange-500 font-medium">
            Welcome to <strong className="underline">Cabinly</strong>
          </h1>
          <p>
            At Cabinly, we believe that the best getaways happen in the most breathtaking places. 
            Discover stunning cabins nestled in nature—whether it’s a cozy retreat in the mountains, 
            a lakeside escape, or a secluded forest hideaway.
          </p>
          <p>
            Hidden away in the heart of the Italian Dolomites, this is your paradise away from home.
            It’s about reconnecting with nature and enjoying simple pleasures with family.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section  className="flex flex-col md:flex-row-reverse gap-10 items-center justify-center h-[100vh] px-10">
        <div  className="relative flex-1">
          <Image
            src={cabin2}
            alt="Interior Cabin"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div  className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl mb-5 text-orange-500 font-medium">
            Managed by our family since 1962
          </h1>
          <p>
            Since 1962, The Cabins has been a cherished family-run retreat. 
            Here, you’re not just a guest; you’re part of our extended family.
          </p>
          <p>
            Join us soon — where tradition meets tranquility, and every visit feels like coming home.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-20">
        <Link className="border-2 text-black px-10 py-3 rounded-lg font-bold text-xl hover:text-white hover:bg-black" href="/cabins">
          Start Exploring
        </Link>
      </div>
    </div>
  )
}
