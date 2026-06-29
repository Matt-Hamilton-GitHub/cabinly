import { NextResponse } from "next/server";
import { connectMDB } from "@/app/lib/mongodb";
import Booking from "@/app/lib/mdb-models/Booking";
import User from "@/app/lib/mdb-models/User";
import Place from "@/app/lib/mdb-models/Place";
import Cabin from "@/app/lib/mdb-models/Cabin";
import Activity from "@/app/lib/mdb-models/Activity";
import { getTier } from "@/app/lib/points";

import jwt from 'jsonwebtoken';
import { getNights } from "@/app/_utils/utils";
import { sendEmail } from "@/app/lib/email";
// ─── GET all bookings for a user ─────────────────────────────────
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userID = searchParams.get("userID");

  if (!userID) {
    return NextResponse.json(
      { error: "Missing required query param: userID" },
      { status: 400 },
    );
  }

  try {
    await connectMDB();

    const bookings = await Booking.find({ userRef: userID })
      .populate({ path: "placeRef", model: Place })
      .populate({ path: "cabinRef", model: Cabin })
      .populate({ path: "activities", model: Activity })
      .sort({ createdAt: -1 });

    return NextResponse.json({ data: bookings }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error occurred" },
      { status: 500 },
    );
  }
}

// ─── POST create a new booking ────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const {
      userRef,
      placeRef,
      cabinRef,
      activities,
      from,
      to,
      guests,
      totalPaid,
    } = body;

    if (
      !userRef ||
      !placeRef ||
      !cabinRef ||
      !from ||
      !to ||
      !guests ||
      !totalPaid
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await connectMDB();

    // ── 1. Check cabin availability ───────────────────────────
    const updatedCabin = await Cabin.findOneAndUpdate(
      { _id: cabinRef, spotsLeft: { $gt: 0 } },
      { $inc: { spotsLeft: -1 } },
      { new: true },
    );

    if (!updatedCabin) {
      return NextResponse.json(
        { error: "Cabin is fully booked" },
        { status: 409 },
      );
    }

    // ── 2. Check activity availability ────────────────────────
    if (activities?.length > 0) {
      const updatedActivities = await Promise.all(
        activities.map((activityId: string) =>
          Activity.findOneAndUpdate(
            { _id: activityId, spotsLeft: { $gt: 0 } },
            { $inc: { spotsLeft: -1 } },
            { new: true },
          ),
        ),
      );

      const fullyBooked = updatedActivities.some((r) => r === null);
      if (fullyBooked) {
        // rollback cabin
        await Cabin.findByIdAndUpdate(cabinRef, { $inc: { spotsLeft: 1 } });
        return NextResponse.json(
          { error: "One or more activities are fully booked" },
          { status: 409 },
        );
      }
    }

    // ── 3. Calculate points ───────────────────────────────────
    const nights = getNights(from, to);
    const cabinPoints = nights * 50;
    const activityPoints = (activities?.length ?? 0) * 75;
    const bookingPoints = 100;
    const bonusPoints = (activities?.length ?? 0) >= 3 ? 250 : 0;
    const pointsEarned =
      cabinPoints + activityPoints + bookingPoints + bonusPoints;

    // ── 4. Create booking ─────────────────────────────────────
    const newBooking = await Booking.create({
      userRef,
      placeRef,
      cabinRef,
      activities: activities ?? [],
      from,
      to,
      nights,
      guests,
      totalPaid,
      pointsEarned,
      status: "pending",
    });
    console.log(newBooking);


    // ── 5. Add booking to user
    await User.findByIdAndUpdate(userRef, {
      $push :{bookings: newBooking._id}
    })


    // ── 6. Generate confirmation token + send email ───────────────
    const confirmToken = jwt.sign(
      { bookingId: newBooking._id.toString() },
      process.env.JWT_SECRET!,
      { expiresIn: "24h" },
    );

    const confirmUrl = `${process.env.NEXT_PUBLIC_URL}/api/bookings/confirm?token=${confirmToken}`;

    const user = await User.findById(userRef).select("email name");

    await sendEmail({
      to: user.email,
      subject: "Confirm your Cabinly booking",
      body: `Hi ${user.name},\n\n Please, click the link below to confirm your booking. This link expires in 24 hours.\n\n${confirmUrl}\n\n`,
    });

    // ── 7. Return response ────────────────────────────────────────
    return NextResponse.json(
      {
        data: newBooking,
        pointsEarned,
        message: "Booking created — check your email to confirm",
      },
      { status: 201 },
    );

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error occurred" },
      { status: 500 },
    );
  }
}
