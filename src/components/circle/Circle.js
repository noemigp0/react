

const Circle = props => {
    const {color = "red" } = props
    return  <div className={`circle bg-${color}`}></div>
   
    
}

export default Circle