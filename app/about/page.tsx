import Link from "next/link";

import cabin1 from '@/app/_assets/cabin-about-page-1.png'
import cabin2 from '@/app/_assets/cabin-interior.png'


import Image from "next/image";

export default function About() {
    return (
      <div className="flex justify-center items-center flex-col gap-10 m-10 text-lg<">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to <strong>The Cabins</strong>
        </h1>
        <p>
          At Cabinly, we believe that the best getaways happen in the most breathtaking places. Our platform makes it easy for travelers to discover and book stunning cabins nestled in nature—whether it's a cozy retreat in the mountains, a lakeside escape, or a secluded forest hideaway.
        </p>
        
        <div className="flex flex-col md:flex-row gap-10 text-lg items-stretch w-full">
        
          <div className="flex-1 space-y-8">
            <p>
            Where nature's beauty and comfortable living blend seamlessly.
                        Hidden away in the heart of the Italian Dolomites, this is your
                        paradise away from home. But it's not just about the luxury cabins.
                        It's about the experience of reconnecting with nature and enjoying
                        simple pleasures with family.
            </p>
            <p>
            Our luxury cabins provide a cozy base, but the real freedom and
                        peace you'll find in the surrounding mountains. Wander through lush
                        forests, breathe in the fresh air, and watch the stars twinkle above
                        from the warmth of a campfire or your hot tub.
            </p>
            <p>
            This is where memorable moments are made, surrounded by nature's
                        splendor. It's a place to slow down, relax, and feel the joy of
                        being together in a beautiful setting.
            </p>
          </div>
          
          <div className="relative flex-1">
            <Image
              src={cabin1}
              className="object-cover w-full h-full"
              alt="Beautiful Cabin In The Woods"
            />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-10 text-lg items-stretch w-full">
          {/* Image First, Text Second */}
          <div className="relative flex-1">
            <Image
              src={cabin2}
              className="object-cover w-full h-full"
              alt="Beautiful Cabin In The Woods"
            />
          </div>
  
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl mb-10 text-accent-400 font-medium">
              Managed by our family since 1962
            </h1>
            <p>
            Since 1962, The Cabins has been a cherished family-run retreat.
                        Started by our grandparents, this haven has been nurtured with love
                        and care, passing down through our family as a testament to our
                        dedication to creating a warm, welcoming environment.
            </p>
            <p>
            Over the years, we've maintained the essence of The Cabins,
                        blending the timeless beauty of the mountains with the personal
                        touch only a family business can offer. Here, you're not just a
                        guest; you're part of our extended family. So join us at The Cabins soon, where tradition meets tranquility, and every visit is
                        like coming home.
            </p>
          </div>
        </div>
  
        <Link className="bg-black text-white px-10 py-3 rounded-lg font-bold" href="/cabins">
          Start Exploring
        </Link>
      </div>
    );
  }
  