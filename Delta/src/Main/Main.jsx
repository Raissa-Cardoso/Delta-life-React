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
import DL740 from "../Produtos/DL740";
import Life1000 from "../Produtos/Life1000";
import Sobre from "../Sobre/Sobre";

import MinhaDelta from "../MinhaDelta/MinhaDelta";
import MeusPedidos from "../MinhaDelta/MeusPedidos";
import Boletos from "../MinhaDelta/Boletos";

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
          <Route path="/dl740" element={<DL740 />}/>
          <Route path="/life1000" element={<Life1000 />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/minhadelta" element={<MinhaDelta />}/>
          <Route path="/minhadelta/meuspedidos" element={<MeusPedidos />}/>
          <Route path="/minhadelta/boletos" element={<Boletos />}/>

         {/* <Route path="/minhadelta" element={<AppMinhaDelta />}/>*/}
          
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;