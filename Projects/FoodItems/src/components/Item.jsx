import style from "./Item.module.css";

const Item = ({ item, HandleBuyButton, bought}) => {
    
    return (
        <>
            <li className={`${style.item} list-group-item ${bought && "active"}`}>{item}
                <button
                    className={`${style.buyButton} `}
                    onClick={() => HandleBuyButton(item)}
                >
                    Buy
                </button>
            </li>
        </>
    );
}
export default Item;