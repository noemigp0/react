const Shape = props => {
    const { shape, color } = props
    return (
        <div className={`${shape} ${color}`}></div>
    )
}

export default Shape