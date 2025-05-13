'use client'

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components'
import cabin1 from '@/app/_assets/cabin-about-page-1.png'

const Home = () => {
  return (
    
    <header className='relative w-[100vw] flex items-start justify-center '>
      <div className='relative w-[100%] h-[40vh] object-cover '>
        <Image 
        src={cabin1}
        fill
        alt='cabin in woods'
        className='object-cover object-center'
        placeholder='blur'
        blurDataURL="..."
        />

      </div>
    <div className='absolute flex flex-col items-center justify-between text-centert p-10 border-1 border-blue-100 g-10 w-[70vw] h-100 top-[50%] bg-white shadow-sm'>
    <h1 className='font-black text-2xl'>Discover the world's most breathtaking getaways — and make them yours.</h1>
    <p>Our platform curates the best cabins in nature’s most stunning corners — from cozy woodland shelters to modern havens by the sea. With seamless reservations and real-time availability, you’re just a few clicks away from peace, beauty, and adventure.</p>
    </div>
    </header>

        

  );
};



export default Home;
