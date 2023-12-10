import { CDN_URL } from "../utils/constants";
const SingleMenuItem = ({ data }) => {
  return (
    <div
      key={data?.card?.info?.id}
      className="p-9 m-auto border-gray-200 border-b-2 w-6/12 text-left flex justify-between items-center"
    >
      <div className="w-9/12">
        <div className="py-2">
          <span className="font-semibold text-base">
            {data?.card?.info?.name}
          </span>
          <div className="text-sm font-normal p-1">
            <span>
              {"₹ "}
              {data?.card?.info?.price / 100}
            </span>
          </div>
        </div>
        <p className="text-xs py-1 text-zinc-500">
          {data?.card?.info?.description}
        </p>
      </div>

      <div className="w-3/12 p-3">
        <div>
          <button className="text-[#60b246] font-semibold mx-7  shadow-lg  absolute z-10 bg-white">
            Add +
          </button>
          <img
            src={CDN_URL + data?.card?.info?.imageId}
            className="w-[118px] ml-auto rounded-md"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default SingleMenuItem;
