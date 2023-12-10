import { useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantMenuPath = () => {
  var [dropdown, setdropdown] = useState(null);

  return (
    <RestaurantMenu
      MenuDropdown={(index) => {
        setdropdown(index);
        console.log(dropdown);
      }}
      mainitemdropdown={dropdown}
      closedropdown={() => {
        setdropdown(null);
      }}
    />
  );
};

export default RestaurantMenuPath;
