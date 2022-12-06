import style from "./index.module.css"
import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


export const Map = () => {


  const mapPosition = [48.86537, 2.3433091];
  const alexPosition = [48.869078524477544, 2.3072276777220373];
  const restaurantPosition = [48.86761059835481, 2.3697101015616213];

  return(
    <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={alexPosition}>
        <Popup>
          Alex
        </Popup>
      </Marker>

      <Marker position={restaurantPosition}>
        <Popup>
          Restaurant
        </Popup>
      </Marker>
    </MapContainer>
  )
}