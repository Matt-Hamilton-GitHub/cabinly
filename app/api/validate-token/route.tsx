import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { userId: string }

    return NextResponse.json(
      { user: { userId: decoded.userId } },
      { status: 200 }
    )

  } catch {
    // token expired or tampered — clear the cookie
    const res = NextResponse.json({ user: null }, { status: 401 })
    res.cookies.set('token', '', { httpOnly: true, maxAge: 0, path: '/' })
    return res
  }
}