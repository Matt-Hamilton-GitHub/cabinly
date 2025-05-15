'use client'


import Image from 'next/image';
import styled from 'styled-components'
import cabin1 from '@/app/_assets/cabin-about-page-1.png'
import cabinForest from '../_assets/blm2.jpg'

import * as motion from "motion/react-client"

import lakeCabin from '../_assets/pexels-bylukemiller-14569262.jpg'

const Home = () => {

  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "",
    borderRadius: "50%",
}
  return (
    <>
      <header className=' relative w-[100vw] flex items-center justify-center '>
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

      <div className='flex gap-10 w-[100vw] flex-col items-center justify-center mt-80'>
        <h1 className='p-5 w-[80vw] shadow-inner font-bold rounded-2xl text-center text-5xl text-amber-700 bg-gray-300'>Top Cabins To Descover</h1>
    

        <div className='p-5 flex-wrap gap-10 flex border-b-1 flex-row items-center justify-center relative'>
          <motion.div 
          className='relative w-[200px] h-[200px]'
          initial={{ opacity: 0, scale: 0, rotate: 90 }}
          whileInView={{opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.01 }}
            >

          <Image
            className=' block object-cover rounded-2xl basis-[20%]'
            fill
            src={lakeCabin}
            alt='cabin next to a lake' />
            </motion.div>
            <div className='flex basis-[60%] '>

              <p>Nestled in the heart of Washington’s evergreen wilderness, this charming lakeside cabin offers a perfect escape from the hustle and bustle. Surrounded by towering pine trees and perched just steps from the tranquil shoreline, the cabin blends rustic charm with modern comfort. Large picture windows frame stunning views of the lake, where mist drifts over the water in the early morning and sunsets paint the sky in hues of gold and lavender.</p>
            </div>
        </div>  
    <section>

        <div className='p-5 flex-wrap  border-b-1 gap-10 flex flex-row items-center justify-center relative'>
          <div className='flex basis-[60%]'>

          <p>Nestled in the heart of Washington’s evergreen wilderness, this charming lakeside cabin offers a perfect escape from the hustle and bustle. Surrounded by towering pine trees and perched just steps from the tranquil shoreline, the cabin blends rustic charm with modern comfort. Large picture windows frame stunning views of the lake, where mist drifts over the water in the early morning and sunsets paint the sky in hues of gold and lavender.</p>
            </div>
          <motion.div className='relative w-[200px] h-[200px]'
           initial={{ opacity: 0, scale: 0, rotate: 90 }}
          whileInView={{opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.01 }}>

          <Image
            className='block object-cover rounded-2xl basis-[20%]'
            fill
            src={lakeCabin}
            alt='cabin next to a lake' />
            </motion.div>
            
        </div>    

        <div className='p-5 flex-wrap  gap-10 border-b-1 flex flex-row items-center justify-center relative'>
          <motion.div 
          className='relative w-[200px] h-[200px]'
          initial={{ opacity: 0, scale: 0, rotate: 90 }}
          whileInView={{opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.01 }}
            >

          <Image
            className=' block object-cover rounded-2xl basis-[20%]'
            fill
            src={cabinForest}
            alt='cabin next to a lake' />
            </motion.div>
            <div className='flex basis-[60%]'>
          <p>Nestled in the heart of Washington’s evergreen wilderness, this charming lakeside cabin offers a perfect escape from the hustle and bustle. Surrounded by towering pine trees and perched just steps from the tranquil shoreline, the cabin blends rustic charm with modern comfort. Large picture windows frame stunning views of the lake, where mist drifts over the water in the early morning and sunsets paint the sky in hues of gold and lavender.</p>
            </div>
        </div>    
            </section>
      </div>
    </>

  );
};


export default Home;
