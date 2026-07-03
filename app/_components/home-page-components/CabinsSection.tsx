import Image from "next/image";
import img1 from "@/public/_assets/bali-002.jpg";
import img2 from "@/public/_assets/cabin-004.jpg";
import img3 from "@/public/_assets//surfing-001.jpg";
import img4 from "@/public/_assets/cabin-interior.jpg";

const CabinsSection = () => {
  return (
    <section id="cabins" className="py-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="">
            <span className="text-orange-500 text-sm tracking-widest uppercase">
              Stay
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
              Handpicked Cabins
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              From rustic mountain retreats to modern eco-lodges, every cabin is
              personally selected for its stunning views and authentic
              character.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">

                <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping [animation-duration:2.5s]" />
                  <div className="relative w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Authentic Local Stays
                  </h3>
                  <p className="text-gray-400">
                    Each cabin reflects the local culture and architecture
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">

                 <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping [animation-duration:2.5s]" />
                  <div className="relative w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                </div>
                


                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Stunning Views Guaranteed
                  </h3>
                  <p className="text-gray-400">
                    Wake up to mountain peaks, fjords, or forest panoramas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping [animation-duration:2.5s]" />
                  <div className="relative w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Verified &amp; Trusted
                  </h3>
                  <p className="text-gray-400">
                    All properties are personally inspected by our team
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 " data-delay="200">
            <div className="space-y-4">
              <div className="rounded-sm border-2 hover:border-orange-400 overflow-hidden card-hover">
                <div className="relative h-48 bg-[#fafafa73]  flex items-center justify-center">
                  <Image
                    src={img1}
                    fill
                    alt="cabin in tropical woods"
                    className="object-cover object-center"
                    quality={50}
                  />
                </div>
              </div>
              <div className="rounded-sm border-2 hover:border-orange-400 overflow-hidden card-hover">
                <div className="relative h-64 bg-gradient-to-br bg-[#fafafa73] flex items-center justify-center">
                  <Image
                    src={img3}
                    fill
                    alt="cabin in tropical woods"
                    className="object-cover object-center"
                    quality={50}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-sm border-2 hover:border-orange-400 overflow-hidden card-hover">
                <div className=" relative h-64 bg-gradient-to-br bg-[#fafafa73]  flex items-center justify-center">
                  <Image
                    src={img4}
                    fill
                    alt="cabin in tropical woods"
                    className="object-cover object-center"
                    quality={50}
                  />
                </div>
              </div>
              <div className="rounded-sm border-2 hover:border-orange-400 overflow-hidden card-hover">
                <div className="relative h-48 bg-gradient-to-br bg-[#fafafa73]  flex items-center justify-center">
                  <Image
                    src={img2}
                    fill
                    alt="cabin in tropical woods"
                    className="object-cover object-center"
                    quality={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinsSection;
