import CabinCard from "../_components/CabinCard"

 export default function Cabins(){

    const cabinsList: string[] = ['cabin-1','cabin-2','cabin-3']

    return (<div className="flex p-10 items-center">{cabinsList.map((cabin, idx)=>{

        return (<CabinCard key={idx} title={cabin} />)

    })}</div>)
 }