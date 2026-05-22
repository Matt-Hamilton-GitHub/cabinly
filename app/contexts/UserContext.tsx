'use client'

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react'

// ─── Types ───────────────────────────────────────────────────────

import { UserType,AuthContextType} from '../lib/types'

// ─── Context ─────────────────────────────────────────────────────

const UserContext = createContext<AuthContextType | null>(null)

// ─── Provider ────────────────────────────────────────────────────

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser]             = useState<UserType | null>(null)
  const [isValidating, setIsValidating] = useState(true)

  const validateAndSetUser = async () => {
    try {
      setIsValidating(true)
      const res  = await fetch('/api/validate-token')
      const data = await res.json()
      if (data.safeUser) setUser(data.safeUser)
      else setUser(null)
    } catch {
      setUser(null)
    } finally {
      setIsValidating(false)
    }
  }

  // fetch full user profile (for account page)
  const refreshUser = async () => {
    if (!user?.userId) return
    try {
      const res  = await fetch(`/api/account/${user.userId}`)
      const data = await res.json()
      if (data.user) {
        setUser((prev) => prev ? { ...prev, ...data.user } : prev)
      }
    } catch {
      console.error('Failed to refresh user')
    }
  }

  useEffect(() => {
    validateAndSetUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, isValidating, refreshUser }}>
      {children}
    </UserContext.Provider>
  )
}

// ─── Hook ────────────────────────────────────────────────────────

export const useUserContext = () => {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUserContext must be used inside UserProvider')
  return ctx
}