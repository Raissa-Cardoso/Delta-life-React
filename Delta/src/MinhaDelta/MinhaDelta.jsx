import React from "react";
import './MinhaDelta.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

const DL1000 = require('../assets/vet1.jpeg');

export default function MinhaDelta(props){    
    return (
        <main className="MinhaDelta">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta/> </div>
            <h1>Seja bem-vindo(a)!!</h1>
        </main>
)
}