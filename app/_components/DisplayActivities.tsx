
'use client'

import { useState, useEffect } from "react"
import SpinnerBoxJump from "./SpinnerBoxJump"
import { SquarePlus } from "lucide-react"
import Link from "next/link"
import DisplayGroups from "./DisplayGroups"

type ActivityType = {
  _id: string,
  title: string,
  a_desc: string,
  seasons: string[],
  groups: [{
    _id: string,
    title: string,
    capacity: number,
    guides: string[]
  }]
}


const DisplayActivities = ({ cabinID }: { cabinID: string }) => {

  const [activities, setActivities] = useState<ActivityType[]>([])
  const [loadingActivities, setLoadingActivities] = useState(true)

  const fetchAndSetActivities = async (cabinID: string) => {
    setLoadingActivities(true);
    const res = await fetch(`/api/activities/${cabinID}`)
    const data = await res.json()
    // console.log(data)
    setActivities(data.data.linkedActivities || [])
    setLoadingActivities(false);
  }

  useEffect(() => {
    fetchAndSetActivities(cabinID);

  }, [cabinID])
 

  if (loadingActivities) return <div className="w-full h-20 flex "><SpinnerBoxJump /></div>
  if (activities.length == 0) return <div className="w-full justify-center p-2 flex bg-gray-200">No activities added yet</div>

  return (<div className=" flex gap-2 flex-col w-full">
    {activities?.map((a) => {
      return <div className="flex flex-col items-start justify-start gap-2 border-b-1 py-2 w-full" key={a._id}>
        <div className="flex flex-row text-2xl items-center justify-center"><span className="border-2 px-2 rounded-sm font-bold bg-black text-white">{a?.title}</span></div>
        <p className="">{a?.a_desc}</p>
        <DisplayGroups a={a} />
      </div>
    })
    }
  </div>
  )
}

export default DisplayActivities