import "./App.css";
import { useState } from "react";
import List from "./components/List";
import products from "./assets/mock_products";
// import { Card, CardGroup, CardBody, CardText } from "reactstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardGroup, Button } from "react-bootstrap";

function App() {
  const [productList, setProductsList] = useState([]);
  const [total, setTotal] = useState(0)
  // const [productData, setProductData] = useState({});

  /*{
    nombre:
    generacion:
    email
  }*/
  // const inputHandler = event => {
  //   let property = event.target.name
  //   let value = event.target.value
  //   console.log(`property: ${property} , value: ${value}`)
  //   setKoderData({ ...koderData, [property]: value })
  // }

  // const guardarKoder = () => {
  //   setKodersList([...kodersList, koderData])
  // }

  const saveProduct = (event, id) => {
    let product = products.filter((cv, index) => {
      return index === id;
    });
    let precio = product[0].price
    setProductsList([...productList, product[0]]);
    setTotal( total+precio)
  };

  return (
    <div className="App">
      <div className="row">
      <div className="col-12 col-md-6">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product, index) => {
            const { image, title, price, description } = product;
            return (
              <Card style={{ width: "15rem" }} key={index} name="productKey">
                <Card.Img variant="top" className="image-size" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{`Price: ${price}`}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={(event) => saveProduct(event, index)}
                  >
                    Agregar
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {console.log(productList)}
          {!productList.length ? (
            <h2>Agrega un producto</h2>
          ) : (
            productList.map((prod, i) => {
              console.log(prod)
              const { image, title, price } = prod;
              return (
                <Card style={{ width: "15rem" }} key={i} name="productKey">
                  <Card.Img variant="top" className="image-size" src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{`Price: ${price}`}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div>{`Total ${total}`}</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
