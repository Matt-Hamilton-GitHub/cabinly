import { NextResponse } from "next/server"
import { connectMDB } from "../mongodb"
import bcrypt from 'bcryptjs'
import User from "../mdb-models/User"
import jwt from 'jsonwebtoken';


type userLogInReq = {
    email: string,
    password: string

}

type userSignUpReq = {

    email: string,
    password: string,
    name: string,
}

export async function userLogIn(req: Request) {
    console.log('user sign in called')
    const { email, password }: userLogInReq = await req.json()

    if (!email || !password) {
        return NextResponse.json({ message: 'Email and password are required' }, { status: 400 })
    }

    try {

        await connectMDB();
        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 })
        }

        const isMatch = await bcrypt.compare(password, user.hash)

        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
        }

        const res = NextResponse.json({ user })
        //set a token
        const token = jwt.sign({ userId: user._id.toString()}, process.env.JWT_SECRET!, { expiresIn: '7d' });
        
        //set cookie
        res.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge:60 * 60 * 24 * 3,
        })

        return res


    } catch (err) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

}

export function destoryToken() {
    
}

export async function userSignUp(req: Request) {
    console.log('user SIGN UP called')
    const { name, email, password }: userSignUpReq = await req.json();

    try {

        if (!name || !email || !password) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        connectMDB();

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            hash
        });

        await newUser.save()

    const safeUser = {
      userId: newUser._id,
      name: newUser.name,
      email: newUser.email,
      avatarUrl: newUser.avatarUrl,
      points: newUser.points,
      tier: newUser.tier,
    };

    return NextResponse.json({ user: safeUser });


    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        } else {
            return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
        }

    }

}