import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { Infinity } from "lucide-react";
import { Earth } from "lucide-react";

import { TentTree } from "lucide-react";
import { FlameKindling } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { Sparkles } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import places from "@/public/_assets/places-info/places";
import { title } from "process";

const featuresLst = [
  { id: 1, title: "Find Your Dream Destination", sub: [] },
  { id: 2, title: "Choose the Right Level of Comfort ", sub: [] },
  {
    id: 1,
    title: "Join Activities to Shape Your Experience",
    sub: ["We have over 50 different activities"],
  },
];
const ComfortLvls = [
  {
    id: 101,
    type: "Wild Escape",
    tags: ["simple", "charming", "essentials only"],
    desc: "A simple, back-to-nature cabin with essential comforts. Perfect for travelers who value charm, nature, and adventure over luxury.",
    perks: ["back-to-nature", "Minimal amenities", "for adventurous"],
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1769468417/stephan-mahlke-U4nb4U-wov0-unsplash_xzts0b.jpg",
  },
  {
    id: 102,
    type: "Forest Comfort",
    tags: ["comfortable", "warm", "well-equipped"],
    desc: "A comfortable, well-equipped cabin designed for relaxation. Thoughtful amenities, warm interiors, and everything you need to feel at home.",
    perks: ["Fireplace", "good beds", "charm"],
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1750454025/pexels-jonathanborba-19737867_rn0wnu.jpg",
  },
  {
    id: 103,
    type: "Signature Retreat",
    tags: ["premium comfort", "elevated design"],
    desc: "An elevated cabin experience with premium amenities. Stylish design, extra space, and indulgent touches for a truly memorable stay.",
    perks: ["hot tub", "views", "designer interiors"],
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1750453182/pexels-vika-glitter-392079-18887138_qw2ry0.jpg",
  },
];

const content = [
  {
    id: 0,
    stat: "500+",
    title: "CABINS ACROSS THE WORLD",
    logo: <TentTree size={60} color={"#000"} />,
  },
  {
    id: 1,
    stat: "50+",
    title: "GUIDED EXPERIENCE",
    logo: <Sparkles size={60} color={"#000"} />,
  },
  {
    id: 2,
    stat: "37+",
    title: "ACTIVITIES TO JOIN",
    logo: <Dumbbell size={60} color={"#000"} />,
  },
  {
    id: 3,
    stat: <Infinity size={60} />,
    title: "NUMBER OF MEMORIES CREATED",
    logo: <FlameKindling size={60} color={"#000"} />,
  },
];

const topPlaces = [
  {
    pId: "10001",
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359801/pexels-jean-pixels-427051121-19182254_abqvjo.jpg",
    title: "Machu Picchu",
    country: "Peru",
    description:
      "An ancient Incan citadel set high in the Andes, surrounded by dramatic mountain scenery and cloud forests.",
  },
  {
    pId: "10002",
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359802/pexels-bert-christiaens-2570221-6282771_wngqmh.jpg",
    title: "Santorini",
    country: "Greece",
    description:
      "Famous for its whitewashed villages, blue domes, and breathtaking sunsets over the Aegean Sea.",
  },
  {
    pId: "68607924b0739f4ebe423072",
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359120/pexels-souvenirpixels-1574184_fpebna.jpg",
    title: "Banff National Park",
    country: "Canada",
    description:
      "A paradise of turquoise lakes, snow-capped peaks, and scenic trails in the heart of the Canadian Rockies.",
  },
  {
    pId: "10004",
    title: "The Maldives",
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359801/pexels-asadphoto-1021066_auhjpy.jpg",
    country: "Maldives",
    description:
      "Crystal-clear waters, coral reefs, and overwater bungalows spread across idyllic tropical islands.",
  },
  {
    pId: "10005",
    img_url:
      "https://res.cloudinary.com/debnvx8ww/image/upload/v1769359800/pexels-sara-lemoine-143460205-10378228_1_hn5f84.jpg",
    title: "Queenstown",
    country: "New Zealand",
    description:
      "A stunning alpine town known for adventure sports, pristine lakes, and dramatic mountain landscapes.",
  },
];

