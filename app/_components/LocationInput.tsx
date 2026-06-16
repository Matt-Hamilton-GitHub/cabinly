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
        if (e.target.value === undefined) {
          setLocation(undefined)
        }
         else {
           setValue(e.target.value);
           setLocation(e.target.value)

         }
        console.log(location)
    }

    const handleSelect = (description: string) => {

        if (location === undefined) {
          setValue('', false)
          clearSuggestions()
        }else {

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
        
        
      
    }

  return (
    
    <div className="search-filter">
      <label 
      htmlFor='location-input' className='block text-sm text-gray-400 mb-2'
      >Location</label>
      <input
        id='location-input'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter a location"
        className="w-full px-4 py-3 rounded-lg"
      />
      
      {status === 'OK' && (
        
        <ul className="">
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