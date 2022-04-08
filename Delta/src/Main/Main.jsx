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
import MeuHistorico from "../MinhaDelta/MeuHIstorico";
import MinhaClinica from "../MinhaDelta/MinhaClinica";
import MinhaClinicaVeterinaria from "../MinhaDelta/MinhaClinicaVeterinaria";
import MinhaOndontoVeterinaria from "../MinhaDelta/MinhaOdontoVeterinaria";
import MinhaClinicaHospitalar from "../MinhaDelta/MinhaClinicaHospitalar";
import DL4000 from "../Produtos/DL4000";
import Calibracoes from "../MinhaDelta/Calibracoes";
import Assistencia from "../MinhaDelta/Assistencia";
import Duvidas from "../MinhaDelta/Duvidas";
import VejaMais0 from "../VejaMais0";
import VejaMaisHospitalar from "../VejaMais/VejaMaisHospitalar";
import VejaMaisVeterinario from "../VejaMais/VejaMaisVeterinario";
import VejaMaisLaudos from "../VejaMais/VejaMaisLaudos";
import VejaMaisManutencao from "../VejaMais/VejaMaisManutencao";

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
          <Route path="/dl4000" element={<DL4000/>}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/minhadelta" element={<MinhaDelta />}/>
          <Route path="/minhadelta/meuspedidos" element={<MeusPedidos />}/>
          <Route path="/minhadelta/boletos" element={<Boletos />}/>
          <Route path="/minhadelta/meuhistorico" element={<MeuHistorico />}/>
          <Route path="/minhadelta/minhaclinica" element={<MinhaClinica />}/>
          <Route path="/minhadelta/minhaclinica" element={<MinhaClinica />}/>
          <Route path="/minhadelta/minhaclinicaveterinaria" element={<MinhaClinicaVeterinaria />}/> 
          <Route path="/minhadelta/minhaclinicaodontologiaveterinaria" element={<MinhaOndontoVeterinaria />}/>
          <Route path="/minhadelta/minhaclinicahospitalar" element={<MinhaClinicaHospitalar />}/> 
          <Route path="/minhadelta/calibracoes" element={<Calibracoes />}/> 
          <Route path="/minhadelta/duvidas" element={<Duvidas />}/> 
          <Route path="/minhadelta/assistencia" element={<Assistencia />}/>    
          <Route path="/vejamais0" element={<VejaMais0 />}/>   
          <Route path="/vejamais/hospitalar" element={<VejaMaisHospitalar />}/> 
          <Route path="/vejamais/veterinario" element={<VejaMaisVeterinario />}/> 
          <Route path="/vejamais/laudos" element={<VejaMaisLaudos />}/> 
          <Route path="/vejamais/manutencao" element={<VejaMaisManutencao />}/> 
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;