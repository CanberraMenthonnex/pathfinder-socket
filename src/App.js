import style from "./app.module.css";
import {useEffect} from "react";
import {ListRestaurant} from "./components/ListRestaurant";
import {Map} from "./components/Map";

function App() {


  useEffect(() => {


  }, []);

  return (
    <div className={style.AppName}>
      <div>
        <ListRestaurant/>
        <Map/>
        <div>Room</div>
      </div>
    </div>
  );
}

export default App;
