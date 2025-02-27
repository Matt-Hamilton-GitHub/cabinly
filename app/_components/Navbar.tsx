import Link from "next/link";
import cabinlyLogo from '@/app/_assets/icon.png'
import Image from "next/image";

export default function Navbar(){

    return (    
    <div className="flex items-center gap-10 p-5 justify-between">
        <div><Link href='/' ><Image className='w-15 rounded-lg' src={cabinlyLogo} alt='cabinly-logo'/></Link></div>
        <div className="flex items-start gap-10">
            <Link href='/about'>About</Link>
            <Link href='/cabins'>Cabins</Link>
        </div>
        <div className="flex">Log In</div>
    </div>)
}