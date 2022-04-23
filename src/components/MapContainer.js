import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const MapContainer = () => {
  const mapStyles = {
    height: "40vh",
    width: "90%",
  };

  const defaultCenter = {
    lat: 32.000061,
    lng: 34.870609,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDUahqAhoKPACmAQM7fljutGLDg1rDB7AQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      />
    </LoadScript>
  );
};
export default MapContainer;
