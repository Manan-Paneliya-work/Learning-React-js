import { useState } from "react";
import style from "./FoodItems.module.css";
import Item from "./Item";

const FoodItems = ({ fooditems }) => {
    
    let [activeItems, setActiveItems] = useState([]);

    const BuyButtonClicked = (item, event) => {
        let newItems = [...activeItems, Item];
        setActiveItems(newItems);
    }
    
    return (
        <>
            <ul className={`${style.fooditems} list-group list-group-flush`}>
                {fooditems.map((item) => (
                    <Item 
                    key={item}
                    item ={item} 
                    HandleBuyButton={(event) =>  BuyButtonClicked(item, event)} 
                    bought={activeItems.includes(item)}>

                    </Item>
                ))}
            </ul>
        </>
    );
}

export default FoodItems;