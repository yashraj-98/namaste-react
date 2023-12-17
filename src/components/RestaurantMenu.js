import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItems from "./MenuItems";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import SingleMenuItem from "./SingleMenuItem";
const RestaurantMenu = ({ MenuDropdown, closedropdown, mainitemdropdown }) => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  var [dropdown, setdropdown] = useState(null);

  const [Index, setIndex] = useState(false);
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
                  if (mainitemdropdown && mainitemdropdown === index) {
                    closedropdown();
                  } else {
                    MenuDropdown(index);
                    setIndex(index);
                  }
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

            {console.log("item", mainitemdropdown === Index)}

            {mainitemdropdown === index
              ? item?.card?.card?.categories &&
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
                })
              : null}

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
