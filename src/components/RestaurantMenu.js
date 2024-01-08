import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //   console.log(resId);
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("itemCards");
  // console.log(itemCards);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //   console.log(categories);

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold my-4">{name}</h1>
      <h3 className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {/* Categories accordion */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex} //We are displaying the contents of an accordion based on the index
          setShowIndex={()=>setShowIndex(index)} //Setting the showIndex state when we click on the child component
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
