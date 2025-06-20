import { SquarePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DisplayGroups = ({a}) => {

    if (a.groups.length === 0) return <div className='bg-gray-300 p-1 px-2 '> sign in upon arrival</div>
  return (
    <div className="flex gap-2 flex-col">
          <h2 className="font-bold">Groups available for sign up</h2>
          <div className="flex gap-2 flex-row flex-wrap">
            {a.groups?.map((g) => {
              const groupID = g._id
              return <div className="bg-gray-300 p-1 flex flex-row gap-2" key={groupID}> 
              <Link href={`/groups/${groupID}`}>
              <SquarePlus className="hover: cursor-pointer" color={'black'} size={25} />
              </Link>
                <h3>{g.title}</h3>
              </div>
            })}
          </div>
        </div>
  )
}

export default DisplayGroups