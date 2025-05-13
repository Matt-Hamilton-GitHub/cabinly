import Link from "next/link";

export default function Footer() {

    return (
        <div className="border-t-1 p-2.5 border-blue-100 flex justify-center items-center align-center ">
        <div className="flex w-full items-center justify-evenly">
          <Link href="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
        </div>
    
        </div>
    )
}