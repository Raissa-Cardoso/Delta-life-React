import "../src/Main/Main.css"
import React from "react";
import {Routes, Route } from 'react-router-dom';

import Main from "./Main/Main"
import Assinaturas from "./Assinaturas/Assinaturas"

const Principal = () => {
    return(
      <main className='Main'>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/assinaturas" element={<Assinaturas />}/>
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;