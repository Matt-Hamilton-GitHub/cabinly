import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/app/lib/mdb-models/User';

export async function GET(){
const cookieStore = await cookies();
const token = cookieStore.get('token')?.value


 if (!token) return NextResponse.json({ user: null });

 try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!)
    const userId = decoded.userId

    console.log('succesfuly validated ')
    const user = await User.findOne({_id: userId});

    const safeUser = {
      userId: user._id,
      name: user.name,
      email: user.email
    };

    return NextResponse.json({ safeUser }, {status: 200});
  } catch (err) {
    console.log('faild to validate')
    return NextResponse.json({ user: null });
}
}