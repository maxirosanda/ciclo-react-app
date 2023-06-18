import { useEffect, useState } from 'react'
import Component from './index'

const CounterController = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
      console.log("montado de componente")
      return(console.log("desmontado de componente"))
    },[])
  
    useEffect(()=>{
      console.log("actualizacion de componente")
    },[count])
  
    return <Component count={count} setCount={setCount}/>
}

export default CounterController