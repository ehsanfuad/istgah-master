import React, { useEffect, useState } from "react";

const useGeolocation = () => {
  const [latitude, setLatitude] = useState(35.699231);
  const [longitude, setLongitude] = useState(51.337508);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  return { latitude, longitude };
};

export default useGeolocation;
