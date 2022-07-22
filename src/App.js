import './App.css'
import CustomButton from './components/button/index'
import List from './components/list/index'

import users from './assets/mock_users' //Mock data de los usuarios ( array )

import Shape from './components/shape'

function App () {
  const shapes = [
    {
      shape: 'square',
      color: 'red'
    },
    {
      shape: 'circle',
      color: 'blue'
    },
    {
      shape: 'rectangle',
      color: 'green'
    },
    {
      shape: 'circle',
      color: 'black'
    },
    {
      shape: 'square',
      color: 'yellow'
    },
    {
      shape: 'rectangle',
      color: 'red'
    }
  ]
  return (
    <div className="App">
      <div className="circle bg-red"></div>
  
  </div>
  )
}

export default App