
import Link from 'next/link'
import { Mountain, Compass, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f3d3e] flex items-center
      justify-center px-6 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px]
          opacity-[0.04]">
          <svg viewBox="0 0 100 100">
            <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
            <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed" opacity=".4" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 w-64 h-64 opacity-[0.03]">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#e8f0ed"
              strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="#e8f0ed"
              strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="15" stroke="#e8f0ed"
              strokeWidth="1" fill="none" />
          </svg>
        </div>
        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]
          pointer-events-none opacity-[0.06]">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none"
            className="w-full h-32 block">
            <path
              d="M0,200 L0,160 Q180,80 360,120 Q540,160 720,80
                 Q900,0 1080,60 Q1260,120 1440,90 L1440,200 Z"
              fill="#e8f0ed"
            />
          </svg>
        </div>
      </div>

      <div className="relative text-center max-w-lg">

        {/* Compass icon */}
        <div className="w-24 h-24 rounded-full bg-[#e8f0ed]/08 border
          border-[#e8f0ed]/10 flex items-center justify-center mx-auto mb-8
          relative">
          <Compass size={40} className="text-[#a8d5d0]" />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2
            border-dashed border-[#a8d5d0]/20 animate-spin
            [animation-duration:8s]" />
        </div>

        {/* 404 */}
        {/* <p className="font-serif text-[120px] leading-none text-[#e8f0ed]/08
          font-bold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8
          select-none pointer-events-none">
          404
        </p> */}

        <p className="text-[10px] font-medium tracking-[0.3em] uppercase
          text-[#a8d5d0] mb-4">
          Lost in the mountains
        </p>

        <h1 className="font-serif text-4xl text-[#e8f0ed] leading-[1.1] mb-4">
          This trail doesn't exist
        </h1>

        <p className="text-[#e8f0ed]/50 font-light leading-relaxed mb-10
          max-w-sm mx-auto">
          Looks like you've wandered off the map. The page you're looking
          for has either moved, been removed, or never existed in the
          first place.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full
              bg-[#a8d5d0] text-[#0f3d3e] text-sm font-medium
              hover:bg-[#bce0db] transition-colors group"
          >
            Back to base camp
            <ArrowRight size={14} className="group-hover:translate-x-0.5
              transition-transform" />
          </Link>
          <Link
            href="/places"
            className="flex items-center gap-2 px-6 py-3 rounded-full
              border border-[#e8f0ed]/15 text-[#e8f0ed]/70 text-sm
              hover:border-[#e8f0ed]/30 hover:text-[#e8f0ed] transition-colors"
          >
            <Mountain size={14} />
            Explore destinations
          </Link>
        </div>

        {/* Bottom hint */}
        <p className="text-[#e8f0ed]/20 text-xs font-light mt-12">
          Error 404 · Page not found
        </p>
      </div>
    </div>
  )
}