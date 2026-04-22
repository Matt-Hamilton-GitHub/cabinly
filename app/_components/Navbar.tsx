"use client";
import Link from "next/link";
import cabinlyLogo from "../../public/_assets/icon.png";
import Image from "next/image";
import { useUserContext } from "../contexts/UserContext";
import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/account/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="relative  bg-gradient-to-br bg-[#2d7a6e] h-20 z-100 top-0 flex items-center gap-10 p-6 justify-between text-[black] w-screen ">
      <div className="flex items-center gap-10 p-6 justify-between w-full animate-fadeInLeft md:p-30">
        <div className="">
          <Link className="flex items-center justify-center flex-col" href="/">
            <Image
              className="w-10 rounded-lg"
              src={cabinlyLogo}
              alt="cabinly-logo"
            />
            <h2 className="text-white">Cabinly</h2>
          </Link>
        </div>
        <div className=" text-white items-start gap-5 hidden sm:flex">
          <Link className=" px-2 " href="/places">
            Destinstions
          </Link>
          {/* <Link className="border-2 px-2 rounded-sm" href='/about'>Activitites</Link> */}

          <Link className="px-2 rounded-sm" href="/cabins">
            Cabins
          </Link>
          <Link className="px-2 rounded-sm" href="/about">
            Activities
          </Link>
        </div>
        <div className="flex flex-row gap-2 border-1 p-2 rounded-xl  text-[white] hover:scale-110 hover:text-[white]  hover:border-[white] transition-all ease-in-out ">
          {user ? (
            <>
              <Link className="  " href="/account">
                Account
              </Link>
              <button
                className="px-2 hover:cursor-pointer"
                onClick={() => handleLogout()}
              >
                Log Out
              </button>
            </>
          ) : (
            <Link href="/log-in">Log in</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
