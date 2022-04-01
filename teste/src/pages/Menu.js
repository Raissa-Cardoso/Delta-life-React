import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <nav className="Menu">
        <ul>
          <li>
            <Link to="/">Home</Link>            
          </li>                   
          <li>
            <Link to="/nest">Nest</Link>            
          </li>
          <li>
            <Link to="/recursivo">Recursivo</Link>            
          </li>
        </ul>
      </nav>

    </>
  )
};

export default Menu;