import MockData from "../utils/MenuItemsMockData";

const MenuItems = (menuitems) => {
  // console.log(menuitems.data.card.card.itemCards);
  console.log("menuitem", menuitems);

  return (
    <div>
      <h1 className="text-xl font-bold text-red-400"> {menuitems?.title}</h1>
      {menuitems?.data &&
        menuitems?.data?.map((data) => {
          return <div>{<h1>{data?.card?.info?.name}</h1>}</div>;
        })}
    </div>
  );
};
export default MenuItems;