const HomePage = () => {
  return (
    <section className="flex flex-col gap-0 w-screen">
      
      <section className="relative h-[70vh] w-screen px-[10%] flex justify-center items-center bg-[#000] overflow-clip
]">
        {/* <div className="absolute flex justify-center items-start bg-black opacity-60 w-full h-6/12 z-20"></div> */}
        <div className=" absolute full w-[80vw] h-[100%] z-0 right-[10%]">
          <Image
            fill
            src="/_assets/title-2-cut.jpg"
            alt="hero image"
            className="object-cover object-top absolute z-0 rounded-t-4xl "
          />
         
        </div>

        <div className="relative p-10 z-10 bg-[#0e0e0ec8]  flex flex-col justify-center items-center ">
          <h1  className="p-5 text-white tracking-widest rounded-sm font-extrabold text-[46px] mb-6 text-shadow-lg leading-15 text-shadow-[black]"  style={{ textShadow: "2px 1px 4px #122" }}>
            <span className="text-[#339989]  font-bold"> BREAK FREE FROM</span>
            <span> THE EVERYDAY, </span>
            <span className="text-[#339989]   "> CHASE NEW HORIZONS,</span>
            <span> AND LET THE WORLD </span>
            <span className="text-[#339989] font-extrabold  ">INSPIRE YOU</span>
          </h1>
    
            <p className="text-[#fff] tracking-widest mb-16 text-lg leading-8">
              Discover a new way to travel — one that{" "}
              blends nature, connection, and
              unforgettable experiences. 
              </p>\
              {/* <p><strong className="text-[#fff]  rounded-sm">Find your perfect cabin, join guided
              activities, build meaningful friendships, and explore destinations </strong> 
              designed to inspire your mind and energize your spirit.
            </p> */}

          <div className="flex w-full " >
            <Link className=" w-70 flex  h-12 justify-center items-center text-center font-bold  bg-[#FFBA08] p-2 rounded-xl shadow-sm shadow-[#5f5e5e] text-[black] border-2 border-[#d0d0d0] 
            hover:text-[black]  hover:scale-110 hover:cursor-pointer transition-all ease-in-out "
              href="/cabins" 
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section className=" relative w-screen flex justify-center items-center border-1 border-[#bcbcbc89] mb-10">
        <div className="flex flex-row flex-wrap justify-center items-center p-10 w-full gap-10  rounded-b-md">
          {content?.map((i) => {
            const { id, logo, title, stat } = i;

            return (
              <div
                key={id}
                className="flex justify-between items-start flex-col gap-1 h-60 w-50"
              >
                <span className="px-7 items-center h-35 font-semibold text-[46px] text-black">
                  {stat}
                </span>
                <span className="font-bold rounded-4xl shadow-sm border-5 border-[#0ccbaf]  border-s-black border-x-amber-400 p-5 place-items-baseline ">
                  {logo}
                </span>
                <h2 className="flex tracking-widest items-start h-40 w-[120px] font-medium  text-[16px] text-[#434643]">
                  {title}
                </h2>
              </div>
            );
          })}
        </div>
      </section>

      {/* #SECTION 3: How It Works / Features 
        - Find A perfect Place to visit
        - Find A cabin to rent 
        - Sign Up for guided activities 
        - Join Groups */}

      <section className="w-screen flex flex-col justify-center items-start pb-10 border-b-2 border-[#b7b6b6]">
        {/* // - Find A perfect Place to visit */}
        <div className="flex flex-row gap-10 p-5 justify-center items-center bg-green-300 rounded-e-3xl shadow-sm ">
          <span>
            <Earth size={60} />
          </span>
          <h1
            className="font-extrabold tracking-wider text-[32px]"
            style={{ textShadow: "2px 2px 4px rgba(0,1,5,0.6)" }}
          >
            SHAPE YOUR EXPERIENCE{" "}
          </h1>
        </div>
        {/* FEATURES LIST */}
        <div className="flex w-screen gap-20 flex-col">
          <div className="flex bg-[#ffffff7d] flex-wrap  justify-center items-start p-20 gap-15">
            <div className="flex flex-col gap-5 justify-center items-start  w-150">
              <h2 className="font-bold text-2xl bg-black text-[white] p-1">
                Find Your Dream Destination
              </h2>
              <h4 className="text-lg">
                Explore a world of possibilities and choose the destination that
                matches your mood, style, and sense of adventure. Whether you’re
                dreaming of vibrant cities, peaceful beaches, or hidden gems,
                your next journey is just a choice away.
              </h4>
              <ul className="flex gap-5 flex-wrap justify-between items-center">
                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />{" "}
                  <p className="text-[#0ccbaf]">
                    Explore destinations across the globe
                  </p>
                </li>
                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />{" "}
                  <p className="text-[#0ccbaf]">
                    Choose locations based on your interests
                  </p>
                </li>
                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />{" "}
                  <p className="text-[#0ccbaf]">
                    Discover popular spots & hidden gems
                  </p>
                </li>
                <li className="flex gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />{" "}
                  <p className="text-[#0ccbaf]">
                    Switch destinations anytime with ease
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5 justify-center items-start w-150">
              <h2 className="font-bold text-2xl bg-black text-[white] p-1">
                Cabins Designed for Every Mood
              </h2>
              <h4 className="text-lg">
                Whether you’re craving simplicity, cozy comfort, or a refined
                retreat, our cabins are designed to enhance your journey while
                staying true to nature.
              </h4>

              <ul className="flex gap-5 flex-wrap justify-between items-center">
                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    <strong>Wild Escape</strong> — simple, charming, essentials
                    only
                  </p>
                </li>

                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    <strong>Forest Comfort</strong> — comfortable, warm,
                    well-equipped
                  </p>
                </li>

                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    <strong>Signature Retreat</strong> — premium comfort,
                    elevated design
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-5 justify-center items-start w-150">
              <h2 className="font-bold text-2xl bg-black text-[white] p-1">
                Experience More Than a Stay
              </h2>
              <h4 className="text-lg">
                Turn every destination into an unforgettable adventure by
                signing up for curated activities led by professionals and
                locals who know the land best. Explore, learn, and connect in
                ways that go beyond sightseeing.
              </h4>

              <ul className="flex gap-5 flex-wrap justify-start items-center">
                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    Join activities like skiing, snowboarding, hiking, and more
                  </p>
                </li>

                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    Book guided experiences at every location
                  </p>
                </li>

                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    Meet locals and explore destinations through their eyes
                  </p>
                </li>

                <li className="flex justify-center items-center gap-2 border-2 rounded-2xl p-1 border-[#aaa9a9]">
                  <CircleCheckBig color="#ec8c06" size={30} />
                  <p className="text-[#0ccbaf]">
                    Learn from certified professionals and native guides
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen flex flex-col justify-center items-start pb-10">
        <div className="mt-20 w-full flex justify-center items-center ">
          <h1 className="font-semibold text-[1.7pc]">
            Choose From Our Top Destinations{" "}
          </h1>
        </div>
        <div className="flex justify-center items-center flex-row flex-wrap gap-10 py-20 w-full">
          {topPlaces?.map((p) => {
            const { pId, img_url, country, description, title } = p;

            return (
              <div
                key={pId}
                className="relative p-5 flex flex-col max-w-[350px] h-140"
              >
                <div className="bg-[#060606]  rounded-t-md border-4 text-center">
                  <h3 className="text-white font-light text-[2pc] tracking-widest">
                    {title}
                  </h3>
                </div>
                <div className="">
                  <Sparkles
                    className="absolute z-20 top-1 left-[90%] bg-black p-1 rounded-4xl border-2 border-[#595959]"
                    color="orange"
                    size={40}
                  />
                  {/* <Sparkles className="absolute z-20 top-25 left-[102%] bg-black p-1 rounded-2xl" color='orange' size={30}/>
            <Sparkles className="absolute z-20 top-15 left-[100%] bg-black p-1 rounded-2xl" color='orange' size={30}/>
            <Sparkles className="absolute z-20 top-5 left-[95%] bg-black p-1 rounded-2xl" color='orange' size={30}/> */}
                </div>

                <div className="relative h-70 z-0 rounded-b-2xl ">
                  <Image
                    className="object-cover rounded-bs-2xl border-3 border-black border-b-0 "
                    src={img_url}
                    fill
                    alt={title + country}
                  />
                </div>

                <div className=" bottom-5 p-5 z-20 bg-[#9d9d9df3] shadow-md rounded-b-">
                  <p className="text-white tracking-wider">{description}</p>

                  <div className="py-[16px] ">
                    <span className="text-[#404040] font-bold">
                      <Link href={`places/${pId}`}>Learn More</Link>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* - Find A cabin to rent  */}
      <section className="w-screen flex flex-col justify-center items-start pb-10 gap-20 bg-[#fcfcfc2a]">
        <div className="mt-20 w-full flex justify-center items-center ">
          <h1 className="font-bold text-[2pc]">
            Select Cabin That Fits You The Best{" "}
          </h1>
        </div>

        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          {ComfortLvls?.map((c) => {
            const { id, type, tags, desc, perks, img_url } = c;
            return (
              <div key={id} className="flex p-5 bg-[#fcfcfc77] rounded-3xl">
                <div>
                  <h1 className="font-bold text-[1.7pc]"> {type}</h1>
                  <div className="py-2 flex gap-2 ">
                    {tags?.map((t) => (
                      <span
                        className="bg-black rounded-md text-white px-2 py-1 font-extralight shadow-sm shadow-black"
                        key={t}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="full w-full h-[50vh] relative">
                    <Image
                      fill
                      src={img_url}
                      alt="hero image"
                      className="object-cover object-center absolute z-0 rounded-b-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* #SECTION 4: Bundles & Experiences */}

      {/* #SECTION 4: Testimonials / Social Proof */}

      {/* #SECTION 5: Footer */}
    </section>
  );
};

export default HomePage;
