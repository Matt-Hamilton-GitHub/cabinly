import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(0, 217, 255, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>{" "}
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute top-20 left-10 animate-float delay-100">
        <svg
          className="w-16 h-16 text-teal-400 opacity-30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </div>

      <div className="absolute bottom-40 right-20 animate-float delay-300">
        <svg
          className="w-24 h-24 text-emerald-400 opacity-20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </div>
      <div className="absolute top-40 right-40 animate-float delay-500">
        <svg
          className="w-12 h-12 text-teal-300 opacity-25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.2s", MozAnimationFillMode: "forwards" }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-orange-400 text-sm mb-6">
            {" "}
            ✦ Guided by Local Experts ✦{" "}
          </span>
        </div>
        <h1
          id="hero-title"
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.4s", MozAnimationFillMode: "forwards" }}
        >
          Discover the <span className="text-gradient">Wild</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.6s", MozAnimationFillMode: "forwards" }}
        >
          Handcrafted adventures with stunning views, cozy cabins, and
          unforgettable experiences guided by locals who know every hidden
          trail.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.8s", MozAnimationFillMode: "forwards" }}
        >
          <button
            id="hero-cta"
            className="btn-primary px-10 py-4 rounded-full text-black font-semibold text-lg animate-pulse-glow"
          >
            {" "}
            Start Your Journey{" "}
          </button>{" "}
          <button className="px-10 py-4 rounded-full border-2 border-white/30 hover:border-cyan-500 hover:text-cyan-400 transition-all font-semibold text-lg">
            {" "}
            Watch Stories{" "}
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <svg
          className="w-8 h-8 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
