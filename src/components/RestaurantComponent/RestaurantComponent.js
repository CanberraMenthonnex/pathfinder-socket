import React from "react";
import style from "./style.module.css";

export const RestaurantComponent = ({restaurantName, selected}) => {


  return (
    <p className={selected ? style.restaurantButtonSelected : style.restaurantButton}>{restaurantName}</p>
  )
}