import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data);

    // const [showItems, setShowItems] = useState(true); // lifting the state up - accordion example

    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
        <div>
            {/* Accordion header */}
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                {showItems && <MenuItemList items={data.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;