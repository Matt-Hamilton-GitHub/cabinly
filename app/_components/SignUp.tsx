'use client'

import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import { useRouter } from 'next/navigation'
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function SignUp() {
  const { setUser } = useUserContext()
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null >(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/account/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, password })
      })

      const data = await res.json()
      if (res.ok) {
        console.log('Signed Up Successfuly:', data)
      } else {
        console.error('Error signing-up in:', data.message)
      }

      setLoading(false)
      if (res.ok) {

        const user = {
        userId: data._id,
        name: data.name,
        email: data.email,
        }

        setUser(user)
        router.push('/account')
       
      } else {
        setError(data.message)
      }

    } catch (err) {
      setError(`${err}`)
      setLoading(false)
    }

  }


  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto max-auto mt-10 p-6 border-2 rounded-2xl shadow-2xl shadow-gray-400">
      <div className='w-30 relative flex border-2 items-center justify-center bottom-10 py-1 rounded-2xl shadow-2xl shadow-gray-400 bg-white'>
              <UserPlus size={35}/>
            </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full p-2 border rounded"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white bg-[black] py-2 rounded hover:bg-black cursor-pointer transition-all delay-75 ease-in-out"
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex items-center justify-center flex-col m-2'>Don't have an account? <Link className='p-3 underline' href='/log-in'><b>Log In here</b></Link></div>
    </div>
  )
}
