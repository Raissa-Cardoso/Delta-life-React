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
            <Link to="/indexNest">Nest2</Link>            
          </li>
        </ul>
      </nav>

    </>
  )
};

export default Menu;