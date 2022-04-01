import React from "react";
import './Home.css';
import {Link} from 'react-router-dom'

const linha700 = require('../assets/vet8.jpeg');
const hosp1000 = require('../assets/hosp1.jpeg');
const linha1000 = require('../assets/vet1.jpeg');
const sobre= require("../assets/producao.png");
const logo=require('../assets/logo.jpg');

export default function Home(props){
    return (
        <div className="main">            
            <h1 id="maisVendidos">Mais Vendidos</h1>
            <main className="principal">            
                <div className="produto">
                    <Link to="/dl1000" >
                        <img src={linha1000}  alt="DL1000"/>  
                        <h2>DL1000</h2>
                        <h3>Monitor multiparamétrico veterinário (touch screen) </h3> 
                    </Link>                 
                </div>                 
                <div className="produto">
                    <Link to="/dl740" >
                        <img src={linha700}  alt="DL740"/>
                        <h2>DL740</h2>
                        <h3>Aparelho de anestesia inalatória veterinário com ventilação com pedestal</h3>
                    </Link>
                </div>
                <div className="produto">
                    <Link to="/life1000" >
                    <img src={hosp1000}  alt="Life 1000"/>
                    <h2>Life 1000</h2>
                    <h3>Monitor multiparamétrico médico-hospitalar humano</h3>
                    </Link>
                </div>                 
            </main>
            <div className="sobre">
                <img src={sobre}  alt="produção DL1000"/>
                <div className="sobreTexto">
                    <img  src={logo}  alt="logo Delta Life"/>
                    <h2>Sobre a Delta Life</h2>
                    <h3>A Delta Life surgiu com o objetivo de fornecer soluções inteligentes para área da saúde,
                         utilizando alta tecnologia no desenvolvimento de novos equipamentos médicos.</h3>
                    <div>
                        <Link to="/sobre" >           
                            <button className="botão">Saiba mais</button>
                        </Link> 
                    </div> 
                </div>                
            </div>
            <div className="parceirosComTexto">
                <h2>Nossos clientes e parceiros</h2>
                <div className="parceiros">
                    <div className="parceiro">
                    </div>
                    <div className="parceiro">
                    </div>
                    <div className="parceiro">
                    </div>
                    <div className="parceiro">
                    </div>
                </div>
            </div>
        </div>
    )
}