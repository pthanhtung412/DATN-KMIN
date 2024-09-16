import { useState } from 'react'
import Header from './components/Layouts/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
