import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App

