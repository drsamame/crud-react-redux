import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">Proyecto React Redux</h1>
    </>
  )
}

export default App
