import style from "./FoodInput.module.css";

const FoodInput = ({FoodInputHandler}) =>{
    return (
        <>
            <input 
            className={style.foodInput} 
            type="text" 
            placeholder="Enter FoodItem"
            onKeyDown={(event) => { FoodInputHandler(event) }}
            />
        </>
    );
}

export default FoodInput;