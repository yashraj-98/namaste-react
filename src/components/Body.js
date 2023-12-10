import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [ListofRestaurants, SETListofRestaurants] = useState([]);
  const [filteredRestaurants, SETfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  //console.log("Body Render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    SETListofRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SETfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const online = useOnlineStatus();
  if (online === false)
    return (
      <h1>Looks's you are offline. Please check your internet connection.</h1>
    );

  return ListofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-3 p-3">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="m-3 px-3 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurants = ListofRestaurants.filter((RES) =>
                RES.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //console.log(filteredRestaurants);
              SETfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-3 p-3 flex items-center">
          <button
            className="m-3 px-3 py-1 bg-slate-100 rounded-lg"
            onClick={() => {
              const filteredList = ListofRestaurants.filter(
                (RES) => RES.info.avgRating > 4
              );
              SETListofRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
