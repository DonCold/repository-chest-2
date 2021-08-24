const Mensaje = ({ color, message }) => {
    return (
        <h1
        style={ {
            color: color,
        } }
        >{ message }</h1>
    );
}

export default Mensaje;
