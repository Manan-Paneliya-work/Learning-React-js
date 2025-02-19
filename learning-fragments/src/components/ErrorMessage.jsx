const ErrorMessage = ({items}) => {
    let message = items.length === 0 ? <h2>I am still Hungry <br /> 👹👿 HUNGER is DANGER 👿👹</h2> : null ;
    return (
        
        <>
        {message}
        </>
    );

};

export default ErrorMessage; 