import './index.css'

const Component = ({count,setCount}) => {

    return(
        <>
        <h1>Hola</h1>
        <span>{count}</span>
        <button onClick={()=>setCount(count + 1)}>Click</button>
        </>
    )
}

export default Component