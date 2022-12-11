import style from "./app.module.css";
import {useState, useEffect} from "react";
import {ListRestaurant} from "./components/ListRestaurant";
import {RightMenu} from "./components/RightMenu";
import {MapV2} from "./components/MapV2";

function App() {

  const [selectedUser, setSelectedUser] = useState({});

  const [alexPosition, setAlexPosition] = useState([48.869078524477544, 2.3072276777220373]);
  const [totoPosition, setTotoPosition] = useState([48.874759078186145, 2.3061021206691614]);
  const [tonnyPosition, setTonnyPosition] = useState([48.84809669754596, 2.3481262502035922]);

  const [alexRestaurant, setAlexRestaurant] = useState([48.832682610082486, 2.3728290794802573]);
  const [tonnyRestaurant, setTonnyRestaurant] = useState([48.8656331111985, 2.367158270946344]);
  const [totoRestaurant, setTotoRestaurant] = useState([48.89098309518708, 2.320507490488723]);

  const [userPosition, setUserPosition] = useState();
  const [restaurantPosition, setRestaurantPosition] = useState();

  const [rdvPosition, setRdvPosition] = useState([48.886937121545245, 2.3432690929871196]);


  const [rdvTime, setRdvTime] = useState(13)

  const restaurant1 = {
    restaurant: "On Nem que ça !",
    addressRestaurant: [48.832682610082486, 2.3728290794802573],
  }

  const restaurant2 = {
    restaurant: "Il y a pas de Sushis !",
    addressRestaurant: [48.8656331111985, 2.367158270946344],
  }

  const restaurant3 = {
    restaurant: "C'est Soupe'hair bon !",
    addressRestaurant: [48.89098309518708, 2.320507490488723],
  }

  const restaurant4 = {
    restaurant: "Au Riz Jaune !",
    addressRestaurant: [48.843118738329416, 2.3037151087213483]
  }

  const restaurant5 = {
    restaurant: "I Guna Dy",
    addressRestaurant: [48.84936194340787, 2.3783214801046784]
  }

  const restaurant6 = {
    restaurant: "Jar Binks Jar",
    addressRestaurant: [48.84936194340787, 2.3783214801046784]
  }

  const user1 = {
    name: "Alex",
    address: [48.869078524477544, 2.3072276777220373],
    restaurantData: restaurant1,
    path: [[48.869078524477544, 2.3072276777220373], [48.832682610082486, 2.3728290794802573], [48.886937121545245, 2.3432690929871196]],
    color: "green"
  }

  const user2 = {
    name: "Toto",
    address: [48.874759078186145, 2.3061021206691614],
    restaurantData: restaurant2,
    path: [[48.874759078186145, 2.3061021206691614], [48.8656331111985, 2.367158270946344], [48.886937121545245, 2.3432690929871196]],
    color: "red"
  }

  const user3 = {
    name: "Tonny",
    address: [48.84809669754596, 2.3481262502035922],
    restaurantData: restaurant3,
    path: [[48.84809669754596, 2.3481262502035922], [48.89098309518708, 2.320507490488723], [48.886937121545245, 2.3432690929871196]],
    color: "blue"
  }

  useEffect(() => {
    setSelectedUser(user1)
    setRestaurantPosition(restaurant1.addressRestaurant)
    setUserPosition(alexPosition)
  }, [])



  const users = [user1, user2, user3];

  return (
    <div className={style.AppName}>
      <ListRestaurant
        data={[restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6]}
        setTonnyRestaurant={setTonnyRestaurant}
        setAlexRestaurant={setAlexRestaurant}
        setTotoRestaurant={setTotoRestaurant}
        selectedUser={selectedUser}
        setRestaurantPosition={setRestaurantPosition}
      />
      <MapV2
        data={users}

        restaurants={[restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6]}

        alexPosition={alexPosition}
        setAlexPosition={setAlexPosition}
        totoPosition={totoPosition}
        setTotoPosition={setTotoPosition}
        tonnyPosition={tonnyPosition}
        setTonnyPosition={setTonnyPosition}
        rdvPosition={rdvPosition}
        setRdvPosition={setRdvPosition}

        tonnyRestaurant={tonnyRestaurant}
        totoRestaurant={totoRestaurant}
        alexRestaurant={alexRestaurant}

        setSelectedUser={setSelectedUser}
        setRestaurantPosition={setRestaurantPosition}
        setUserPosition={setUserPosition}

      />
      <RightMenu
        selectedUser={selectedUser}
        userPosition={userPosition}
        restaurantPosition={restaurantPosition}
        rdvTime={rdvTime}
        rdvPosition={rdvPosition}
      />
    </div>
  );
}

export default App;
