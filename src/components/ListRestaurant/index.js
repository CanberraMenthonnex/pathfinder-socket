import style from "./index.module.css";
import React from "react";

export const ListRestaurant = () => {

  return(
    <div className={style.restaurantMenu}>
      <div>
        <p>#Restaurant 1</p>
        <p>#Restaurant 2</p>
        <p>#Restaurant 3</p>
        <p>#Restaurant 4</p>
      </div>
    </div>
  )
}