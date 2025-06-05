'use client'

import Button from "@/app/_components/Button"
import SpinnerBoxJump from "@/app/_components/SpinnerBoxJump"
import { CircleUser } from "lucide-react"
import { set } from "mongoose"
import Image from "next/image"
import { use, useState, useEffect } from "react"


type GroupType = {
_id: string,
img_url: string,
title: string,
reserved: number,
capacity: number,
guides: [{name: string,
        guideId: string,
}]
}

const Group = ({params}: {params : Promise<{groupID: string}>}) => {
  const {groupID} = use(params)
  const [group, setGroup] = useState<GroupType | null>(null)
  const [groupLoading, setGroupLoading] = useState(true)

  const fetchAndSetGroupInfo = async (groupID: string) => {
    setGroupLoading(true)
    const res = await fetch(`/api/groups/${groupID}`)
    const data = await res.json()
    console.log(data)
    setGroup(data)
    setGroupLoading(false)
    
  }

  useEffect(()=>{
    fetchAndSetGroupInfo(groupID)
  }, [groupID])

  if (groupLoading) return <div key={groupID} className="w-full h-screen flex items-center justify-center"><SpinnerBoxJump /></div>
  if (!group) return <div key={groupID} className="w-full flex items-center justify-center"><h1>Could not find this Group</h1></div>

  const {title, img_url, capacity, guides, reserved } = group
  return (
    <div key={groupID} className="relative w-full flex items-center justify-center flex-col gap-20">
       <div className="relative w-full h-[300px] border-y-3">
              <Image
                src={img_url}
                alt="beautiful cabin"
                fill
                className="object-cover "
                quality={50}
              />
            </div>
        <div className='absolute top-[300px] mb-6 flex w-full justify-center flex-row items-center '>
          <h1 className="p-1 px-3 rounded-b-2xl text-center text-[green] text-3xl font-bold bg-[black] shadow-md shadow-[gray] hover:bg-[green] hover:text-[black] transition-all duration-500">
            {title}</h1>
        </div>
        <div className="flex justify-start items-start flex-col gap-2">
          <div className="flex justify-center items-center gap-5">
            Capacity: 
            <span className="bg-gray-300 p-2 rounded-3xl font-bold">{`${reserved} / ${capacity}`}</span>
          </div>
          <div className="flex justify-center items-center gap-5 flex-wrap">
          <h3>Our Guides for This Group:</h3>
          {guides?.map((g) => {
            return <div key={g.guideId} className="flex flex-row justify-center items-center flex-wrap">
            <span className="text-md font-bold border-2 p-1 px-3" >{g.name}</span>
            </div>
          })}
          </div>
        </div>
        { capacity === reserved ? <span className="bg-gray-400 p-2 border-2 font-bold">The Group is Full</span> :
          <Button action='Sign Up' onClick={() => {}} color={'green'}/>
        }
    </div>
  )
}

export default Group