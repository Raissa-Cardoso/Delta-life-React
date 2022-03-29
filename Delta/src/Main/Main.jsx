import "../../src/Home/Home.css"
import React from "react";
import {Routes, Route } from 'react-router-dom';

import Home from "../Home/Home"
import LinhaVeterinaria from "../Linhas/LinhaVeterinaria"
import LinhaHospitalar from "../Linhas/LinhaHospitalar";

import Assinaturas from "../Assinaturas/Assinaturas"
import Contato from '../Contato/Contato'
import Login from "../Login/Login"
import DL1000 from "../Produtos/DL1000";

const Principal = () => {
    return(
      <main className='Main'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/linhaVeterinaria" element={<LinhaVeterinaria />}/>
          <Route path="/linhaHospitalar" element={<LinhaHospitalar />}/>
          <Route path="/assinaturas" element={<Assinaturas />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dl1000" element={<DL1000 />}/>
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;