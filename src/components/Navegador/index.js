import './index.css'
import { NavLink } from "react-router-dom";
const Component = () => {
    return(
       <nav>
        <ul>
            <li><NavLink className={({isActive}) => (isActive ? "active" : "" )} to="/">Contador</NavLink></li>
            <li><NavLink className={({isActive}) => (isActive ? "active" : "" )} to="/otro">Otro</NavLink></li>
             <li><NavLink className={({isActive}) => (isActive ? "active" : "" )} to="/otro2">Otro 2</NavLink></li>
        </ul>
       </nav>
    )
}

export default Component