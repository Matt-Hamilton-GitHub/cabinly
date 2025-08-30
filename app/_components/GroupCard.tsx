import Image from "next/image"
import { GroupType } from "../groups/[groupID]/page"
import Link from "next/link"

const GroupCard = ({group} : {group: GroupType}) => {

  return (
    <div className="relative z-1 flex items-center justify-center flex-col gap-3 border-1 pb-2">
        <div className="z-1 flex relative max-w-100 min-w-70 h-30">
            <Image 
            fill
            src={group?.img_url}
            alt={`image of ${group.title}`}
            className="relative z-1 object-cover"/>
        </div>
        <h3>{group?.title}</h3>
        <p>{group?.group_desc}</p>
        <Link className="bg-gray-300 p-1 px-4 rounded-sm" href={`/groups/${group._id}`}>View</Link>
    </div>
  )
}

export default GroupCard