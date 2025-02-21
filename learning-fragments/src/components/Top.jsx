import styles from "./Heading.module.css";

const Top = ({name}) =>{
    return (
        <>
            <h1 className={`${styles['head1']} `}>{name}</h1>
        </>
    );
}

export default Top;