// components/MyMap.js
'use client';

import React from 'react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map, Marker } from '@vis.gl/react-google-maps';


const containerStyle = {
  width: '100%',
  height: 'auto',
};




const CabinMap = ({locationProp} : {locationProp : {lat: number, lng: number}}) => {


  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY , 
  // });

  const googleAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 
  

  if (!locationProp) return <div className="w-full bg-gray-100" />
  return (
    <APIProvider apiKey={googleAPIKey}>
    <Map
      style={containerStyle}
      defaultCenter={locationProp}
      defaultZoom={15}
      gestureHandling={'greedy'}
      disableDefaultUI
      mapTypeId="roadmap"
    />
     <Marker
  position={locationProp}
  title="Cabin Location"
  draggable={false}
  // icon={} // custom icon (optional)
/>
  </APIProvider>
  );
};

export default CabinMap;
