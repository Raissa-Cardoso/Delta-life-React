import React from "react";
import './MinhaDelta.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

const DL1000 = require('../assets/vet1.jpeg');

export default function Boletos(props){    
    return (
        <main className="MinhaDeltaCompleto">                        
            < MenuMinhaDelta/> 
            <h1>Meus Boletos</h1>
        </main>
)
}