const Button = props => {
    const { color = "primary", text = "Soy un boton" } = props
    return (
        <button className={`btn btn-${color}`}>{text}</button>
    )
}

export default Button