// src/MapLocation.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for the default marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapLocation = () => {
  const [position, setPosition] = useState(null); // State to store the user's position
  const [error, setError] = useState(null); // State to store any error that occurs

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Set the user's position
        },
        (error) => {
          setError("Unable to retrieve your location.");
          console.error("Error fetching location: ", error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="w-full h-96 flex justify-center items-center ">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : position ? (
        <MapContainer
          center={position}
          zoom={15}
          className="w-3/4 h-3/4 rounded-lg shadow-lg border-2 border-black"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>You are here.</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-blue-500">Fetching location...</p>
      )}
    </div>
  );
};

export default MapLocation;
