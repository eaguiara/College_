import { useState } from 'react'
import './App.css'
import teste from './images/teste.jpg'
import branco from './images/branco.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>      
          <img src={teste} className="logo"  />      
          <img src={branco} className="logo react"/>
      </div>
    </div>
  )
}

export default App
