
import { useUserContext } from "../contexts/UserContext"
const DisplayUserGroups = () => {
const {userGroups} = useUserContext()

  return (
    <div className="flex justify-center items-center w-full flex-col  pt-10 ">
        <div className="flex items-start justify-start w-full pl-5 underline pb-5"> <h3 className="font-bold text-xl">You have joined: </h3></div>
       <div className="w-full flex justify-start items-start  flex-row flex-wrap gap-4 p-10">
        {userGroups.map((g) => {
            return <span key={g._id} className="bg-gray-300 p-2 rounded-2xl text-center border-2 border-gray-400  hover:scale-110 transition-all duration-500 hover:cursor-pointer">{g.title}</span>
        })}
        </div>
    </div>
  )
}

export default DisplayUserGroups