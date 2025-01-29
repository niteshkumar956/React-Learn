import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(15)
  

  const addvalue = ()=>{
    console.log()
    setCounter(counter+1)
  }
  const removevalue = ()=>{
    console.log()
    setCounter(counter-1)
  }

  return (
    <>
    !-- <h1> chai aur code</h1>
    <h2> Counter Value : {counter}</h2>
<button onClick={addvalue}>ADD VALUE{addvalue}</button><br />
<button onClick={removevalue}>remove VALUE{removew
  }</button>

    </>
  )
}

export default App
