import RestaurantCard, { withDiscountsLabel } from "./RestaurantCard";
import { dataList } from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// let listofRestaurants = [
//   {
//     data: {
//       type: "F",
//       id: "73011",
//       name: "Dindigul Thalappakatti",
//       uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
//       city: "22",
//       area: "Anand Vihar Colony",
//       totalRatingsString: "5000+ ratings",
//       cloudinaryImageId: "w0fc1sr85flnqzb7qhma",
//       cuisines: ["South Indian", "Snacks", "Biryani"],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 31,
//       maxDeliveryTime: 31,
//       avgRating: "3.4",
//       new: false,
//     },
//   },
//   {
//     data: {
//       type: "F",
//       id: "73012",
//       name: "KFC",
//       uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
//       city: "22",
//       area: "Anand Vihar Colony",
//       totalRatingsString: "5000+ ratings",
//       cloudinaryImageId: "w0fc1sr85flnqzb7qhma",
//       cuisines: ["South Indian", "Snacks", "Biryani"],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 31,
//       maxDeliveryTime: 31,
//       avgRating: "4.6",
//       new: false,
//     },
//   },
//   {
//     data: {
//       type: "F",
//       id: "73013",
//       name: "McD",
//       uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
//       city: "22",
//       area: "Anand Vihar Colony",
//       totalRatingsString: "5000+ ratings",
//       cloudinaryImageId: "w0fc1sr85flnqzb7qhma",
//       cuisines: ["South Indian", "Snacks", "Biryani"],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 31,
//       maxDeliveryTime: 31,
//       avgRating: "4.1",
//       new: false,
//     },
//   }
// ];

const Body = () => {
  let [listofRestaurants, setlistofRestaurants] = useState([]);
  let [filteredRes, setfilteredRes] = useState([]);

  let [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("listofRestaurants");
  console.log(listofRestaurants);
  // console.log("filteredRes");
  // console.log(filteredRes);

  //Conditional Rendering - Rendering that is based on condition like Shimmer UI
  // if(listofRestaurants.length === 0){
  //     return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  const RestaurantCardwithDiscounts = withDiscountsLabel(RestaurantCard);

  if (onlineStatus === false) {
    return <h1>You're offline. Internet disconnected!</h1>;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder=" search...."
            className="search-box border border-solid border-black rounded-sm"
            value={searchText}
            onChange={(event) => setsearchText(event.target.value)}
          />
          <button
            className="px-4 py-1 bg-slate-400 m-4 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRes = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-6 p-4 items-center">
          <button
            className="px-4 border border-solid border-black bg-slate-400 rounded-md shadow-lg"
            onClick={() => {
              filteredRes = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              // console.log(listofRestaurants);
              setfilteredRes(filteredRes);
            }}
          >
            High rated Restaurants
          </button>
        </div>
      </div>
      <div className="m-auto w-[1140px]">
      <div className="grid grid-cols-4 gap-8 my-8 mx-4">
        {filteredRes.map((data) => (
          <Link key={data?.info?.id} to={"/restaurant/" + data?.info?.id}>
            {data?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurantCardwithDiscounts responseData={data}/>
            ) : (
              <RestaurantCard responseData={data} />
            )}
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Body;
