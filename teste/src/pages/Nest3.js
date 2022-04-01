import React from 'react'
import "./Nest.css"
import {BrowserRouter as Router} from 'react-router-dom';




import NestMenu from "./NestMenu"
import NestMain from "./NestMain"


export default function Nest() {    
    return (
      <div className="Nest">
       {/*<Router> */}
         <div className='nestMenu'>
           {/* <NestMenu/>*/}
        </div>                      
        <div>
           {/* <NestMain className="nestMain"/>*/}
        </div>                  
     {/* </Router>  */}   
    
       
    </div>
)
}
