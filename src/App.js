import './App.css'
import { useState } from 'react'

function App () {
  const [title, setTitle] = useState("Hola Koders!")
  let userData = {}
  const inputHandler = (event)=> {
    console.log(event.target.value)
  }

  const saveHandler = (event) => {
    event.preventDefault() //Evita el comportamiento por default
    alert("Datos guardados")
  }
  
  return (
    <div className='App'>
     <form actions="" className='bg-dark text-white border p-3 w-50 mx-auto rounded'>
      <div className='form-group'>
        <label htmlFor="">Nombre</label>
        <input type="text" className='form-control' onChange={inputHandler}></input>
      </div>
      <div className='form-group'>
        <label htmlFor="">Email</label>
        <input type="text" className='form-control' onChange={inputHandler}></input>
      </div>
      <button  onClick={saveHandler}></button>
     </form>
    </div>
  )
}

export default App