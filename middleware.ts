import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('token')?.value;
//  console.log('Middleware running. Token:', token);


//   if (!token) {
//     return NextResponse.redirect(new URL('/log-in', req.url));
//   }

//   try {
//   const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//   console.log('JWT verified. Payload:', decoded);
//   return NextResponse.next();
// } catch (err) {
//   console.error('JWT verification failed:', err);
//   return NextResponse.redirect(new URL('/log-in', req.url));
// }
// }

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  console.log('Middleware running. Token:', token);

  if (!token) {
    return NextResponse.redirect(new URL('/log-in', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    // console.log('JWT verified:', payload);
    return NextResponse.next();
  } catch (err) {
    console.error('JWT verification failed:', err);
    return NextResponse.redirect(new URL('/log-in', req.url));
  }
}

export const config = {
  matcher: ['/account/:path*'], // Protect these routes
};