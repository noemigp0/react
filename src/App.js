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
 const [kodersList, setKoderList] = useState([{
  name: 'Israel',
  generation: 'x'
 }])

 useEffect(()=> {
  const getKoders = async () => {
    let data = await fetch('https://koder19g-ngp-default-rtdb.firebaseio.com/.json')
    data = await data.json()
    setKoderList(data)
  }
  getKoders()
 },[])

 return (
  <div className="App">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        Object.keys(kodersList).map((koderKey, index) => {
          console.log(koderKey)
          console.log(kodersList[koderKey])
        

          return (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="card-text">Name: </div>
                <div className="card-text">Generacion: </div>
              </div>
            </div>

          </div>)
        })
      }
    </div>
  </div>
 )
}

export default App;
