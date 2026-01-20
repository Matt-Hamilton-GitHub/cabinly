import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="w-full  h-[100vh]">
      <div className="absolute flex justify-center items-start bg-black opacity-60 w-full h-6/12 z-20"></div>
      <div className="absolute flex flex-col z-50 w-auto px-[15%] py-20 gap-10">
        <h1 className="bg-[#00000098] rounded-sm font-extralight text-white text-[32px] w-full text-center ">
          <span className="text-[#1cf8d7] font-bold">BREAK FREE FROM</span> THE
          EVERYDAY,
          <span className="text-[#1cf8d7] font-extrabold">
            {" "}
            CHASE NEW HORIZONS{" "}
          </span>
          , AND LET THE WORLD
          <span className="text-[#1cf8d7] font-extrabold"> INSPIRE YOU</span>
        </h1>
        <p className="text-[#ffff]">
          Discover a new way to travel — one that <span className="text-[#ffffff]">blends nature</span>, connection, and
          unforgettable experiences. Find your perfect cabin, join guided
          activities, build meaningful friendships, and explore destinations
          designed to inspire your mind and energize your spirit.
        </p>

        <Link className="w-60 text-center font-light   bg-[white] p-2 rounded-xl shadow-lg inset-shadow-[#fffd] text-[black] hover:scale-107 
    hover:text-[black]  hover:border-[#1cf8d7] hover:cursor-pointer transition-all ease-in-out " href='/cabins'>Start Your Journey</Link>
      </div>
      
      <div className="full w-full h-6/12 relative">
        <Image
          fill
          src="/_assets/title-2-cut.jpg"
          alt="hero image"
          className="object-cover object-center absolute z-0 "
        />
      </div>
    </section>
  );
};

export default HomePage;
