import './index.css'
import { useParams } from "react-router-dom";

const Otro = () => {
    const {id} = useParams();
    return(
        <>
        <h1>Otro {id}</h1>
        </>
    )
}

export default Otro