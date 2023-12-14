import { CDN_URL } from "../utils/constant";

const RestaurantCard =(props) => {
    const {responseData} = props;
    // console.log(props);
    // console.log(responseData);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, costForTwoString, deliveryTime} = responseData?.data ? responseData?.data : responseData?.info; // responseData?.data is optional chaining
    return (
        <div className="res-card">
            <img className ="res-logo" src={CDN_URL+cloudinaryImageId} alt="restaurant pic"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwoString ? costForTwoString : costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;