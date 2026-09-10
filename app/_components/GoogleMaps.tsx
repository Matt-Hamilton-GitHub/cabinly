'use client';

import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Loading from '../user/loading';

const CabinMap = ({
  locationProp,
}: {
  locationProp: number[];
}) => {
  const googleAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log('coordinates',locationProp)

  if (!googleAPIKey) {
    return (
      <div className="w-full h-40 bg-gray-500 rounded-xl flex items-center justify-center">
        Google Maps API key is missing.
      </div>
    );
  }

  if (!locationProp) {
    return (
      <div className="w-full h-40 bg-gray-500 rounded-xl flex flex-col justify-center items-center">
        <Loading />
        <h3>Loading Google Maps ...</h3>
      </div>
    );
  }

  const lat = Number(locationProp[1]);
  const lng = Number(locationProp[0]);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return (
      <div className="w-full h-40 bg-gray-500 rounded-xl flex items-center justify-center">
        Invalid map coordinates.
      </div>
    );
  }

  const position = { lat, lng };

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <APIProvider apiKey={googleAPIKey}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          gestureHandling="greedy"
          disableDefaultUI
          mapTypeId="roadmap"
        >
          <Marker
            position={position}
            title="Cabin Location"
          />
        </Map>
      </APIProvider>
    </div>
  );
};

export default CabinMap;
