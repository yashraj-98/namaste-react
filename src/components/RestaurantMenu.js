import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItems from "./MenuItems";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import SingleMenuItem from "./SingleMenuItem";
const RestaurantMenu = ({ MenuDropdown, mainitemdropdown }) => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  var [dropdown, setdropdown] = useState(null);

  //console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  //console.log(resInfo.cards[0].card.card.info);
  const { name, cuisines, costForTwo } = resInfo.cards[0].card.card.info;
  const itemCards = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR;
  //console.log(itemCards);
  return (
    <div className="text-center">
      <h5 className="text-2xl font-bold m-5">{name} </h5>
      <p className="font-bold">
        {cuisines.join(", ")} {" Cost for two - ₹"}
        {costForTwo / 100}
      </p>
      <ul>
        {itemCards.cards.map((item, index) => (
          <div>
            {item.card.card.title && (
              <div
                className=" my-5 px-3 w-6/12 m-auto bg-gray-100 p-1 shadow-lg  flex justify-between cursor-pointer"
                onClick={() => {
                  MenuDropdown(index);
                }}
              >
                <span className="font-bold text-lg">
                  {item.card.card.title}(
                  {item?.card?.card?.itemCards?.length ||
                    item?.card?.card?.categories?.length}
                  )
                </span>
                <span> 🔽</span>
              </div>
            )}
            {/* {console.log("item", item)} */}
            {item?.card?.card?.categories &&
              item?.card?.card?.categories.map((data, index) => {
                return (
                  <MenuItems
                    data={data.itemCards}
                    title={data.title}
                    setdropdown={() => {
                      setdropdown(index);
                    }}
                    dropdown={dropdown === index ? true : false}
                    closedropdown={() => {
                      setdropdown(null);
                    }}
                  />
                );
              })}
            <div>
              {console.log(mainitemdropdown)}
              {mainitemdropdown === index &&
                item?.card?.card?.itemCards &&
                item?.card?.card?.itemCards.map((data) => {
                  return <SingleMenuItem data={data} />;
                })}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
