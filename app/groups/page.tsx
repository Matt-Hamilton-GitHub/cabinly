'use client'
import { useEffect, useState } from "react"

import { GroupType } from "./[groupID]/page"
import SpinnerBoxJump from "../_components/SpinnerBoxJump"
import GroupCard from "../_components/GroupCard"



const Groups = () => {
  const [allGroups, setAllGroups] = useState<GroupType[] | []>([])
  const [isLoading, setIsLoading] = useState(false)


  const fetchAndSetGroups = async() => {
    setIsLoading(true)
    const res = await fetch('/api/groups')
    const data = await res.json()
    console.log(data)
    setAllGroups(data?.groups)
    setIsLoading(false)
  }

  useEffect(()=> {
    fetchAndSetGroups()
  },[])

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full flex  items-center justify-center flex-col gap-2">
        <h1 className="p-10 text-center font-bold text-3xl">Groups</h1>
        {isLoading ? <div className="w-full h-200 flex items-center justify-center"><SpinnerBoxJump/></div> :
        <div className="w-full flex items-center justify-center flex-wrap flex-row gap-5">{allGroups?.map((g) => {

          return <GroupCard group={g}/>
        })}</div>
        }
        </div>
    </div>
  )
}

export default Groups