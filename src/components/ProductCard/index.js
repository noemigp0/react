
import Card from 'react-bootstrap/Card';

const ProductCard = props => {
    const { title, price, description, image } = props.product
    return (
      <div className='col'>
        <div className='card'>
        <Card.Img variant="top" src={image} />
          <div className='card-body'>
            <p className='card-text'>{title}</p>
            <p className='card-text'>{`Price: $ ${price}`}</p>
            <p className='card-text'>{description}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProductCard