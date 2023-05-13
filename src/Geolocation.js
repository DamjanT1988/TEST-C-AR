import React from 'react';
import { useGeolocated } from 'react-geolocated';

const Geolocation = () => {
  const { coords } = useGeolocated();

  if (coords) {
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
  }

  return <div></div>;
};

export default Geolocation;
