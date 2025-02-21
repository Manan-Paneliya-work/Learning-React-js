import styles from "./Item.module.css";

const Item = ({ fitems}) => {


    const BuyButtonClicked = (item) => {
        // console.log(event);
        console.log(`${item} being bought`);
    }

    return (

        <>
            {fitems.map((item) => (
                <>
                    <div className={styles.ItemBox}>
                        <li className={` ${styles['f-items']}  list-group-item`} key={fitems.indexOf(item)}>{item}
                            <button
                                className={styles.buyButton}
                                onClick={(event)=> {BuyButtonClicked(event, item)}}
                            >
                                Buy
                            </button>

                        </li>


                    </div>
                </>
            ))}

        </>
    );
};

export default Item;
