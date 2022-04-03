import React from "react";
import {Link} from 'react-router-dom'



const NestMenu = () => {
 
  return (
    <>
      <nav className="NestMenu">
        <ul>
          <li>
            <Link to="/nest/nest2">Nest2</Link>            
          </li>                   
          <li>
            <Link to="/nest/nest3">Nest3</Link>            
          </li>          
        </ul>
      </nav>

    </>
    
  );
}

  
  export default NestMenu;