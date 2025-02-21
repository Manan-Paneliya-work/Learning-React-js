import style from "./FoodItems.module.css";
import Item from "./Item";

const FoodItems = ({items, HandleBuyButtonClicked}) => {

    
    return (
        <>
            <ul className={style.listGroup}>
                <Item 
                className={style.item}
                 fitems = {items}
                 HandleBuyButton={HandleBuyButtonClicked}
                 
                 >
                 </Item>
            </ul>
        </>
    );
};

export default FoodItems;