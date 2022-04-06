import React from "react";
import '../Linhas/Linhas.css';
import {Link} from "react-router-dom";

const DL1000 = require('../assets/vet1.jpeg');
const DL4000 = require('../assets/vet2.jpeg');
const DL740 = require('../assets/vet3.jpeg');
const DL330 = require('../assets/vet4.jpeg');
const DL300 = require('../assets/vet6.jpeg');
const ECG = require('../assets/ecgsite_6.jpg');

export default function LinhaVeterinaria(props){
    return (
        <main className="linhaVeterinaria">
            <h1>Linha Veterinária</h1>           
            <div className="linhasProdutos">
                <div className="linhasProduto">
                    <Link to="/dl1000" >
                        <img src={DL1000}  alt="DL1000"/>
                        <h2>DL1000</h2>
                        <h3>Monitor multiparamétrico veterinário (touch screen) </h3> 
                    </Link>
                </div>
                <div className="linhasProduto">
                    <Link to="/dl4000" >
                        <img src={DL4000}  alt="DL4000"/>  
                        <h2>DL4000</h2>
                        <h3>Foco 24 LEDs de pedestal</h3>  
                    </Link>   
                </div>
                <div className="linhasProduto">
                    <img src={DL740}  alt="DL740"/>
                    <h2>DL740</h2>
                    <h3>Aparelho de anestesia inalatória com ventilação na maleta </h3> 
                </div>
                <div className="linhasProduto">
                    <img src={DL330}  alt="DL330"/>
                    <h2>DL330</h2>
                    <h3>Doppler Vascular Veterinário </h3> 
                </div>
                <div className="linhasProduto">
                    <img src={DL300}  alt="DL300"/>
                    <h2>DL300</h2>
                    <h3>Ultrassom Dentário </h3> 
                </div>
                <div className="linhasProduto">
                    <img src={ECG}  alt="ECG"/>
                    <h2>Cabo ECG</h2>
                    <h3>De conector circular PEQUENO - 5 eletrodos </h3> 
                </div>
            </div>
        </main>
    )
}