import React from "react";
import {Link,  Route, Routes} from 'react-router-dom'



const NestMenu = () => {
 
  return (
    <div>      
      <ul>
        <li>
          <Link to={`/nest2`}>Nest2</Link>
        </li>        
      </ul>
    </div>
    
  );
}

  
  export default NestMenu;