import style from "./index.module.css";
import React from "react";
import {RestaurantComponent} from "../RestaurantComponent/RestaurantComponent";

export const ListRestaurant = (
  {
    data,
    setTotoRestaurant,
    setAlexRestaurant,
    setTonnyRestaurant,
    selectedUser,
    setRestaurantPosition
  }) => {

  const selectRestaurant = (position) => {

    switch (selectedUser.name) {

      case "Toto":
        setTotoRestaurant(position);
        setRestaurantPosition(position);
        break;
      case "Alex":
        setAlexRestaurant(position);
        console.log(setRestaurantPosition)
        setRestaurantPosition(position);
        break;
      case "Tonny":
        setTonnyRestaurant(position);
        setRestaurantPosition(position);
        break;
    }
  }

  return (
    <div className={style.restaurantMenu}>
      <h2 className={style.h2Restaurant}>Restaurants:</h2>
      {
        data.map((restaurant, key) => {
          return (
            <div onClick={() => selectRestaurant(restaurant.addressRestaurant)}
            >
              <RestaurantComponent
                key={key}
                restaurantName={restaurant.restaurant}
              />
            </div>

          )
        })
      }
    </div>
  )
}