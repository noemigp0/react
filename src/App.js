import "./App.css";
import { useState } from "react";
import Circle from "./components/circle/Circle"

function App() {
  // const [title, setTitle] = useState("Hola Koders!");
  // const [isLogged, setIsLogged] = useState(false);
  const [color, setColor] = useState();
  let userData = {};

  const goHandler = () => {
    setColor("green")
  }

  const changingHandler = () => {
    setColor("yellow")
  }

  const redHandler = () => {
    setColor("red")
  }

  // const inputHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const loginHandler = (event) => {
  //   console.log(event)
  //   setIsLogged(true);
  // };
  // const logOutHandler = () => {
  //   setIsLogged(false);
  // };

  return (
    <div className="App">
      <div className="d-flex justify-content-sm-around">
        <button className="btn btn-success" onClick={goHandler}>
          Go
        </button>
        <button className="btn btn-warning" onClick={changingHandler}>
          Changing
        </button>
        <button className="btn btn-danger" onClick={redHandler}>
          Stop
        </button>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Circle color={color}/>
      </div>
    </div>
  );
}
export default App;
