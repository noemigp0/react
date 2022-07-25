import ProductCard from '../ProductCard'

const List = props => {
  console.log(props)
  const { products } = props
  console.log(products)
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />
      })}
    </div>
  )
}

export default List