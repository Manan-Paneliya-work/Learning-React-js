import styles from "./Heading.module.css";

const Heading = ({name}) => {
    return (
        <>  
            
            <hr/>
            <h1 className={`${styles['head2']} `}>{name}</h1> 
        </>
    );
};
export default Heading;