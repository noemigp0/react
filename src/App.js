import './App.css'
import { useState } from 'react'

function App () {
  const [title, setTitle] = useState("Hola Koders!")
  const [isLogged, setIsLogged] = useState(false)
  let userData = {}
  
  const inputHandler = event => {
    setTitle(event.target.value)
  }

  const loginHandler = () => {
    setIsLogged(true)
  }
  const logOutHandler = () => {
    setIsLogged(false)
  }

  return (
   <div className="App">
   { !isLogged && <button className='btn btn-success' onClick={loginHandler}>login</button>}
   { isLogged && <button className='btn btn-warning'  onClick={logOutHandler}>sing out</button>}
   </div>
  )

  }
export default App