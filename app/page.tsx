import Image from "next/image";
import mainCabin from "@/app/_assets/main-cabin-3.png";
import { TbBeach } from "react-icons/tb";
import { MdForest } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={mainCabin}
        alt="Beautiful cabin in the woods"
        placeholder="blur"
        className="object-cover w-screen h-screen z-0"
      />


      <div className="absolute flex  items-center justify-center bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10 p-4 rounded-lg shadow-2xl">
        <h1 className="lg:text-2xl font-bold text-center sm:text-lg">Find Your Perfect Cabin</h1>
        <div className="absolute top-20 flex gap-5 items-center justify-between">
          <span className="bg-white rounded-[100px] p-3"><TbBeach size={40} /></span>
          <span className="bg-white rounded-[100px] p-3"><MdForest size={40} /></span>
          <span className="bg-white rounded-[100px] p-3"><FaMountainSun size={40} /></span>

        </div>
      </div>

    </div>
  );
}
