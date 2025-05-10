'use client'

import { useEffect } from "react"
import LogIn from "../../_components/LogIn"
import { GET } from "@/app/api/cabins/route"


const page = () => {
  return (
    <div className="flex w-full justify-center h-lvh items-center">
      <LogIn />
    </div>
  )
}

export default page