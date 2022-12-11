import React, {useEffect} from "react";
import style from "./index.module.css"
import {getDistanceOfTwoPoints, getTime, timeConvert, toHoursAndMinutes} from "../../utilis/compute";
import {travelSpeed} from "../../const";
import {useState} from "react";


export const RightMenu = ({selectedUser, userPosition, restaurantPosition, rdvTime, rdvPosition}) => {

  const [timeToLeave, setTimeToLeave] = useState("");
  const [distance, setDistance] = useState(0);
  const [travelTime, setTravelTime] = useState("");

  useEffect(() => {

    if (!userPosition && !restaurantPosition) return
    const totalDistance = getDistanceOfTwoPoints(userPosition[0], userPosition[1], restaurantPosition[0], restaurantPosition[1]) +
      getDistanceOfTwoPoints(restaurantPosition[0], restaurantPosition[1], rdvPosition[0], rdvPosition[1]);

    const timeInHour = (getTime(totalDistance / 1000, travelSpeed))
    setTravelTime(timeConvert(timeInHour * 60))
    setTimeToLeave(toHoursAndMinutes((rdvTime - timeInHour) * 60, true))
    setDistance(totalDistance)
  }, [userPosition, restaurantPosition, rdvPosition])


  return (
    <div className={style.wrapper}>
      <h2>RDV Time: {toHoursAndMinutes(rdvTime * 60)}</h2>
      <p>{selectedUser.name}</p>
      <p>Distance: {distance}m </p>
      <p>Time to leave: {timeToLeave} </p>
      <p>Travel duration: {travelTime}</p>
      <hr/>
    </div>
  )
}