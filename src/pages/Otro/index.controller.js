import Component from './index'
import { useParams } from "react-router-dom";

const OtroController = () => {
  const {id} = useParams();
    return <Component id={id}/>
}

export default OtroController