import { NextResponse } from 'next/server';
import Reservation from '@/app/lib/mdb-models/Reservation';
import { connectMDB } from '@/app/lib/mongodb';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const cabinId = searchParams.get('cabinId');

    if (!cabinId) {
      return NextResponse.json({ error: 'cabinId is missing' }, { status: 400 });
    }

    console.log(cabinId)
    await connectMDB();

    const cabinData = await Reservation.find({ cabinID: cabinId });

    const cabinUnavailable = cabinData.map(({ range }) => ({
      from: range.from,
      to: range.to,
    }));

    return NextResponse.json({ cabinUnavailable }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}