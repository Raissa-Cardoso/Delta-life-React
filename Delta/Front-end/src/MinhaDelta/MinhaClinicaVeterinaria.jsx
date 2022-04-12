import React from "react";
import './MinhaClinicaVeterinaria.css';
import MenuMinhaDelta from "./MenuMinhaDelta";
import {Link} from "react-router-dom";

const dl740 = require('../assets/DL740.jpeg');
const dl1000 = require('../assets/DL1000.jpeg');
const dl4000 = require('../assets/DL4000.jpeg');

export default function MinhaClinicaVeterinaria(props){    
    return (
        <main className="minhaClinicaVeterinaria">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta/></div> 
            <div className="divMinhaClinicaVeterinaria">
                <div className="produtoMinhaClinicaVet">
                    <Link to="/produtos/DL1000" onClick={()=>props.produto("DL1000")}  >
                        <img src={dl1000}  alt="DL1000"/>  
                        <h2>DL1000</h2>
                        <h3>Monitor multiparamétrico veterinário (touch screen) </h3> 
                    </Link>  
                </div>
                <div className="produtoMinhaClinicaVet">
                    <Link to="/produtos/DL740" onClick={()=>props.produto("DL740")} >
                        <img src={dl740}  alt="DL740"/>
                        <h2>DL740</h2>
                        <h3>Aparelho de anestesia inalatória veterinário com ventilação com pedestal</h3>
                    </Link>             
                </div>
                <div className="produtoMinhaClinicaVet">
                    <Link to="/produtos/DL4000" onClick={()=>props.produto("DL4000")} >
                        <img src={dl4000}  alt="DL4000"/>  
                        <h2>DL4000</h2>
                        <h3>Foco 24 LEDs de pedestal</h3>  
                    </Link>  
                </div>
            </div>
        </main>
    )
}