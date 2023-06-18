import './index.css'
import { NavLink } from "react-router-dom";
const Navegador = () => {
    return(
       <nav>
        <ul>
            <li><NavLink to="/">Contador</NavLink></li>
            <li><NavLink to="/otro">Otro</NavLink></li>
        </ul>
       </nav>
    )
}

export default Navegador