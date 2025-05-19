import Link from "next/link"
import * as motion from "motion/react-client"
import DiscoverPlaceCard from "./DiscoverPlaceCard"
import places from '../../public/_assets/places-info/places'

const HomePage = () => {
  return (
    <>

      <div className="mb-50 relative flex z-10 flex-col justify-start items-center">
        <div className=" relative p-10 text-center text-[white] flex flex-col justify-start items-center bg-[black] h-150 rounded-br-[420px] rounded-bl-[420px] w-[100vw]">
          <h1 className="text-5xl space-grotesk font-bold text-outline-shadow ">
            Wake Up Where the World Feels Wide Open.
          </h1>
          <div className="w-[97vw] border-2 flex basis-[500px] rounded-[20px] rounded-b-[400px] relative top-7 bg-cover bg-center bg-no-repeat bg-[url('../../public/_assets/title-2-cut.jpg')]"></div>
        </div>
        <div className="absolute flex -z-10 top-144 justify-center items-center w-[180px] h-[120px] rounded-[300px] text-[white] bg-[black] rounded-t-2xl  hover:h-[160px] hover:text-[black] transition-all duration-450 ease-in flex-col">
          <button className="relative w-[200px] font-[500]  text-[white] p-3 rounded-[300px] rounded-t-2xl hover:cursor-pointer text-wrap"><Link href='/cabins'>Your Journey Begins Here</Link></button>
        </div>
      </div>

      <div className="w-[100vw]
                      flex justify-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="my-20 overflow-clip">
          <h1 className="font-bold border-3 px-10 rounded-2xl">Top Places to Explore This Year</h1>
        </motion.div>

        <div className="w-[100vw] 
                        flex flex-row justify-around items-start flex-wrap gap-20">
                          {places.slice(0,3).map((place) =>{
                            return <DiscoverPlaceCard place={place} key={crypto.randomUUID()} />
                          })}
        </div>
      </div>


    </>
  )
}

export default HomePage