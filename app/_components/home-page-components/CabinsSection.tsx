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
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
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
          <div
            className="grid grid-cols-2 gap-4 "
            data-delay="200"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-[#fafafa73]  flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-cyan-500/30"
                    viewBox="0 0 100 100"
                  >
                    <rect
                      x="20"
                      y="40"
                      width="60"
                      height="45"
                      fill="currentColor"
                    />{" "}
                    <polygon
                      points="10,45 50,15 90,45"
                      fill="currentColor"
                      opacity="0.7"
                    />{" "}
                    <rect x="40" y="55" width="20" height="30" fill="#1a1a1a" />
                  </svg>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden card-hover">
                <div className="h-64 bg-gradient-to-br bg-[#fafafa73] flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-white/20"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50 20 L20 50 L20 80 L80 80 L80 50 Z"
                      fill="currentColor"
                    />{" "}
                    <rect x="35" y="55" width="12" height="12" fill="#1a1a1a" />{" "}
                    <rect x="53" y="55" width="12" height="12" fill="#1a1a1a" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden card-hover">
                <div className="h-64 bg-gradient-to-br bg-[#fafafa73]  flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-white/20"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />{" "}
                    <path
                      d="M50 25 L50 50 L70 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />{" "}
                    <rect
                      x="30"
                      y="60"
                      width="40"
                      height="25"
                      fill="currentColor"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br bg-[#fafafa73]  flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-cyan-500/30"
                    viewBox="0 0 100 100"
                  >
                    <polygon
                      points="50,10 15,45 15,90 85,90 85,45"
                      fill="currentColor"
                    />{" "}
                    <rect x="35" y="60" width="30" height="30" fill="#1a1a1a" />
                  </svg>
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
