'use client'
import Link from "next/link";
import cabinlyLogo from '../../public/_assets/icon.png'
import Image from "next/image";
import { useUserContext } from "../contexts/UserContext";
import { CircleUserRound } from 'lucide-react';

export default function Navbar() {

    const {user} = useUserContext();

    return (
        <div className="flex items-center gap-10 p-5 justify-between bg-[black] text-[white] ">
            <div className="rounded-br-3xl"><Link className="flex items-center justify-center flex-col" href='/' ><Image className='w-10 rounded-lg' src={cabinlyLogo} alt='cabinly-logo' /><h2>Cabinly</h2></Link></div>
            <div className="flex items-start gap-10">
                <Link href='/cabins'>Cabins</Link>
                <Link href='/about'>About</Link>
            </div>
            <div className="flex flex-row gap-2 border-[black] border-2 bg-[white] p-2 rounded-xl shadow-lg inset-shadow-gray-550 text-[black] hover:scale-110 hover:text-[white]  hover:border-[white] transition-all ease-in-out hover:bg-[black]">
                {user ? <Link href='/account'> <div className="flex flex-row gap-2 items-center justify-center"><CircleUserRound /><span className="hidden md:block">Account</span></div> </Link>: <Link href='/account/log-in'>Log in</Link> }
            </div>
        </div>)
}


