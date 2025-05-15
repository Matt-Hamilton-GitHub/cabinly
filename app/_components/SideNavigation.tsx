import {
  CalendarDaysIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

import { BookOpenCheck } from 'lucide-react';
const navLinks = [
  {
    name: 'Reservations',
    icon: <BookOpenCheck className='h-5 w-5 text-primary-600 text-[red]' />,
  },
  {
    name: 'Profile',
    icon: <UserIcon className='h-5 w-5 text-primary-600 text-[red]' />,
  },
];

function SideNavigation({onSelect, selected}) {
  return (
    <nav className='border-r-1 -m-1 border-blue-100 h-full flex items-start basis-[20%] justify-between flex-col'>
      <ul className='flex flex-col text-lg ' >
        {navLinks.map((link) => (
          <li className={`hover:cursor-pointer hover:bg-neutral-200 
          ${selected === link.name.toLowerCase() ? 'bg-gray-400' : ""}`} key={link.name}>
            <span
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
              onClick={() => {onSelect(link.name.toLowerCase())}}
           >
              {link.icon}
              <span>{link.name}</span>
            </span>
          </li>
        ))}

      </ul>
  <div className='flex w-[100%] items-end justify-center'>
        <button className='bg-black text-amber-50 p-2 rounded-2xl font-bold hover:cursor-pointer'>Sign Out</button>
  </div>
          
    </nav>
  );
}

export default SideNavigation;
