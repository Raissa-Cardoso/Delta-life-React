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
import MinhaDelta from "../MinhaDelta/MinhaDeltaCliente/HomeMinhaDelta/MinhaDelta";
import MeusPedidos from "../MinhaDelta/MinhaDeltaCliente/MeusPedidos/MeusPedidos";
import Boletos from "../MinhaDelta/MinhaDeltaCliente/Boletos/Boletos";
import MeuHistorico from "../MinhaDelta/MinhaDeltaCliente/MeuHistorico/MeuHIstorico";
import MinhaClinica from "../MinhaDelta/MinhaDeltaCliente/MinhaClinica/HomeMinhaClinica/MinhaClinica";
import MinhaClinicaVeterinaria from "../MinhaDelta/MinhaDeltaCliente/MinhaClinica/MinhaClinicaVeterinaria/MinhaClinicaVeterinaria";
import MinhaOndontoVeterinaria from "../MinhaDelta/MinhaDeltaCliente/MinhaClinica/MinhaOdontoVeterinaria/MinhaOdontoVeterinaria";
import MinhaClinicaHospitalar from "../MinhaDelta/MinhaDeltaCliente/MinhaClinica/MinhaClinicaHospitalar/MinhaClinicaHospitalar";
import Calibracoes from "../MinhaDelta/MinhaDeltaCliente/Calibracoes/Calibracoes";
import Assistencia from "../MinhaDelta/MinhaDeltaCliente/Assistencia/Assistencia";
import Duvidas from "../MinhaDelta/MinhaDeltaCliente/Duvidas/Duvidas";
import VejaMaisHospitalar from "../VejaMais/VejaMaisHospitalar";
import VejaMaisVeterinario from "../VejaMais/VejaMaisVeterinario";
import VejaMaisLaudos from "../VejaMais/VejaMaisLaudos";
import VejaMaisManutencao from "../VejaMais/VejaMaisManutencao";
import Produtos from "../Produtos/Produtos";
import HomeIntranet from "../MinhaDelta/Intranet/HomeIntranet/HomeIntranet";
import BalancoVendas from "../MinhaDelta/Intranet/BalancoVendas/BalancoVendas";
import HistoricoAcessos from "../MinhaDelta/Intranet/HistoricoAcessos/HistoricoAcessos";
import CadastrarProdutos from "../MinhaDelta/Intranet/CadastrarProdutos/CadastrarProdutos";
import CadastroLogin from "../CadastroLogin/CadastroLogin";
import AlterarDeletarProduto from "../MinhaDelta/Intranet/AlterarDeletarProduto/AlterarDeletarProduto";
import ProdutoAlteradoDeletado from "../MinhaDelta/Intranet/AlterarDeletarProduto/ProdutoAlteradoDeletado";


const Principal = (props) => {  
  let [produtoMain, setProduto]=useState("DL1000")   
  let [produtoAlterar, setProdutoAlterar]=useState("")  
  function mudarProduto(produto){    
    setProduto(produto)    
  } 
  function alterar(produto){
    setProdutoAlterar(produto)
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
          <Route path="/cadastroLogin" element={<CadastroLogin />}/>          
          <Route path={`/produtos/${encodeURIComponent(produtoMain)}`}element={<Produtos produto={produtoMain}/>}/> 
          <Route path={`/produtos/${props.produtoApp}`} element={<Produtos produto={props.produtoApp}/>}/>         
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/minhadelta" element={<MinhaDelta />}/>          
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
          <Route path="/intranet" element={<HomeIntranet />}/>
          <Route path="/intranet/cadastrarprodutos" element={<CadastrarProdutos />}/>  
          <Route path="/intranet/alterarproduto" element={<AlterarDeletarProduto alterar={alterar}/>}/> 
          <Route path={`/intranet/alterardeletarproduto/${encodeURIComponent(produtoAlterar)}`} element={<ProdutoAlteradoDeletado produto={produtoAlterar}/>}/>          
          <Route path="/intranet/historicoacessos" element={<HistoricoAcessos />}/>  
          <Route path="/intranet/balancovendas" element={<BalancoVendas />}/>  
          <Route path="/vejamais/hospitalar" element={<VejaMaisHospitalar />}/> 
          <Route path="/vejamais/veterinario" element={<VejaMaisVeterinario />}/> 
          <Route path="/vejamais/laudos" element={<VejaMaisLaudos />}/> 
          <Route path="/vejamais/manutencao" element={<VejaMaisManutencao />}/> 
      </Routes>
        
      </main>
    );
  };
  
  export default Principal;

  