import Link from "next/link";
import cabinlyLogo from '@/app/_assets/icon.png'
import Image from "next/image";


export default function Navbar(){

    return (    
    <div className="flex items-center gap-10 p-5 justify-between">
        <div className=""><Link className="flex items-center justify-center flex-col" href='/' ><Image className='w-10 rounded-lg' src={cabinlyLogo} alt='cabinly-logo'/><h2>Cabinly</h2></Link></div>
        <div className="flex items-start gap-10">
            <Link href='/cabins'>Cabins</Link>
            <Link href='/about'>About</Link>
        </div>
        <div className="flex">Log In</div>
    </div>)
}


