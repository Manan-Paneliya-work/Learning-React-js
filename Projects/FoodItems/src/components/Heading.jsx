import style from "./Heading.module.css";

const Heading =({text}) =>{
    return(
        
        <>

        <h1 className={style.heading} >{text}</h1>

        </>
    );
}

export default Heading;