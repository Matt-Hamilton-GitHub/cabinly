import Image from "next/image"
import { GroupType } from "../groups/[groupID]/page"
import Link from "next/link"

const GroupCard = ({group} : {group: GroupType}) => {
  return (
    <div className="flex items-center justify-center flex-col">
        <div className="flex relative w-100 h-30">
            <Image 
            fill
            src={group.img_url}
            alt={`image of ${group.title}`}
            className="object-cover"/>
        </div>
        <h3>{group.title}</h3>
        <Link className="bg-gray-300 p-1 px-4 rounded-sm" href={`/groups/${group._id}`}>View</Link>

    </div>
  )
}

export default GroupCard