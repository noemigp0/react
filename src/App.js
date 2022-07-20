import logo from './logo.svg';
import './App.css';
import Button from './components/button'

function App() {
  const buttons = [
    {
      text: "Boton 1",
      color: "danger"
    },
    {
      text: "Boton 2",
      color: "secondary"
    },
    {
      text: "Boton 3",
      color: "success"
    },
    {
      text: "Boton 4",
      color: "danger"
    },
    {
      text: "Boton 5",
      color: "primary"
    }
  ]
  return (
    <div className="App">
      <div className="d-flex justify-content-between w-50 mt-3 mx-auto">
        {
          buttons.map((button, index)=> {
           return <Button key={index} color={button.color} text={button.text}  />
            
          })
        }
        {/* <Button color={buttons[0].text} text={buttons[0].color}  />
        <Button color="success" size="big" text="some text" count={8}/>
        <Button /> */}
      </div>
    </div>
  )
}

export default App
