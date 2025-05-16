'use client'
import Link from "next/link";
import cabinlyLogo from '@/app/_assets/icon.png'
import Image from "next/image";
import { useUserContext } from "../contexts/UserContext";
import { CircleUserRound } from 'lucide-react';

export default function Navbar() {

    const {user} = useUserContext();

    return (
        <div className="flex items-center gap-10 p-5 justify-between border-b-1 border-b-blue-100">
            <div className=""><Link className="flex items-center justify-center flex-col" href='/' ><Image className='w-10 rounded-lg' src={cabinlyLogo} alt='cabinly-logo' /><h2>Cabinly</h2></Link></div>
            <div className="flex items-start gap-10">
                <Link href='/cabins'>Cabins</Link>
                <Link href='/about'>About</Link>
            </div>
            <div className="flex flex-row gap-2 bg-neutral-500 p-2 rounded-xl shadow-lg inset-shadow-gray-550 text-[white] hover:scale-110 hover:bg-amber-700">
                {user ? <Link href='/account'> <div className="flex flex-row gap-2 items-center justify-center"><CircleUserRound /><span className="hidden md:block">{user.name}</span></div> </Link>: <Link href='/account/log-in'>Log in</Link> }
            </div>
        </div>)
}


