import style from "./app.module.css";
import {
  calculateTimeToLeave,
  getDistanceOfTwoPoints,
  getTimeBySpeedBetweenTwoPoints,
  hoursToMinute
} from "./utilis/compute";
import {travelSpeed} from "./const";
import {useEffect} from "react";
import {ListRestaurant} from "./components/ListRestaurant";
import {Map} from "./components/Map";

function App() {


  const map = [
    ["", "", "", "", "B", "", ""], //x
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "A", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    //y
  ]

  const a = {x: 0, y: 4}
  const b = {x: 3, y: 1}


  useEffect(() => {

    const distance = getDistanceOfTwoPoints(a.x, a.y, b.x, b.y);
    const time = getTimeBySpeedBetweenTwoPoints(distance, travelSpeed);

    //console.log(time.toString() + "h time to make the distance: " + distance.toString() + "km at 5km/h")
    //console.log(hoursToMinute(time))

    calculateTimeToLeave(13, distance)

  }, []);

  return (
    <div className={style.AppName}>
      <ListRestaurant/>
      <Map/>
      <div>Room</div>
    </div>
  );
}

export default App;
