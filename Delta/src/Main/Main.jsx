import "../../src/Home/Home.css"
import {React,useState} from "react";
import {Routes, Route } from 'react-router-dom';

import Home from "../Home/Home"
import LinhaVeterinaria from "../Linhas/LinhaVeterinaria"
import LinhaHospitalar from "../Linhas/LinhaHospitalar";
import Assinaturas from "../Assinaturas/Assinaturas"
import Contato from '../Contato/Contato'
import Login from "../Login/Login"
import Sobre from "../Sobre/Sobre";
import MinhaDelta from "../MinhaDelta/MinhaDelta";
import MeusPedidos from "../MinhaDelta/MeusPedidos";
import Boletos from "../MinhaDelta/Boletos";
import MeuHistorico from "../MinhaDelta/MeuHIstorico";
import MinhaClinica from "../MinhaDelta/MinhaClinica";
import MinhaClinicaVeterinaria from "../MinhaDelta/MinhaClinicaVeterinaria";
import MinhaOndontoVeterinaria from "../MinhaDelta/MinhaOdontoVeterinaria";
import MinhaClinicaHospitalar from "../MinhaDelta/MinhaClinicaHospitalar";
import Calibracoes from "../MinhaDelta/Calibracoes";
import Assistencia from "../MinhaDelta/Assistencia";
import Duvidas from "../MinhaDelta/Duvidas";
import VejaMaisHospitalar from "../VejaMais/VejaMaisHospitalar";
import VejaMaisVeterinario from "../VejaMais/VejaMaisVeterinario";
import VejaMaisLaudos from "../VejaMais/VejaMaisLaudos";
import VejaMaisManutencao from "../VejaMais/VejaMaisManutencao";
import Produtos from "../Produtos/Produtos";
import MinhaDeltaIntranet from "../MinhaDelta/MinhaDeltaIntranet";

const Principal = (props) => {  
  const [produtoMain, setProduto]=useState("")  
  function mudarProduto(produto){
    setProduto(produto)
  }
  
   
    return(
      <main className='Main'>
        <Routes>
          <Route path="/" element={<Home produto={mudarProduto}/>}/>
          <Route path="/linhaVeterinaria" element={<LinhaVeterinaria produto={mudarProduto}/>}/>
          <Route path="/linhaHospitalar" element={<LinhaHospitalar produto={mudarProduto}/>}/>
          <Route path="/assinaturas" element={<Assinaturas />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/produtos/dl1000" element={<Produtos produto="DL1000"/>}/>
          <Route path="/produtos/dl740" element={<Produtos produto={produtoMain}/>}/> 
          <Route path="/produtos/life1000" element={<Produtos produto={produtoMain}/>}/>
          <Route path="/produtos/dl4000" element={<Produtos produto={produtoMain}/>}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/minhadelta" element={<MinhaDelta />}/>
          <Route path="/intranet" element={<MinhaDeltaIntranet />}/>
          <Route path="/minhadelta/meuspedidos" element={<MeusPedidos />}/>
          <Route path="/minhadelta/boletos" element={<Boletos />}/>
          <Route path="/minhadelta/meuhistorico" element={<MeuHistorico />}/>
          <Route path="/minhadelta/minhaclinica" element={<MinhaClinica />}/>          
          <Route path="/minhadelta/minhaclinicaveterinaria" element={<MinhaClinicaVeterinaria produto={mudarProduto}/>}/> 
          <Route path="/minhadelta/minhaclinicaodontologiaveterinaria" element={<MinhaOndontoVeterinaria produto={mudarProduto}/>}/>
          <Route path="/minhadelta/minhaclinicahospitalar" element={<MinhaClinicaHospitalar produto={mudarProduto}/>}/> 
          <Route path="/minhadelta/calibracoes" element={<Calibracoes />}/> 
          <Route path="/minhadelta/duvidas" element={<Duvidas />}/> 
          <Route path="/minhadelta/assistencia" element={<Assistencia />}/>  
          <Route path="/vejamais/hospitalar" element={<VejaMaisHospitalar />}/> 
          <Route path="/vejamais/veterinario" element={<VejaMaisVeterinario />}/> 
          <Route path="/vejamais/laudos" element={<VejaMaisLaudos />}/> 
          <Route path="/vejamais/manutencao" element={<VejaMaisManutencao />}/> 
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;

  //path={`/produtos/${produtoMain}`}