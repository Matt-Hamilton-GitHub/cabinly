import Image from "next/image"
import Link from "next/link";
import { PlaceType } from "../places/page";


const PlaceCard = ({place} : {place: PlaceType}) => {

    const {seasons} = place;
    console.log(place._id)
    const placeID = place?._id
   
  return (
    <div className="flex flex-col gap-5 border-b-1 pb-5">
    <div className="relative border-2 h-50 flex w-full">
        <Image 
        src={place.images_url[0]}
        fill
        alt={`image of ${place.name}`}
        className="object-cover w-100"
        />
    </div>
    <div className="flex gap-2 flex-col">
        <h2 className="text-black font-bold text-2xl">{place.name}</h2>
        <p>{place.description}</p>
    </div>
   
       <Link href={`/places/${placeID}`} className=" p-2 bg-gray-300 shadow shadow-gray-400 border-1 rounded-sm w-30" >Learn More</Link>

        </div>
  )
}

export default PlaceCard