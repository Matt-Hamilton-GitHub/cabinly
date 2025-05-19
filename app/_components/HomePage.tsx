import Link from "next/link"

const HomePage = () => {
  return (
    <div className="relative flex z-10 flex-col justify-start items-center">
    <div className=" relative p-10 text-center text-[white] flex flex-col justify-start items-center bg-[black] h-150 rounded-br-[400px] rounded-bl-[400px] w-[100vw]">
      <h1 className="text-5xl space-grotesk font-bold text-outline-shadow ">
        Wake Up Where the World Feels Wide Open.
      </h1>
      <div className="w-[97vw] border-2 flex basis-[500px] rounded-[20px] rounded-b-[400px] relative top-7 bg-cover bg-center bg-no-repeat bg-[url('../../public/_assets/title-2-cut.jpg')]"></div>
    </div>
      <div className="relative flex -z-10 bottom-5 justify-center items-center w-[180px] h-[120px] rounded-[300px] text-[white] bg-[black] rounded-t-2xl  hover:h-[160px] hover:text-[black] transition-all duration-450 ease-in flex-col">
        <button className="relative w-[200px]  text-[white] p-3  rounded-[300px] rounded-t-2xl hover:cursor-pointer text-wrap"><Link href='/cabins'>Your Journey Begins Here</Link></button>
      </div>
    </div> 
    
  )
}

export default HomePage