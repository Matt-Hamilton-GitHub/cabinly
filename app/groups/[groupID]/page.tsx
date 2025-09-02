'use client'

import Button from "@/app/_components/Button"
import SpinnerBoxJump from "@/app/_components/SpinnerBoxJump"
import { CircleUser } from "lucide-react"

import Image from "next/image"
import { use, useState, useEffect } from "react"

import { useUserContext } from "@/app/contexts/UserContext"
import Link from "next/link"
import { CircleCheckBig } from 'lucide-react';
import { useRouter } from "next/navigation"



export type GroupType = {
  group_desc: string,
  _id: string,
  img_url: string,
  title: string,
  reserved: number,

  capacity: number,
  guides: [{
    name: string,
    guideId: string,
  }]
}

const Group = ({ params }: { params: Promise<{ groupID: string }> }) => {
  const router = useRouter()
  const { groupID } = use(params)

  const [group, setGroup] = useState<GroupType | null>(null)
  const [groupLoading, setGroupLoading] = useState(true)


  const { user, userGroups, getAndSetUserGroups } = useUserContext()

  const fetchAndSetGroupInfo = async (groupID: string) => {
    setGroupLoading(true)
    const res = await fetch(`/api/groups/${groupID}`)
    const data = await res.json()
    console.log(data)
    setGroup(data)
    setGroupLoading(false)


  }

  const handleDisjoinGroup = async () => {
    const res = await fetch(
      `/api/groups?groupID=${groupID}&userID=${user?.userId}`,
      {
        method: 'PUT'
      }
    )

    const data = await res.json()
    await fetchAndSetGroupInfo(groupID)
    await getAndSetUserGroups()
    console.log(data?.message)
  }


  const handleGroupSignUp = async () => {
    if (user?.userId && groupID) {

      const res = await fetch('/api/groups/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: user.userId, groupID }),
      })

      const data = await res.json()
      console.log(data)
      await fetchAndSetGroupInfo(groupID)
      await getAndSetUserGroups()
    }


  }
  const userGroupsIDs = userGroups?.map(g => g._id)

  useEffect(() => {
    fetchAndSetGroupInfo(groupID)
  }, [groupID])

  useEffect(() => {

  }, [userGroups])

  console.log(userGroupsIDs)


  if (groupLoading) return <div className="w-full h-screen flex items-center justify-center"><SpinnerBoxJump /></div>
  if (!group) return <div className="w-full flex items-center justify-center"><h1>Could not find this Group</h1></div>

  const { _id, title, img_url, capacity, guides, reserved } = group
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
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="flex justify-center items-center gap-5">
          Capacity:
          <span className="bg-gray-300 p-2 rounded-3xl font-bold">{`${reserved} / ${capacity}`}</span>
        </div>
        <div><p>{group?.group_desc}</p></div>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <h3>Our Guides for This Group:</h3>
          {guides?.map((g) => {
            return <div key={g.guideId} className="flex flex-row justify-center items-center flex-wrap">
              <span className="text-md font-bold border-2 p-1 px-3" >{g.name}</span>
            </div>
          })}
        </div>
      </div>
      {!user?.userId && (<div className="flex justify-center items-center flex-col gap-4">
        <h5 className="bg-red-500 p-1 border-2 border-black text-white"> Please, Create an Account to Join Groups</h5>
        <Link href='/sign-up' className="underline font-bold">Sign Up</Link>
      </div>)}

      {!userGroupsIDs.includes(_id)
        ? (user && <Button isDisabled={!user || capacity === reserved || userGroupsIDs.includes(_id)} action='Join Group' onClick={handleGroupSignUp} color={'green'} />)
        : <div className="flex gap-10">
          <Button isDisabled={false} color='red' action='Leave Group' onClick={handleDisjoinGroup} />
        </div>
      }
    </div>
  )
}

export default Group