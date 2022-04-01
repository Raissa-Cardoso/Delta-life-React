import React from "react";
import "./Nest.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import NestMenu from "./NestMenu";
import NestMain from "./NestMain"
import Nest2 from "./Nest2";

const Nest = () => {
  return (
    <div className="Nest">
      
        <NestMain />
                     
      
   </div>

  )
}


export default Nest;

/*<div className="Nest">
      <Router>
      <div className="nestMenu">
        <h2><NestMenu/></h2>
      </div>
      <div className="nestMain">
        <h2><NestMain/></h2>
      </div>
      </Router>
    </div>*/

