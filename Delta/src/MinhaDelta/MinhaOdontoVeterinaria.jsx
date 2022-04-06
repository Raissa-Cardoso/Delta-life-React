import React from "react";
import './MinhaOdontoVeterinaria.css';
import MenuMinhaDelta from "./MenuMinhaDelta";
import {Link} from "react-router-dom";

const dl740 = require('../assets/vet8.jpeg');

export default function MinhaOndontoVeterinaria(props){    
    return (
        <main className="minhaOdontoVeterinaria">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta/></div> 
            <div className="divMinhaOdontoVeterinaria">                
                <div className="produtoOdontoVet"></div>
                    <Link to="/dl740" >
                        <img src={dl740}  alt="DL740"/>
                        <h2>DL740</h2>
                        <h3>Aparelho de anestesia inalatória veterinário com ventilação com pedestal</h3>
                    </Link>             
            </div>
        </main>
    )
}