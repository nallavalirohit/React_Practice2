import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard =(props) => {
    const {responseData} = props;
    // console.log(props);
    // console.log(responseData);

    const {loggedInUser} = useContext(UserContext);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, costForTwoString, deliveryTime} = responseData?.data ? responseData?.data : responseData?.info; // responseData?.data is optional chaining
    return (
        <div className="hover:scale-75 transform-all duration-500">
            <div className="bg-gradient-to-t from-slate-950 w-full relative rounded-md">
                <img className ="w-full h-full object-cover mix-blend-overlay rounded-md" src={CDN_URL+cloudinaryImageId} alt="restaurant pic"/>
            </div>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoString ? costForTwoString : costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    );
}

    //Creating a Higher Order component to add the discount label

    export const withDiscountsLabel = (RestaurantCard) =>{
        // const {header, subHeader} = discountData
        return (props) => {
            const {responseData} = props;
            // console.log("discount label");
            // console.log(props);
            const {header, subHeader} = responseData?.info?.aggregatedDiscountInfoV3;
            const offer = subHeader ? header + " " + subHeader : header;
            return(
                <div className="relative">
                    <h4 className="font-bold text-white text-xl top-[7.2rem] left-3 z-[1] opacity-100 absolute">{offer}</h4>
                    <RestaurantCard {...props}/>
                </div>
            );
        }
    }

export default RestaurantCard;