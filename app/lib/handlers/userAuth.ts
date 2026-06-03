import { NextResponse } from "next/server"
import { connectMDB } from "../mongodb"
import bcrypt from 'bcryptjs'
import User from "../mdb-models/User"
import jwt from 'jsonwebtoken';

type userLogInReq  = { email: string; password: string }
type userSignUpReq = { email: string; password: string; name: string }

const TOKEN_MAX_AGE = 60 * 60 * 24 * 7 // 7 days — single source of truth

function createAuthToken(userId: string) {
  return jwt.sign({ userId,  }, process.env.JWT_SECRET!, { expiresIn: '7d' })
}

function setAuthCookie(res: NextResponse, token: string) {
  res.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: TOKEN_MAX_AGE, 
  })
}

function safeUser(user: any) { 
  return {
    userId:    user._id.toString(),
    name:      user.name,
    email:     user.email,
  }
}

export async function userLogIn(req: Request) {
  console.log('@ user log-in')
  const { email, password }: userLogInReq = await req.json()

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 })
  }

  try {
    await connectMDB()
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const isMatch = await bcrypt.compare(password, user.hash)
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    const res = NextResponse.json({ user: safeUser(user) }) // fix 1
    console.log("@ userLogIn", user, safeUser(user))
    setAuthCookie(res, createAuthToken(user._id.toString()))
    return res

  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 }) // fix 5
  }
}

export function destroyToken() { // fix 3: implemented + spelling fixed
  const res = NextResponse.json({ message: 'Logged out' })
  res.cookies.set('token', '', { httpOnly: true, maxAge: 0, path: '/' })
  return res
}

export async function userSignUp(req: Request) {
  const { name, email, password }: userSignUpReq = await req.json()

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }

  try {
    await connectMDB() 

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 })
    }

    const hash    = await bcrypt.hash(password, 10)
    const newUser = await new User({ name, email, hash }).save()

    const res = NextResponse.json({ user: safeUser(newUser) })
    setAuthCookie(res, createAuthToken(newUser._id.toString())) // fix 6: log in on signup
    return res

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 })
  }
}