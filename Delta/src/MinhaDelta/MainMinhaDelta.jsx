import "./MinhaDelta.css";
import React from "react";
import {Routes, Route } from 'react-router-dom';

import MinhaDelta from "./MinhaDelta"
import Boletos from "./Boletos"

const Principal = () => {
    return(
      <main className='Main'>
        <Routes>
          <Route path="/minhaDelta" element={<MinhaDelta />}/>
          <Route path="/minhaDelta/boletos" element={<Boletos />}/>          
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;