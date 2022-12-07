import React, {useState, useEffect, useMemo}  from "react";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import {getDistanceOfTwoPoints, getTime} from "../../utilis/compute";

export const Map = () => {

  const mapPosition = [48.86537, 2.3433091];
  const [alexPosition, setAlexPosition] = useState([48.869078524477544, 2.3072276777220373])
  const [restaurantPosition, setRestaurantPosition] = useState( [48.86770662760766, 2.36604343692798])
  const [polyline, setPolyline] = useState([alexPosition, restaurantPosition])

  useEffect(() => {

    const distance = getDistanceOfTwoPoints(alexPosition[0], alexPosition[1], restaurantPosition[0], restaurantPosition[1]);

    console.log("distance : " + distance);
    //console.log(getTime(distance,5));
  }, [alexPosition]);

  const eventHandlers = useMemo(() => ({
    dragend(e) {
      const newPosition = e.target.getLatLng()
      setAlexPosition([newPosition.lat, newPosition.lng])
    },
  }), [])


  useEffect(() => {
    setPolyline([alexPosition, restaurantPosition])
  }, [alexPosition, restaurantPosition])

  return(
    <MapContainer
      center={mapPosition}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        eventHandlers={eventHandlers}
        draggable={true}
        autoPan={true}
        position={alexPosition}
      >
        <Popup>
          Alex
        </Popup>
      </Marker>

      <Marker position={restaurantPosition}>
        <Popup>
          Restaurant
        </Popup>
      </Marker>
      <Polyline pathOptions={{color: "red"}} positions={polyline} />
    </MapContainer>
  )
}