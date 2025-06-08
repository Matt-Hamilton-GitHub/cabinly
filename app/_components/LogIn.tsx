'use client'

import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CircleUserRound } from 'lucide-react';

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

        // console.log(data)
        const user = {
          userId: data.user._id,
          name: data.user.name,
          email: data.user.email,
        }

        setUser(user)
        router.push('/account')
      } else {
        setError(data.message)
      }

    } catch (err) {

      setLoading(false)
    }

  }

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto max-auto mt-10 p-6 border-2 rounded-2xl shadow-2xl shadow-gray-400">
      <div className='w-30 relative flex border-2 items-center justify-center bottom-10 py-1 rounded-2xl shadow-2xl shadow-gray-400 bg-white'>
        <CircleUserRound size={35}/>
      </div>
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
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
          className="w-full text-white bg-[black] py-2 rounded hover:bg-black cursor-pointer transition-all delay-75 ease-in-out"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

      </form>
      <div className='flex items-center justify-center flex-col m-2'>Don't have an account? <Link className='p-3 underline' href='/sign-up'><b>Sign Up here</b></Link></div>
    </div>
  )
}
