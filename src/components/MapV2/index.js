import {useMemo, useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import icon from "../../image/pin.png";
import star from "../../image/star.svg";
import L from "leaflet";

const center = [48.86537, 2.3433091];


export const MapV2 = (
  {
    data,
    alexPosition,
    setAlexPosition,
    totoPosition,
    setTotoPosition,
    tonnyPosition,
    setTonnyPosition,
    rdvPosition,
    setRdvPosition,
    totoRestaurant,
    tonnyRestaurant,
    alexRestaurant,

    setUserPosition,
    setRestaurantPosition,

    restaurants,
    setSelectedUser
  }) => {

  const pointerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [30, 34],
    iconAnchor: [12, 35],
    popupAnchor: [0, -60],
  });

  const starIcon = new L.Icon({
    iconUrl: star,
    iconSize: [30, 34],
    iconAnchor: [16, 22],
    popupAnchor: [-1, -25],
  })

  const [alexPath, setAlexPath] = useState([]);
  const [totoPath, setTotoPath] = useState([]);
  const [tonnyPath, setTonnyPath] = useState([]);

  const updateMap = (name, position) => {
    const userData = data.find((user) => user.name === name);
    const userSelected = data.find((user) => user.name === name);
    setSelectedUser(userSelected);

    switch (name) {
      case "Alex":
        setAlexPosition([position.lat, position.lng]);
        setAlexPath([[position.lat, position.lng], alexRestaurant, rdvPosition]);
        setUserPosition([position.lat, position.lng]);
        return
      case "Toto":
        setTotoPosition([position.lat, position.lng]);
        setTotoPath([[position.lat, position.lng], totoRestaurant, rdvPosition]);
        setUserPosition([position.lat, position.lng]);
        return
      case "Tonny":
        setTonnyPosition([position.lat, position.lng]);
        setTonnyPath([[position.lat, position.lng], tonnyRestaurant, rdvPosition]);
        setUserPosition([position.lat, position.lng]);
    }
  }

  useEffect(() => {
    setAlexPath([alexPosition, alexRestaurant, rdvPosition]);
    setTonnyPath([tonnyPosition, tonnyRestaurant, rdvPosition]);
    setTotoPath([totoPosition, totoRestaurant, rdvPosition]);
  }, [totoRestaurant, alexRestaurant, tonnyRestaurant, alexPosition, tonnyPosition, totoPosition, rdvPosition])


  const eventHandlers = useMemo(() => ({
    click(e) {
      const userSelected = data.find((user) => user.name === e.target._popup.options.children);
      setSelectedUser(userSelected);

      switch(userSelected.name){
        case "Alex":
          setRestaurantPosition(alexRestaurant)
          setUserPosition(alexPosition)
          break;
        case "Toto":
          setRestaurantPosition(totoPosition)
          setUserPosition(totoPosition)
          break;
        case "Tonny":
          setUserPosition(tonnyPosition)
          setRestaurantPosition(tonnyPosition)
      }

    },
    dragend(e) {
      const address = e.target.getLatLng();
      const name = e.target._popup.options.children
      updateMap(name, address)
    },
  }), [rdvPosition])


  const eventRdvPosition = useMemo(() => ({
    dragend(e) {
      const address = e.target.getLatLng();
      setRdvPosition([address.lat, address.lng])
    },
  }), [])

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
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
        <Popup>Alex</Popup>
      </Marker>

      <Marker
        eventHandlers={eventHandlers}
        draggable={true}
        autoPan={true}
        position={totoPosition}
      >
        <Popup>Toto</Popup>
      </Marker>
      <Marker
        eventHandlers={eventHandlers}
        draggable={true}
        autoPan={true}
        position={tonnyPosition}

      >
        <Popup>
          Tonny
        </Popup>
      </Marker>

      <Marker
        eventHandlers={eventRdvPosition}
        icon={starIcon}
        draggable={true}
        autoPan={true}
        position={rdvPosition}
      >
        <Popup>RDV Point</Popup>
      </Marker>

      {
        restaurants.map((restaurant) => {
          return (
            <Marker
              icon={pointerIcon}
              autoPan={true}
              position={restaurant.addressRestaurant}
            >
              <Popup>{restaurant.restaurant}</Popup>
            </Marker>
          )
        })
      }

      <Polyline pathOptions={{color: "red"}} positions={alexPath}/>
      <Polyline pathOptions={{color: "green"}} positions={tonnyPath}/>
      <Polyline pathOptions={{color:"blue"}} positions={totoPath}/>
    </MapContainer>
  )
}

