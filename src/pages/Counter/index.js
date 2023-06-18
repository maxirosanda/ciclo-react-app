import './index.css'
import { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
      console.log("montado de componente")
      return(console.log("desmontado de componente"))
    },[])
  
    useEffect(()=>{
      console.log("actualizacion de componente")
    },[count])
  
    return(
        <>
        <h1>Hola</h1>
        <span>{count}</span>
        <button onClick={()=>setCount(count + 1)}>Click</button>
        </>
    )
}

export default Counter