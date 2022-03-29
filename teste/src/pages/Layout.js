import './Layout.css'
import {Link} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className="Menu">
        <ul>
          <li>
            <Link to="/">Home</Link>            
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>            
          </li>          
        </ul>
      </nav>

    </>
  )
};

export default Layout;