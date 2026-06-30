'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Mountain, LogOut, User, Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'
import cabinlyLogo from '../../public/_assets/icon.png'
import { useUserContext } from '../contexts/UserContext'
import { useUserProfile } from '../_hooks/useUserProfile'
import { TierType } from '@/app/lib/types'

const TIER_COLORS: Record<TierType, string> = {
  Explorer:   'bg-[#e1f5ee] text-[#085041]',
  Adventurer: 'bg-[#faeeda] text-[#633806]',
  Pioneer:    'bg-[#e8e1fa] text-[#3d0663]',
  Summit:     'bg-[#a8d5d0] text-[#0f3d3e]',
}

const NAV_LINKS = [
  { href: '/places',     label: 'Destinations' },
  { href: '/activities', label: 'Activities' },
  { href: '/guides',      label: 'Our Guides' },
]

export default function Navbar() {
  const { authUser, setAuthUser, isValidating } = useUserContext()
  const { data: profile } = useUserProfile()   // ← full profile, cached
  const router   = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    await fetch('/api/user/logout', { method: 'POST' })
    setAuthUser(null)
    router.push('/')
  }

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-[#0f3d3e] border-b
      border-[#e8f0ed]/08">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center
        justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center
            justify-center overflow-hidden">
            <Image
              src={cabinlyLogo}
              alt="Cabinly"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-[#e8f0ed] font-medium text-base">
            Cabinly
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                isActive(href)
                  ? 'bg-[#e8f0ed]/10 text-[#e8f0ed]'
                  : 'text-[#e8f0ed]/60 hover:text-[#e8f0ed] hover:bg-[#e8f0ed]/05'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {isValidating ? (
            <div className="w-5 h-5 rounded-full border-2
              border-[#e8f0ed]/20 border-t-[#a8d5d0] animate-spin" />
          ) : authUser ? (
            <>
              {/* Points — from profile, falls back gracefully */}
              <div className="flex items-center gap-1.5 px-3 py-1.5
                bg-[#e8f0ed]/08 border border-[#e8f0ed]/10 rounded-xl">
                <Zap size={13} className="text-[#a8d5d0]" />
                <span className="text-xs font-medium text-[#a8d5d0]">
                  {profile?.points?.toLocaleString() ?? '—'} pts
                </span>
              </div>

              {/* Tier badge — from profile */}
              {profile?.tier && (
                <span className={`text-[10px] font-medium px-2.5 py-1
                  rounded-full ${TIER_COLORS[profile.tier]}`}>
                  {profile.tier}
                </span>
              )}

              {/* Account link — name from authUser (always available) */}
              <Link
                href={`/user/${authUser.userId}`}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl
                  border transition-colors text-sm ${
                    isActive('/user')
                      ? 'bg-[#e8f0ed]/10 border-[#e8f0ed]/20 text-[#e8f0ed]'
                      : 'border-[#e8f0ed]/15 text-[#e8f0ed]/70 hover:text-[#e8f0ed] hover:border-[#e8f0ed]/30'
                  }`}
              >
                {profile?.avatarUrl ? (
                  <Image
                    src={profile.avatarUrl}
                    alt='user'
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-[#a8d5d0]/20
                    flex items-center justify-center">
                    <User size={11} className="text-[#a8d5d0]" />
                  </div>
                )}
                {authUser?.name?.split(' ')[0] ?? ""}  {/* first name only */}
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="p-2 rounded-xl text-[#e8f0ed]/50
                  hover:text-[#e8f0ed] hover:bg-[#e8f0ed]/08
                  transition-colors"
                title="Log out"
              >
                <LogOut size={15} />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/log-in"
                className="px-4 py-2 text-sm text-[#e8f0ed]/70
                  hover:text-[#e8f0ed] transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium bg-[#a8d5d0]
                  text-[#0f3d3e] rounded-xl hover:bg-[#bce0db]
                  transition-colors"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 text-[#e8f0ed]/70 hover:text-[#e8f0ed]
            transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a2e2f] border-t border-[#e8f0ed]/08
          px-6 py-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm
                transition-colors ${
                  isActive(href)
                    ? 'bg-[#e8f0ed]/10 text-[#e8f0ed]'
                    : 'text-[#e8f0ed]/60 hover:text-[#e8f0ed]'
                }`}
            >
              {label}
            </Link>
          ))}

          <div className="border-t border-[#e8f0ed]/08 pt-3 mt-3">
            {authUser ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm text-[#e8f0ed]/70">
                    {authUser.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {profile?.tier && (
                      <span className={`text-[10px] font-medium px-2 py-0.5
                        rounded-full ${TIER_COLORS[profile.tier]}`}>
                        {profile.tier}
                      </span>
                    )}
                    <span className="text-xs text-[#a8d5d0]">
                      {profile?.points?.toLocaleString() ?? '—'} pts
                    </span>
                  </div>
                </div>
                <Link
                  href={`/user/${authUser.userId}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm
                    text-[#e8f0ed]/60 hover:text-[#e8f0ed] transition-colors"
                >
                  My Account
                </Link>
                <button
                  onClick={() => { handleLogout(); setMobileOpen(false) }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm
                    text-[#e8f0ed]/60 hover:text-[#e8f0ed] transition-colors"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="space-y-2 pt-1">
                <Link
                  href="/log-in"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm
                    text-[#e8f0ed]/60 hover:text-[#e8f0ed] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium
                    bg-[#a8d5d0] text-[#0f3d3e] text-center
                    hover:bg-[#bce0db] transition-colors"
                >
                  Sign up free
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}