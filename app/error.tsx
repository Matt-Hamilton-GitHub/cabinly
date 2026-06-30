// app/error.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, ArrowRight } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#0f3d3e] flex items-center
      justify-center px-6 relative overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r
          from-[#0f3d3e] via-[#a8d5d0] to-[#0f3d3e]" />
        <div className="absolute top-20 right-10 w-80 h-80 opacity-[0.03]">
          <svg viewBox="0 0 100 100">
            <path d="M50 5 L10 90 L90 90 Z" fill="#0f3d3e" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.03]">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#0f3d3e"
              strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative text-center max-w-lg">

        {/* Error icon */}
        <div className="relative mx-auto mb-8 w-24 h-24">
          <div className="w-full h-full rounded-full bg-[#faeeda] flex
            items-center justify-center">
            <AlertTriangle size={40} className="text-[#633806]" />
          </div>
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-[#faeeda]/50
            animate-ping [animation-duration:2s]" />
        </div>


        <p className="text-[10px] font-medium tracking-[0.3em] uppercase
          text-[#a8d5d0] mb-4">
          Something went wrong
        </p>

        <h1 className="font-serif text-4xl text-[#0f3d3e] leading-[1.1] mb-4">
          The mountain shifted
        </h1>

        <p className="text-gray-400 font-light leading-relaxed mb-4
          max-w-sm mx-auto">
          An unexpected error occurred on our end. Our team has been
          notified. Try refreshing — most issues resolve themselves.
        </p>

        {/* Error digest for debugging */}
        {error.digest && (
          <div className="inline-flex items-center gap-2 bg-[#f8faf9]
            border border-[#0f3d3e]/08 rounded-xl px-4 py-2 mb-8">
            <span className="text-[10px] text-gray-400 font-light">
              Error ID:
            </span>
            <code className="text-[10px] font-mono text-[#0f3d3e]">
              {error.digest}
            </code>
          </div>
        )}

        {!error.digest && <div className="mb-8" />}

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* Try again */}
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 rounded-full
              bg-[#a8d5d0] text-[#0f3d3e] text-sm font-medium
              hover:bg-[#bce0db] transition-colors group"
          >
            <RefreshCw size={14} className="group-hover:rotate-180
              transition-transform duration-500" />
            Try again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full
              border border-[#e8f0ed]/15 text-[#e8f0ed]/70 text-sm
              hover:border-[#e8f0ed]/30 hover:text-[#e8f0ed] transition-colors"
          >
            Go home
            <ArrowRight size={14} className="group-hover:translate-x-0.5
              transition-transform" />
          </Link>
        </div>

        {/* Bottom hint */}
        <p className="text-gray-300 text-xs font-light mt-12">
          If this keeps happening, contact us at{' '}
          <a href="mailto:support@cabinly.com"
            className="text-[#a8d5d0] hover:text-[#ffffff] transition-colors">
            support@cabinly.com
          </a>
        </p>
      </div>
    </div>
  )
}