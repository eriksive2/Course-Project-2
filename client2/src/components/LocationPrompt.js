// LocationPrompt.js
import { useEffect } from 'react';

const LocationPrompt = () => {

  useEffect(() => {
    // Prompt the user for location access when the component mounts
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // User allowed the access
          console.log('Latitude: ' + position.coords.latitude);
          console.log('Longitude: ' + position.coords.longitude);
        },
        (error) => {
          // User declined the access or an error occurred
          console.error('Error getting the geolocation: ', error);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // This component doesn't render anything, so it returns null
  return null;
};

export default LocationPrompt;
