import React from 'react'
import { Binoculars, Kayak, Bike, Sailboat  } from 'lucide-react';
import ActivitySlectorCard from './ActivitySlectorCard';


function ActivitiesSelector() {

    type ActivitySekectorProps = {
        title: string,
        icon: React.ReactNode
    }

    const activities = ['Hiking', 'Skiing', 'Abserving', 'Snowboarding', 'Snorkling']
    return (
        <div className='flex flex-row flex-wrap justify-center gap-2 text-sm shadow-inner shadow-black  border-1 border-gray-300 p-2 '>
          {activities.map((a) => {
            
            return <ActivitySlectorCard  title={a} icon={<Binoculars />}/>
          })}
            <span className=" flex flex-row gap-2 items-center border-2 p-1 bg-black text-white rounded-md"> <Binoculars /> Hiking</span>
        </div>
    )
}

export default ActivitiesSelector