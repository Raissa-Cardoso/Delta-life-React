import React from "react";
import './Main.css';

const linha700 = require('../assets/vet8.jpeg');
const hosp1000 = require('../assets/hosp1.jpeg');
const linha1000 = require('../assets/vet1.jpeg');

export default function Main(props){
    return (
        <div className="main">            
            <h1 id="maisVendidos">Mais Vendidos</h1>
            <main className="principal">            
                <div className="produto">
                    <img src={linha1000}  alt="DL1000"/>  
                    <h2>DL1000</h2>
                    <h3>Monitor multiparamétrico veterinário (touch screen) </h3>                  
                </div> 
                
                <div className="produto">
                    <img src={linha700}  alt="DL740"/>
                    <h2>DL740</h2>
                    <h3>Aparelho de anestesia inalatória veterinário com ventilação com pedestal</h3>
                </div>
                <div className="produto">
                    <img src={hosp1000}  alt="Life 1000"/>
                    <h2>Life 1000</h2>
                    <h3>Monitor multiparamétrico médico-hospitalar humano</h3>
                </div>                 
            </main>
        </div>
    )
}