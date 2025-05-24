'use client'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const LocationInput = () => {
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
        })
    }

  return (
    <div className="relative ">
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter a location"
        className="p-1 px-2 text-center border-white shadow-inner shadow-[#686868] bg-white rounded-3xl  hover:placeholder-[black]"
      />
      {status === 'OK' && (
        <ul className="absolute z-10 text-start w-full border-0 mt-1 max-h-60 overflow-auto shadow-lg bg-black text-white hover:shadow-inner hover:shadow-[black]">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description)}
              className="p-2 hover:bg-gray-100 hover:text-black cursor-pointer"
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