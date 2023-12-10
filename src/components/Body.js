import RestaurantCard from "./RestaurantCard";
import { dataList } from "../utils/MockData";

const Body = () =>{
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {console.log("button clicked")}}>High rated Restaurants</button>
            </div>
            <div className="res-container">
                {dataList.map((data) => (
                    <RestaurantCard key={data?.data?.id} responseData ={data}/>
                    ))}
            </div>
        </div>
    );
}

export default Body;