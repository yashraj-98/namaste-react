import MockData from "../utils/MenuItemsMockData";

const MenuItems = (menuitems) => {
  // console.log(menuitems.data.card.card.itemCards);
  console.log("mockdata", MockData);
  const MenuItemCards = menuitems.data.card.card.itemCards;
  console.log("heloooo");
  return (
    <div>
      {MenuItemCards === undefined
        ? MockData[0].map((data) => <div>{data.card.info.name}</div>)
        : MenuItemCards.map((data) => <div>{data.card.info.name}</div>)}
    </div>
  );
};
export default MenuItems;
