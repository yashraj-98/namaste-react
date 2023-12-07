import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItems from "./MenuItems";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  //console.log(resInfo.cards[0].card.card.info);
  const { name, cuisines, costForTwo } = resInfo.cards[0].card.card.info;
  const itemCards = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name} </h1>
      <h5>
        {cuisines} {" Cost for two: "}
        {costForTwo}
      </h5>
      <ul>
        Menu
        {itemCards.cards.map((item) => (
          <div>
            <div className="text-green-600 text-3xl">
              {item.card.card.title}
            </div>
            {console.log("item", item)}
            {item?.card?.card?.categories &&
              item?.card?.card?.categories.map((data) => {
                return <MenuItems data={data.itemCards} title={data.title} />;
              })}
            <div>
              {item?.card?.card?.itemCards &&
                item?.card?.card?.itemCards.map((data) => {
                  return (
                    <div className="text-orange-600">
                      {data?.card?.info?.name}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
