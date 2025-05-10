'use client'

import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { setUser } = useUserContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/account/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      if (res.ok) {
        console.log('Login successful:', data)
      } else {
        console.error('Error logging in:', data.message)
      }

      setLoading(false)
      if (res.ok) {
        
        setUser(data.user)
        router.push('/account')
      } else {
        setError(data.message)
      }

    } catch (err) {
     
      setLoading(false)
    }

  }

  return (
    <div className="max-w-md mx-auto max-auto mt-10 p-6 border rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

      </form>
      <Link className='p-3' href='/account/signup'>Don't have an account? Sign Up here</Link>
    </div>
  )
}
