import React from 'react'
import { Binoculars } from 'lucide-react';
import ActivitySlectorCard from './ActivitySlectorCard';


function ActivitiesSelector() {

 

    const activities = ['Hiking', 'Skiing', 'Abserving', 'Snowboarding', 'Snorkling']
    return (
        <div className='flex flex-row flex-wrap justify-center gap-2 text-sm shadow-inner shadow-black  border-1 border-gray-300 p-2 '>
          {activities.map((a,idx) => {
            
            return <ActivitySlectorCard key={idx}  title={a} icon={<Binoculars />}/>
          })}
            <span className=" flex flex-row gap-2 items-center border-2 p-1 bg-black text-white rounded-md"> <Binoculars /> Hiking</span>
        </div>
    )
}

export default ActivitiesSelector