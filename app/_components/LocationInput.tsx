'use client'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const LocationInput = ({location, setLocation}) => {
    const { 
        ready, 
        value, 
        suggestions: {status, data}, 
        setValue, 
        clearSuggestions} = usePlacesAutocomplete({debounce: 300,})

    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSelect = (description: string) => {
        setValue(description, false)
        clearSuggestions()

        getGeocode({address: description}).then((results) => {
            const {lat, lng} = getLatLng(results[0])
            console.log('Coordinates:', {lat, lng})
            
            setLocation({
              address: description,
              coordinates: {lat,lng},
               
            })
        })

    }

  return (
    <div className="relative flex flex-col items-center overflow-x-clip ">
      <label 
      htmlFor='location-input' className=' bg-black w-full  text-center text-white block text-sm font-medium rounded-t-2xl'
      >Where</label>
      <input
        id='location-input'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter a location"
        className="p-1 border-2 border-black px-2 h-12 shadow-inner shadow-[#686868] bg-white rounded-b-3xl  hover:placeholder-[black]"
      />
      {status === 'OK' && (
        
        <ul className="absolute z-50 top-[79px] text-start w-full border-2 border-black mt-1 max-h-60 overflow-auto shadow-lg bg-black text-white hover:shadow-inner hover:shadow-[black]">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description)}
              className="p-2 hover:bg-gray-100 hover:text-black text-sm cursor-pointer"
            >
              {description}
            </li>
          ))}
        </ul>
        
      )}
      
    </div>
  );
}

export default LocationInput