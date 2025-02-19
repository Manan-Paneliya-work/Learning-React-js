import Item from "./Item";

const FoodItems = ({items}) => {
    return (
        <>
            <ul className="list-group">
                <Item fitems = {items}></Item>
            </ul>
        </>
    );
};

export default FoodItems;