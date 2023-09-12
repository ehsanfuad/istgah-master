import React from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

function MyMap({ location, setLocation, latitude, longitude }) {
  const customIcon = new Icon({
    iconUrl: require("./icon/placeholder.png"),
    iconSize: [20, 20], // size of the icon
  });
  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };
  const LocationMarker = ({ setLocation }) => {
    const map = useMapEvents({
      click(e) {
        setLocation(e.latlng); // Update the location state with the clicked coordinates
      },
    });

    return null;
  };
  return (
    <MapContainer
      center={location ? [location.lat, location.lng] : [latitude, longitude]}
      zoom={20}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        <LocationMarker setLocation={setLocation} />
        {location && <Marker position={location} icon={customIcon}></Marker>}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default MyMap;
