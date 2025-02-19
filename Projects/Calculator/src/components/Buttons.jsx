import style from "../components/Buttons.module.css";

const Buttons = ({ButtonNames})=>{
    return (
        <>
        <div className={style.buttons}>
        {
            ButtonNames.map((name)=>(
                <button className={style.btn}>{name}</button>
            ))
        }
        </div>
      
        </>
    );
}

export default Buttons;