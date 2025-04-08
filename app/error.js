'use client'

export default function Error({error, reset}){

    return(<section className="h-lvh w-lvw flex justify-center items-center flex-col gap-5">
        <h1>{error?.message || "Something went wrong!"}</h1>
        <button className="bg-amber-800 text-white px-10 py-3 rounded-lg font-bold" onClick={reset}>Back</button>
    </section>)
}