import React from 'react'

function ActivitySlectorCard({title, icon}) {
  return (
    <span className=" flex flex-row gap-2 items-center border-2 p-1 bg-black text-white rounded-md">{icon}  {title}</span>
  )
}

export default ActivitySlectorCard