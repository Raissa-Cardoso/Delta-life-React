import React from "react";
import './Home.css';
import {Link} from 'react-router-dom'

const linha700 = require('../assets/DL740 Pedestal.jpeg');
const hosp1000 = require('../assets/Life1000.jpeg');
const linha1000 = require('../assets/DL1000.jpeg');
const sobre= require("../assets/producao.png");
const logo=require('../assets/logo.jpg');

export default function Home(props){
    return (
        <div className="main">            
            <h1 id="maisVendidos">Mais Vendidos</h1>
            <main className="principal">            
                <div className="produto">
                    <Link to="/produtos/DL1000" onClick={()=>props.produto("DL1000")}>
                        <img src={linha1000}  alt="DL1000"/>  
                        <h2>DL1000</h2>
                        <h3>Monitor multiparamétrico veterinário (touch screen) </h3> 
                    </Link>                 
                </div>                 
                <div className="produto">
                    <Link to="/produtos/DL740 Pedestal" onClick={()=>props.produto("DL740 Pedestal")}>
                        <img src={linha700}  alt="DL740"/>
                        <h2>DL740 Pedestal</h2>
                        <h3>Aparelho de anestesia inalatória veterinário com ventilação com pedestal</h3>
                    </Link>
                </div>
                <div className="produto">
                    <Link to="/produtos/Life1000" onClick={()=>props.produto("Life1000")}>
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
            <div className="parceirosComTitulo">
                <h2>Nossos parceiros e clientes</h2>
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
            <div className="depoimentosComTitulo">
                <h2>Depoimentos</h2>
                <div className="depoimentos">
                    <div className="depoimento">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Amet porro eveniet minus! Ipsa, ullam harum! Inventore quis distinctio eaque 
                            commodi expedita, totam sunt vero minus doloribus?
                            Magni illum asperiores molestiae?</p>
                        <p className="assinaturaDepoimento">Sr. Fulano</p>
                    </div>
                    <div className="depoimento">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Amet porro eveniet minus! Ipsa, ullam harum! Inventore quis distinctio eaque 
                            commodi expedita, totam sunt vero minus doloribus?
                            Magni illum asperiores molestiae?</p>
                        <p className="assinaturaDepoimento">Sr. Fulano</p>
                    </div>
                    <div className="depoimento">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Amet porro eveniet minus! Ipsa, ullam harum! Inventore quis distinctio eaque 
                            commodi expedita, totam sunt vero minus doloribus?
                            Magni illum asperiores molestiae?</p>
                        <p className="assinaturaDepoimento">Sr. Fulano</p>
                    </div>
                    <div className="depoimento">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Amet porro eveniet minus! Ipsa, ullam harum! Inventore quis distinctio eaque 
                            commodi expedita, totam sunt vero minus doloribus?
                            Magni illum asperiores molestiae?</p>
                        <p className="assinaturaDepoimento">Sr. Fulano</p>
                    </div>
                </div>
            </div>
        </div>
    )
}