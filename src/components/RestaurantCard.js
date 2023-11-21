import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  //console.log(props.resdata);
  const { resdata } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h5>{name}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>Cost for two= {costForTwo}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};
export default RestaurantCard;
