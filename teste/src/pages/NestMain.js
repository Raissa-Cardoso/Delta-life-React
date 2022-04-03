import  "./Nest.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Nest2 from "./Nest2";
import Nest3 from "./Nest3";
import NestMenu from "./NestMenu"
import NestMainFuncao from "./NestMainFuncao"

const NestMain = () => {
    return(
      <main className='NestMain'>
      <h1> Nest Main</h1>
      <Routes>
        <Route path="/nest/nest2" element={<Nest2/>}/> 
        <Route path="/nest/nest3" element={<Nest3/>}>           
      </Route>       
           
    </Routes>
    
    
      
    </main>
    );
  };
  
  export default NestMain;

  /*
          <Routes>
          <Route path="/nest2" element={<Nest2 />}/>         
      </Routes>*/