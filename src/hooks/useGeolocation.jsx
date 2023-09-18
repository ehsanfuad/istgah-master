import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useGeolocation = () => {
  // const addresses = useSelector((state) => state.address.addresses);
  // const addressId = useSelector((state) => state.address.id);
  // let lat = null;
  // let long = null;
  // if (addressId) {
  //   const address = addresses.find((item) => item.id == addressId);
  //   lat = parseFloat(address.latitude);
  //   long = parseFloat(address.longitude);
  // }

  // const [latitude, setLatitude] = useState(lat ? lat : 35.700008);
  // const [longitude, setLongitude] = useState(long ? long : 51.334303);
  const [latitude, setLatitude] = useState(35.700008);
  const [longitude, setLongitude] = useState(51.334303);

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
