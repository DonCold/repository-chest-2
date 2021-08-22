const Mensaje = ({ color, message }) => {
    return (
        <p
        style={ {
            color: color,
        } }
        >{ message }</p>
    );
}

export default Mensaje;
