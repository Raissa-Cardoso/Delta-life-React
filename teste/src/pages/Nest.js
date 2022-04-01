import React from "react";
import "./Nest.css";
import {Router} from "react-router-dom";

import NestMenu from "./NestMenu";
import NestMain from "./NestMain"

const Nest = () => {
  return (
    <div className="Nest">
      <Router>
      <div className="nestMenu">
        <h2><NestMenu/></h2>
      </div>
      <div className="nestMain">
        <h2><NestMain/></h2>
      </div>
      </Router>
    </div>
  )
}

export default Nest;

