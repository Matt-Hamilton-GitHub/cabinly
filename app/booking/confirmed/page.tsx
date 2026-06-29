// app/booking/confirmed/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react'
import { useUserContext } from '@/app/contexts/UserContext'
const STATES = {
  success: {
    icon: <CheckCircle2 size={52} className="text-[#a8d5d0]" />,
    title: 'Booking confirmed!',
    desc: 'Your adventure is locked in. Check your account for trip details and get ready to explore.',
    cta: 'Browse destinations',
    href: '/places',
    bg: 'bg-[#e1f5ee]',
  },
  expired: {
    icon: <Clock size={52} className="text-[#633806]" />,
    title: 'Link expired',
    desc: 'This confirmation link is more than 24 hours old. Your booking has been automatically cancelled. You can make a new booking anytime.',
    cta: 'Browse destinations',
    href: '/places',
    bg: 'bg-[#faeeda]',
  },
  upcoming: {
    icon: <CheckCircle2 size={52} className="text-[#a8d5d0]" />,
    title: 'Already confirmed',
    desc: 'This booking has already been confirmed. You\'re all set!',
    cta: 'Go home',
    href: '/',
    bg: 'bg-[#e1f5ee]',
  },
  cancelled: {
    icon: <XCircle size={52} className="text-red-400" />,
    title: 'Booking cancelled',
    desc: 'This booking was cancelled. You can make a new booking anytime.',
    cta: 'Browse destinations',
    href: '/places',
    bg: 'bg-red-50',
  },
  notfound: {
    icon: <AlertCircle size={52} className="text-gray-400" />,
    title: 'Booking not found',
    desc: 'We couldn\'t find this booking. It may have already expired and been removed.',
    cta: 'Browse destinations',
    href: '/places',
    bg: 'bg-gray-50',
  },
  invalid: {
    icon: <XCircle size={52} className="text-red-400" />,
    title: 'Invalid link',
    desc: 'This confirmation link is invalid. Please check your email for the correct link.',
    cta: 'Browse destinations',
    href: '/places',
    bg: 'bg-red-50',
  },
  reserved: {
    icon: <Clock size={52} className="text-[#a8d5d0]" />,
    title: 'Cabin reserved!',
    desc: 'Your cabin is being held for 24 hours. We\'ve sent a confirmation email — click the link inside to secure your booking before it expires.',
    cta: 'Return home',
    href: '/',
    bg: 'bg-[#e1f5ee]',
  },
}


export default function BookingConfirmedPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status') as keyof typeof STATES ?? 'invalid'
  const state  = STATES[status] ?? STATES.invalid
  const {authUser} = useUserContext()
   return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        {/* Icon circle */}
        <div className={`w-24 h-24 rounded-full ${state.bg} flex items-center
          justify-center mx-auto mb-6`}>
          {state.icon}
        </div>

        {/* Text */}
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase
          text-[#a8d5d0] mb-3">
          Booking status
        </p>
        <h1 className="font-serif text-3xl text-[#0f3d3e] mb-4">
          {state.title}
        </h1>
        <p className="text-sm text-gray-500 font-light leading-relaxed mb-8
          max-w-sm mx-auto">
          {state.desc}
        </p>

        {/* CTA */}
        <Link
          href={state.href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full
            bg-[#0f3d3e] text-[#e8f0ed] text-sm font-medium
            hover:bg-[#1a5c5e] transition-colors"
        >
          {state.cta}
        </Link>

        {/* Home link */}
        {/* <div className="mt-4">
          <Link href="/"
            className="text-xs text-gray-400 hover:text-[#0f3d3e]
            transition-colors">
            Return to home
          </Link>
        </div> */}
      </div>
    </div>
  )
}