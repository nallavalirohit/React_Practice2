import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async() =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        // console.log(json);
        // console.log(json.data);
        setResInfo(json.data);
    };
    console.log("resInfo");
    console.log(resInfo);

    if(resInfo === null){
        return <Shimmer />;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("itemCards");
    console.log(itemCards);

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100}</li>
                    ))}
                
                {/* <li>Mandi</li>
                <li>Samosa</li> */}
            </ul>
        </div>
    );
}

export default RestaurantMenu;