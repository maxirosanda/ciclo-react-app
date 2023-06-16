import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let[count,setCount] = useState(0)
  useEffect(()=>{
    console.log("montado de componente")
    return(console.log("desmontado de componente"))
  },[])
  useEffect(()=>{
    console.log("actualizacion de componente")
  },[count])
  return (
    <div className="App">
      <h1>Hola</h1>
      <span>{count}</span>
      <button onClick={()=>setCount(count++)}>Click</button>
    </div>
  )
}

export default App
