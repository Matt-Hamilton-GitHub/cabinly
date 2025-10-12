import React from 'react'

function ComfortSelector() {

    
  return (
     <div className="text-black flex flex-row gap-4 justify-center text-center items-center ">
      <span className="bg-black p-2 text-white">
        Comfort:</span> 
        <span className="border-2 p-1 hover:bg-red-500">LOW</span> 
        <span className="border-2 p-1 hover:bg-[orange]">MEDIUM</span> 
        <span className="border-2 p-1 hover:bg-green-500">HIGH</span></div>
  )
}

export default ComfortSelector