import Image from "next/image"



const PlaceCard = ({place}) => {
  return (
    <div className="flex flex-col scroll-auto">
    <div className="relative h-50 border-2 w-50">
        <Image 
        src={place.images_url[0]}
        fill
        alt={`image of ${place.name}`}
        className="object-cover"
        />
    </div>
    <div>
        <h2 className="text-black">{place.name}</h2>
        {/* <p>{place.description}</p> */}
    </div>

        </div>
  )
}

export default PlaceCard