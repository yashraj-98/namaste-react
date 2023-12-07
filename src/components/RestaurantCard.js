import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log(props.resdata);
  const { resdata } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, id } =
    resdata?.info;

  return (
    <Link to={`/restaurants/${id}`}>
      <div className="m-3 p-3 w-[210px] bg-blue-100 hover:bg-blue-300">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h5 className="font-bold py-3 text-base">{name}</h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>Cost - {costForTwo}</h5>
        <h5>Avg Rating - {avgRating}</h5>
      </div>
    </Link>
  );
};

/*higher order component

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};*/

export default RestaurantCard;
