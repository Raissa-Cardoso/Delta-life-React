import './Teste.css'
import React from "react";
import {Routes, Route, Router} from 'react-router-dom';

import Home from "./Home";
import Nest from "./Nest"
import "./IndexNest"





const Teste = () => {
    return(
      <main className='Main' id="main">
        <Routes>
          <Route path="/" element={<Home />}/>          
          {/*<Route path="/nest2" element={<Nest />}/>          */}
          <Route path="/indexNest" element={<IndexNest />}/>
      </Routes>
        
      </main>
    );
  };
  
  export default Teste;