import Link from "next/link";

export default function About() {

    return (<div className="flex justify-center items-center flex-col gap-10 m-10">

        <h1 className="font-bold">Welcome to About Page</h1>
        <p>
            At Cabinly, we believe that the best getaways happen in the most breathtaking places. Our platform makes it easy for travelers to discover and book stunning cabins nestled in nature—whether it's a cozy retreat in the mountains, a lakeside escape, or a secluded forest hideaway.
            Designed for adventurers, romantics, and those seeking a peaceful reset, Cabinly connects you with unique stays that blend comfort with the beauty of the great outdoors. Every cabin in our collection is thoughtfully selected to provide an unforgettable experience, whether you're looking to unwind under the stars, wake up to panoramic views, or enjoy the simple luxury of a quiet retreat.
            Escape the ordinary. Find your perfect cabin with Cabinly. 🌲✨
        </p>
        <Link className="bg-black text-white px-10 py-3 rounded-lg font-bold" href='/cabins'>Start</Link>
    </div>
    )
}