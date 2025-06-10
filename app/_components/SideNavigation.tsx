'use client'

import {
  UserIcon,
} from '@heroicons/react/24/solid';

import { BookOpenCheck, Smile } from 'lucide-react';
import { useState } from 'react';
const navLinks = [
   {
    name: 'Profile',
    icon: <UserIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Reservations',
    icon: <BookOpenCheck className='h-5 w-5 text-primary-600 ' />,
  },
  {
    name: 'Groups',
    icon: <Smile className='h-5 w-5 text-primary-600 ' />
  }
 
];

function SideNavigation({ onSelect, selected }) {

  const [shrink, setShrink] = useState(false)
  return ( 
    <>
    
    <nav className={`${shrink ? 'w-0 overflow-clip' : 'w-[189px]'} z-10 relative  bg-[black] overflow-clip h-screen flex items-start  justify-between flex-col`}>
     <ul className={`${!shrink ? 'flex flex-col text-lg': "hidden "}`} >
        {navLinks.map((link) => (
          <li className={`hover:cursor-pointer hover:bg-neutral-500 text-[black]
          ${selected === link.name.toLowerCase() ? 'bg-[white]' : "text-[white]"}`} key={link.name}>
            <span
              className={` py-3 px-5 hover:bg-primary-900 hover:text-primary-100 hover:text-[black] transition-colors flex items-center gap-4 font-semibold text-primary-200`}
              onClick={() => { onSelect(link.name.toLowerCase()) }}
            >
              {link.icon}
              <span>{link.name}</span>
            </span>
          </li>
        ))}

      </ul>

    </nav>
      <button className={`${shrink ? "top-[50%]" :' absolute left-[185px] top-[50%]'} z-100 flex flex-col justify-center items-center w-[20px] h-[100px] absolute text-[white] bg-[black] cursor-pointer 
        rounded-tr-4xl rounded-br-4xl 
        transition-all duration-150 ease-in-out 
        hover:scale-120 hover:w-[30] hover:h-[110px]`} 
        onClick={()=> setShrink(!shrink)}><span className='transform rotate-90'>{`${shrink ? 'show' : 'hide'}`}</span></button>
      {/* <div className='flex w-[100%] items-end justify-center'>
        <button className='bg-black text-amber-50 p-2 rounded-2xl font-bold hover:cursor-pointer'>Sign Out</button>
      </div> */}
    </>
  );
}

export default SideNavigation;
