import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { Infinity } from 'lucide-react';

import { TentTree } from 'lucide-react';
import { FlameKindling } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { Sparkles } from 'lucide-react';

const content = [
  { stat: "500+",
    title: "CABINS ACROSS THE WORLD" ,
    logo: <TentTree size={60} color={'#000'}/>,
  },
  {stat: "50+",
    title: "GUIDED EXPERIENCE" ,
    logo: <Sparkles size={60} color={'#000'}/>
  },
   {stat: "37+",
    title: "ACTIVITIES TO JOIN" ,
    logo: <Dumbbell size={60} color={'#000'}/>,
  },
  { stat: <Infinity size={60}/>,
    title: "NUMBER OF MEMORIES CREATED",
    logo: <FlameKindling size={60} color={'#000'}/>,
  },
]


const HomePage = () => {
  return (<section className="flex flex-col gap-0 w-[100vw]">
    <section className="w-full ">
      {/* <div className="absolute flex justify-center items-start bg-black opacity-60 w-full h-6/12 z-20"></div> */}
      <div className="absolute h-[50vh] flex flex-col z-50 w-auto px-[15%] py-20 gap-10 bg-[#00000065]">
        <h1 className="bg-[#00000098] tracking-widest rounded-sm font-extralight text-white text-[32px] w-full text-center ">
          <span className="text-[#1cf8d7] font-bold">BREAK FREE FROM</span> THE
          EVERYDAY,
          <span className="text-[#1cf8d7] font-extrabold">
            {" "}
            CHASE NEW HORIZONS{" "}
          </span>
          , AND LET THE WORLD
          <span className="text-[#1cf8d7] font-extrabold"> INSPIRE YOU</span>
        </h1>
        <p className="text-[#ffff] tracking-wide">
          Discover a new way to travel — one that <span className="text-[#ffffff]">blends nature</span>, connection, and
          unforgettable experiences. Find your perfect cabin, join guided
          activities, build meaningful friendships, and explore destinations
          designed to inspire your mind and energize your spirit.
        </p>

        <Link className="w-60 text-center font-light   bg-[white] p-2 rounded-xl shadow-lg inset-shadow-[#fffd] text-[black] hover:scale-107 
    hover:text-[black]  hover:border-[#1cf8d7] hover:cursor-pointer transition-all ease-in-out " href='/cabins'>Start Your Journey</Link>
      </div>
      
      <div className="full w-full h-[50vh] relative">
        <Image
          fill
          src="/_assets/title-2-cut.jpg"
          alt="hero image"
          className="object-cover object-center absolute z-0 "
        />
      </div>
    </section>
    <section className=" relative w-screen flex justify-center items-center ">
      <div className="flex flex-row flex-wrap justify-center items-center p-10 w-full gap-10 shadow-sm shadow-gray-300 rounded-b-md">


        {content?.map( i => {
          const {logo, title, stat} = i

          return (<div className="flex justify-between items-start flex-col gap-1 h-60 w-50">
            <span className="font-bold rounded-4xl shadow-sm border-5 border-[#0ccbaf]  border-s-black border-x-amber-400 p-5 place-items-baseline ">{logo}</span>
            <span className="px-7 items-center h-35 font-semibold text-[32px] text-black">{stat}</span>
              <h2 className="flex tracking-widest items-start h-40 w-[120px] font-medium  text-[16px] text-[#434643]">{title}</h2>
          </div>)
        })}
        
      </div>
    </section>
    </ section>
  );
};

export default HomePage;
