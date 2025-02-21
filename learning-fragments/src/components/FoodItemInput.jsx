import style from "./FoodItemInput.module.css";

const FoodItemInput = ({InputHandleOnKeyDown}) => {

    return(
    <>
        <input 
        className={style.foodItemInput}
        type="text" 
        name="" 
        id="" 
        placeholder="Enter FoodItem Name : "
        onKeyDown={InputHandleOnKeyDown}
        />
    </>
    );
}

export default FoodItemInput;