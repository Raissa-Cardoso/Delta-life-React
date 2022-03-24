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
                    <img src={linha1000}  alt="DL1000-Monitor Multiparametros Vet"/>
                </div> 
                <div className="produto">
                    <img src={linha700}  alt="DL740-Monitor Multiparametros Vet"/>
                </div>
                <div className="produto">
                    <img src={hosp1000}  alt="Life 1000-Monitor Multiparametros médico-hospitalar humano"/>
                </div>                 
            </main>
        </div>
    )
}