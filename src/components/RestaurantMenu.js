import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  console.log(resInfo.cards[0].card.card.info);
  const { name, id, cuisines, costForTwo, cloudinaryImageId } =
    resInfo.cards[0].card.card.info;
  const itemCards =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  return (
    <div className="menu">
      <h1>{name} </h1>
      <h5>
        {cuisines} {" Cost for two: "}
        {costForTwo}
      </h5>
      <ul>
        Menu
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}: Price = Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
