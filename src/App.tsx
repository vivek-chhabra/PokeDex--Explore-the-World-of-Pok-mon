import { useState } from 'react'
import './App.scss'
import Navbar from './Components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar/>
    </div>
  )
}

export default App
