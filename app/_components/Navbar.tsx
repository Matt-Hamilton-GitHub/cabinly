'use client'
import Link from "next/link";
import cabinlyLogo from '../../public/_assets/icon.png'
import Image from "next/image";
import { useUserContext } from "../contexts/UserContext";
import { CircleUserRound } from 'lucide-react';
import { useRouter } from "next/navigation";


export default function Navbar() {

    const { user, setUser } = useUserContext();
    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/account/logout', { method: 'POST' });
        setUser(null);
        router.push('/')
    }

    return (
        <div className="flex items-center gap-10 p-6 justify-between bg-[black] text-[white] ">
            <div className="rounded-br-3xl"><Link className="flex items-center justify-center flex-col" href='/' ><Image className='w-10 rounded-lg' src={cabinlyLogo} alt='cabinly-logo' /><h2>Cabinly</h2></Link></div>
            <div className="flex items-start gap-10">
                <Link className="border-2 px-2 rounded-sm" href='/cabins'>Cabins</Link>
                {/* <Link className="border-2 px-2 rounded-sm" href='/about'>Activitites</Link> */}

                <Link className="border-2 px-2 rounded-sm" href='/about'>About</Link>
            </div>
            <div className="flex flex-row gap-2 border-[black] border-2 bg-[white] p-2 rounded-xl shadow-lg shadow-black text-[black] hover:scale-110 hover:text-[white]  hover:border-[white] transition-all ease-in-out hover:bg-[black]">
                {user ?
                    <>
                        <Link className="border-2 px-2 rounded-sm " href='/account'>Account</Link>
                        <button className="border-l-2 px-2 hover:cursor-pointer" onClick={() => handleLogout()}>Log Out</button>
                    </>
                    : <Link href='/log-in'>Log in</Link>}
            </div>
        </div>)
}


