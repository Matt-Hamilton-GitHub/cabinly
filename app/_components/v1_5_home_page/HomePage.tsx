import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { Infinity } from 'lucide-react';
import { Earth } from 'lucide-react';

import { TentTree } from 'lucide-react';
import { FlameKindling } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import places from "@/public/_assets/places-info/places";
import { title } from "process";



const content = [
  { id: 0,
    stat: "500+",
    title: "CABINS ACROSS THE WORLD" ,
    logo: <TentTree size={60} color={'#000'}/>,
  },
  { id: 1,
    stat: "50+",
    title: "GUIDED EXPERIENCE" ,
    logo: <Sparkles size={60} color={'#000'}/>
  },
   {id: 2,
    stat: "37+",
    title: "ACTIVITIES TO JOIN" ,
    logo: <Dumbbell size={60} color={'#000'}/>,
  },
  { id: 3,
    stat: <Infinity size={60}/>,
    title: "NUMBER OF MEMORIES CREATED",
    logo: <FlameKindling size={60} color={'#000'}/>,
  },
]

const topPlaces = [
  {
  pId: '10001',
  img_url: "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359801/pexels-jean-pixels-427051121-19182254_abqvjo.jpg",
  title: "Machu Picchu",
  country: "Peru",
  description: "An ancient Incan citadel set high in the Andes, surrounded by dramatic mountain scenery and cloud forests."
},
{
  pId: '10002',
  img_url: "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359802/pexels-bert-christiaens-2570221-6282771_wngqmh.jpg",
  title: "Santorini",
  country: "Greece",
  description: "Famous for its whitewashed villages, blue domes, and breathtaking sunsets over the Aegean Sea."
},
{
  pId: '68607924b0739f4ebe423072',
  img_url: "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359120/pexels-souvenirpixels-1574184_fpebna.jpg",
  title: "Banff National Park",
  country: "Canada",
  description: "A paradise of turquoise lakes, snow-capped peaks, and scenic trails in the heart of the Canadian Rockies."
},
{
  pId: '10004',
  title: "The Maldives",
  img_url: "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359801/pexels-asadphoto-1021066_auhjpy.jpg",
  country: "Maldives",
  description: "Crystal-clear waters, coral reefs, and overwater bungalows spread across idyllic tropical islands."
},
{
  pId: '10005',
  img_url: "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359800/pexels-sara-lemoine-143460205-10378228_1_hn5f84.jpg",
  title: "Queenstown",
  country: "New Zealand",
  description: "A stunning alpine town known for adventure sports, pristine lakes, and dramatic mountain landscapes."
}


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
      <div className="flex flex-row flex-wrap justify-center items-center p-10 w-full gap-10  rounded-b-md">

        {content?.map( i => {
          const {id, logo, title, stat} = i

          return (<div key={id} className="flex justify-between items-start flex-col gap-1 h-60 w-50">
            <span className="font-bold rounded-4xl shadow-sm border-5 border-[#0ccbaf]  border-s-black border-x-amber-400 p-5 place-items-baseline ">{logo}</span>
            <span className="px-7 items-center h-35 font-semibold text-[32px] text-black">{stat}</span>
              <h2 className="flex tracking-widest items-start h-40 w-[120px] font-medium  text-[16px] text-[#434643]">{title}</h2>
          </div>)
        })}
        
      </div>
    </section>

   {/* #SECTION 3: How It Works / Features 
        - Find A perfect Place to visit
        - Find A cabin to rent 
        - Sign Up for guided activities 
        - Join Groups */}
   
    <section className="w-screen flex flex-col justify-center items-start pb-10">
      {/* // - Find A perfect Place to visit */}
      <div className="flex flex-row gap-10 p-5 justify-center items-center bg-green-300 rounded-e-3xl shadow-sm ">
          <span><Earth size={60} /></span>
          <h2 className="font-extrabold tracking-wider text-[32px]" style={{textShadow: "2px 2px 4px rgba(0,1,5,0.6)"}}>FIND YOUR NEW DESTINATION</h2>
      </div>

      <div className="flex justify-center items-center flex-row flex-wrap gap-10 py-20 w-full" >
      {topPlaces?.map(p => {
        const {pId, img_url, country, description, title} = p

        return (<div key={pId} className="relative p-5 flex flex-col ">
          <div className="bg-black p-5 rounded-t-md">

          <h3 className="text-white font-light text-[2pc] tracking-widest">{title }</h3>
          </div>

          <div className="relative w-120 h-150 z-0 rounded-b-2xl grayscale-100  hover:grayscale-0">
          <Image 
          className="object-cover rounded-bs-2xl border-30 border-black "
          src={img_url} 
          fill
          alt={title + country}/>
          </div>

          <div className="absolute bottom-5 p-5 z-20 bg-[#000000f3] shadow-md">
            <p className="text-white tracking-wider">{description}</p>

            <div className="py-[16px] ">
              <span className="text-[#bcbcbc] hover:scale-200"><Link href={`places/${pId}`}>Learn More</Link></span>
            </div>
          </div>

        </div>)
      })}
      </div>
    </section>


  {/* #SECTION 4: Top Destinations */}
   
   

  {/* #SECTION 4: Bundles & Experiences */}
   
   

  {/* #SECTION 4: Testimonials / Social Proof */}
   
   

  {/* #SECTION 5: Footer */}
   
  

    </ section>
  );
};

export default HomePage;
