import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';




import NestMenu from "./NestMenu"
import NestMain from "./NestMain"


export default function Nest() {    
    return (
      <div className="Nest">
       <Router> 
         <div>
            <NestMenu/>
        </div>                      
        <div>
            <NestMain/>
        </div>
                  
      </Router>     
    
       
    </div>
)
}
