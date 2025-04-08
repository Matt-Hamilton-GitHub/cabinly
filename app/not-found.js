import Link from "next/link";


export default function NotFound(){
    return(<section className="h-lvh w-lvw flex justify-center items-center flex-col gap-5">
        <h1 className="text-3xl">404</h1>
        <Link href='/cabins' className=" px-10 py-2 rounded-lg font-bold border-2" >Back</Link>
    </section>)
}