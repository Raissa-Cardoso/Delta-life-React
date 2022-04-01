import React from "react";
import {Link} from 'react-router-dom'



const NestMenu = () => {
 
  return (
    <div>      
      <ul>
        <li>
          <Link to={`/nestMain`}>Nest2</Link>
        </li>
        <li>
          <Link to={`/nest3`}>Nest3</Link>
        </li>
        <li><a href="">Teste</a></li>
        <li><a href="">Teste2</a></li>          
      </ul>
    </div>
    
  );
}

  
  export default NestMenu;