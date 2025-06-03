import { DiamondPlus, SquareUser } from "lucide-react"
import Button from "./Button"
import { handleGroupSignUp } from "@/app/_utils/utils";
import { getTripDetailsById } from "../lib/handlers/tripsHandler";

const DisplaySeasonalActivitites = ({tripDetails}) => {
    
  return (
    <>
    {tripDetails?.seasons?.map((trip) => {
                        return <div className="border-t-1 border-[gray] " key={crypto.randomUUID()}>
                            <div className="m-3 flex items-center justify-center flex-col">
                                <div className=" text-2xl p-2 m-2 rounded-3xl"> <span className="font-bold bg-green-700 p-2">{trip.season}</span></div>
                                <div className="flex flex-row flex-wrap gap-5">
                                    {trip.activities.map((activity) => {
                                        return <div key={crypto.randomUUID()} className="flex w-full flex-column items-center justify-center gap-1 flex-col max-md:items-center ">
                                            <div className="relative flex flex-col items-start justify-center gap-1 rounded-2xl bg-[black] text-[white] ">
                                                <h4 className="bg-[orange]  w-[100%] text-center font-bold text-[black] px-2 shadow-inner shadow-[black] text-2xl">{activity.type}</h4>
                                                <div className="flex flex-wrap flex-row justify-center items-center gap-2 px-2 max-md:flex-col max-md:items-start max-md:justify-start max-md:p-2">
                                                    {activity.sub_activity.map((sub) => {
                                                        return <div key={crypto.randomUUID()} className="flex flex-row items-center justify-center gap-2 p-2 hover:bg-[white] rounded-t-2xl hover:text-[black] max-md:rounded-2xl ">
                                                            <div className="flex flex-row items-center justify-center gap-2 px-2 " onClick={() => { console.log(sub.id) }}><DiamondPlus size={15} />{sub.title}</div>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            {/* guides */}
                            <div className="flex p-2 flex-col gap-3">
                                <h1 className="border-b-2 w-55">Our Guides </h1>
                                {tripDetails?.guides.map((p) => {
                                    return <div key={crypto.randomUUID()} >
                                        <div className="relative flex flex-row p-2 gap-2 border-2  justify-between">
                                            <span className=" flex flex-row p-2 gap-2 border-2 ">
                                                <SquareUser/>
                                                <h3>{p}</h3>
                                            </span>
                                            <div className="flex flex-row gap-2">
                                                <Button color='orange' action='Join Group' onClick={() => { handleGroupSignUp('4444', '66767') }} />
                                                <Button color='green' action='Request a Guide' onClick={() => { handleGroupSignUp('4444', '66767') }} />
                                            </div>
                                        </div>
                                    </div>
                                })
                                }
                            </div>
    
                        </div>
    
                    }
                    )
                    }
    </>
  )
}

export default DisplaySeasonalActivitites