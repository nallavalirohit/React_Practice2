import { CDN_URL } from "../utils/constant";

const RestaurantCard =(props) => {
    const {responseData} = props;
    console.log(props);
    console.log(responseData);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = responseData?.data; // responseData?.data is optional chaining
    return (
        <div className="res-card">
            <img className ="res-logo" src={CDN_URL+cloudinaryImageId} alt="restaurant pic"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100} for 2 people</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;