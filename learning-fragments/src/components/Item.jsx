import styles from "./Item.module.css";

const Item = ({fitems}) => {
    return (
        
        <>
            {fitems.map((item) => (
                 <li className={` ${styles['f-items']}  list-group-item`} key={item}>{item}</li>
            ))}
        </>
    );
};

export default Item;
