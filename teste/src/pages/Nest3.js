import  "./Nest.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Nest2 from "./Nest2";
import Nest3 from "./Nest3";
import NestMenu from "./NestMenu"
import NestMainFuncao from "./NestMainFuncao"

const NestMain = () => {
    return(
      <main className='Main'>
        <div className="nestMenu">
          <h2><NestMenu/></h2>
        </div>
        <div className="nestMain">
          <h2>Nest3</h2>
        </div>        
          
      </main>
    );
  };
  
  export default NestMain;