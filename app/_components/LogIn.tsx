'use client'

import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, ArrowRight, Mountain } from 'lucide-react'

export default function Login() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState<string | null>(null)
  const [loading, setLoading]   = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const router = useRouter()
  const { setUser } = useUserContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/account/log-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        const user = {
          userId: data.user._id,
          name:   data.user.name,
          email:  data.user.email,
        }
        setUser(user)
        setPassword('')
        setEmail('')
        router.push('/places')
      } else {
        setError(data.message)
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex">

      {/* ── Left panel ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0f3d3e] flex-col
        justify-between p-12 relative overflow-hidden">

        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.06]">
            <svg viewBox="0 0 100 100">
              <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
              <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed" opacity=".4" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-10 w-48 h-48 opacity-[0.04]">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#e8f0ed"
                strokeWidth="1" fill="none" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2
            -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03]">
            <svg viewBox="0 0 100 100">
              <polygon points="50,5 95,75 5,75"
                stroke="#e8f0ed" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
        </div>

        {/* Logo */}
        <div className="relative flex items-center gap-2">
          <div className="w-8 h-8 bg-[#a8d5d0] rounded-lg flex items-center
            justify-center">
            <Mountain size={16} className="text-[#0f3d3e]" />
          </div>
          <span className="text-[#e8f0ed] font-medium text-lg">Cabinly</span>
        </div>

        {/* Center quote */}
        <div className="relative">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase
            text-[#a8d5d0] mb-4">
            Adventure Awaits
          </p>
          <h2 className="font-serif text-4xl text-[#e8f0ed] leading-[1.2] mb-6">
            The world is too beautiful to stay in one place
          </h2>
          <p className="text-[#e8f0ed]/50 font-light text-sm leading-relaxed
            max-w-sm">
            Sign in to access your trips, saved cabins, and upcoming adventures
            across 120+ destinations.
          </p>
        </div>

        {/* Bottom stats */}
        <div className="relative grid grid-cols-3 gap-4">
          {[
            { val: '120+', label: 'Destinations' },
            { val: '237',  label: 'Cabins' },
            { val: '2.4k', label: 'Travellers' },
          ].map((s) => (
            <div key={s.label}
              className="bg-[#e8f0ed]/08 border border-[#e8f0ed]/10
              rounded-xl p-4">
              <p className="text-xl font-medium text-[#e8f0ed]">{s.val}</p>
              <p className="text-xs text-[#e8f0ed]/40 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex-1 flex flex-col items-center justify-center
        px-6 py-12">

        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-[#0f3d3e] rounded-lg flex items-center
            justify-center">
            <Mountain size={16} className="text-[#a8d5d0]" />
          </div>
          <span className="text-[#0f3d3e] font-medium text-lg">Cabinly</span>
        </div>

        <div className="w-full max-w-sm">

          {/* Header */}
          <div className="mb-8">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase
              text-[#a8d5d0] mb-2">
              Welcome back
            </p>
            <h1 className="font-serif text-3xl text-[#0f3d3e]">
              Sign in to your account
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email field */}
            <div className="relative">
              <label htmlFor="email"
                className={`absolute left-10 transition-all duration-200
                  pointer-events-none ${
                    focusedField === 'email' || email
                      ? 'top-1.5 text-[10px] text-[#a8d5d0] font-medium tracking-wide'
                      : 'top-1/2 -translate-y-1/2 text-sm text-gray-400'
                  }`}>
                Email address
              </label>
              <div className="absolute left-3 top-1/2 -translate-y-1/2
                text-[#a8d5d0]">
                <Mail size={16} />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full pt-5 pb-2 pl-10 pr-4 rounded-xl border
                  bg-white text-[#0f3d3e] text-sm outline-none
                  transition-all duration-200 ${
                    focusedField === 'email'
                      ? 'border-[#0f3d3e] shadow-[0_0_0_3px_rgba(15,61,62,0.06)]'
                      : 'border-[#0f3d3e]/15 hover:border-[#0f3d3e]/30'
                  }`}
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <label htmlFor="password"
                className={`absolute left-10 transition-all duration-200
                  pointer-events-none ${
                    focusedField === 'password' || password
                      ? 'top-1.5 text-[10px] text-[#a8d5d0] font-medium tracking-wide'
                      : 'top-1/2 -translate-y-1/2 text-sm text-gray-400'
                  }`}>
                Password
              </label>
              <div className="absolute left-3 top-1/2 -translate-y-1/2
                text-[#a8d5d0]">
                <Lock size={16} />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                required
                className={`w-full pt-5 pb-2 pl-10 pr-4 rounded-xl border
                  bg-white text-[#0f3d3e] text-sm outline-none
                  transition-all duration-200 ${
                    focusedField === 'password'
                      ? 'border-[#0f3d3e] shadow-[0_0_0_3px_rgba(15,61,62,0.06)]'
                      : 'border-[#0f3d3e]/15 hover:border-[#0f3d3e]/30'
                  }`}
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <Link href="/forgot-password"
                className="text-xs text-[#a8d5d0] hover:text-[#0f3d3e]
                transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border
                border-red-100 rounded-xl px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400
                  flex-shrink-0" />
                <p className="text-xs text-red-600">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#0f3d3e] text-[#e8f0ed]
                text-sm font-medium flex items-center justify-center gap-2
                hover:bg-[#1a5c5e] disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-200 group"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2
                    border-[#e8f0ed]/30 border-t-[#e8f0ed] animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight size={15} className="group-hover:translate-x-0.5
                    transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#0f3d3e]/08" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-[#0f3d3e]/08" />
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/sign-up"
              className="text-[#0f3d3e] font-medium hover:text-[#a8d5d0]
              transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}