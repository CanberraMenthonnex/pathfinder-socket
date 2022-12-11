import React, {useState, useEffect, useMemo} from "react";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import {getDistanceOfTwoPoints} from "../../utilis/compute";

export const Map = ({setData, users}) => {

  const mapPosition = [48.86537, 2.3433091];
  const [alexPosition, setAlexPosition] = useState([48.869078524477544, 2.3072276777220373])
  const [restaurantPosition, setRestaurantPosition] = useState([48.86770662760766, 2.36604343692798])
  const [rdvPosition, setRdvPosition] = useState([48.886937121545245, 2.3432690929871196]);

  //const [polyline, setPolyline] = useState([alexPosition, restaurantPosition, rdvPosition]);


  const eventHandlers = useMemo(() => ({
    dragend(e) {
      const newPosition = e.target.getLatLng()
      setAlexPosition([newPosition.lat, newPosition.lng])
    },
  }), []);

  useEffect(() => {
    const distance =
      getDistanceOfTwoPoints(alexPosition[0], alexPosition[1], restaurantPosition[0], restaurantPosition[1]);

    setData({
      distance: distance
    })
  }, [alexPosition]);

  useEffect(() => {
    //setPolyline([alexPosition, restaurantPosition, rdvPosition])
  }, [alexPosition, restaurantPosition])

  return (
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
          Thomas
        </Popup>
      </Marker>

      <Marker position={restaurantPosition}>
        <Popup>
          Restaurant
        </Popup>
      </Marker>

      <Marker position={rdvPosition}>
        <Popup>
          RDV POINT
        </Popup>
      </Marker>

      {
        users.map((user) => {
          return (
            <>
              <Marker position={user.addressRestaurant}>
                <Popup>
                  {user.restaurant}
                </Popup>
              </Marker>

              <Marker position={user.address}>
                <Popup>
                  {user.name}
                </Popup>
                <Polyline pathOptions={{color: user.color}} positions={user.path}/>
              </Marker>
            </>
          )
        })
      }

    </MapContainer>
  )
}