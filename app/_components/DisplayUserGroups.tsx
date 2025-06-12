
import Link from "next/link"
import { useUserContext } from "../contexts/UserContext"
import { GroupType } from "../groups/[groupID]/page"
import GroupCard from "./GroupCard"
import { BadgePlus } from 'lucide-react';

const DisplayUserGroups = () => {
  const { userGroups } = useUserContext()

  return (
    <div className={`${userGroups.length === 0 ? 'min-h-200' : ""} py-10 relative z-1 flex justify-center items-center flex-col  pt-10`}>
      {userGroups.length === 0 ? <div className="flex justify-center flex-col items-center w-full gap-4" ><h3 className="bg-gray-300 p-2 rounded-2xl">You haven't joined any groups yet</h3></div> :

        <div className="w-full flex justify-center items-start  flex-row flex-wrap gap-4 p-10">
          <div className="flex items-center justify-center w-full pl-5 underline pb-5"> <h3 className="font-bold text-xl">You have joined: </h3></div>
          {userGroups.map((g: GroupType) => {
            return <GroupCard key={g._id} group={g} />
          })}
        </div>
      }
      <Link className='font-bold text-2xl' href='/groups'><BadgePlus size={50} color='green'/></Link>
    </div>
  )
}

export default DisplayUserGroups