import { useEffect, useState } from "react";
import "./App.css";
import ItemsList from "./components/ItemList";
import products from "./assets/mock_products";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const addProduct = (id) => {
    console.log(id);
    const selectedProduct = products.find((product) => product.id === id);
    console.log(selectedProduct);
    setSelectedProducts([
      ...selectedProducts,
      { ...selectedProduct, purchased: true },
    ]);
  };
  const removeProduct = (id) => {
    console.log(id);
    const remainingProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(remainingProducts);
  };

  const categoriesList = products.reduce((accum, current) => {
    return !accum.includes(current.category)
      ? [...accum, current.category]
      : accum;
  }, []);

  const optionSelected = (value) => {
    let filteredProducts = products.filter((cv, index) => {
      return cv.category === value;
    });

    setFilteredProducts(filteredProducts);
  };

  console.log(categoriesList);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Catálogo de productos</h1>
            <div className="d-flex p-5">
              <UncontrolledDropdown>
                <DropdownToggle caret>Categoria</DropdownToggle>
                <DropdownMenu>
                  {categoriesList.map((item, index) => {
                    return (
                      <DropdownItem onClick={() => optionSelected(item)}>
                        {item}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <ItemsList
              productsArray={filteredProducts}
              addProductHandler={addProduct}
            />
          </div>
          <div className="col-12 col-md-6">
            <h1>Carrito de compras</h1>
            {!selectedProducts.length ? (
              <h2>Selecciona algún producto de la lista</h2>
            ) : (
              <>
                <h3>
                  Total:
                  {selectedProducts.reduce((acc, curr) => acc + curr.price, 0)}
                </h3>
                <ItemsList
                  productsArray={selectedProducts}
                  removeProductHandler={removeProduct}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
