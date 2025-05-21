
import allTrips from '../../../public/_assets/places-info/places'

export const getTripDetailsById = (tripID: number) =>{

    return allTrips.find(t => t.id === tripID)
}