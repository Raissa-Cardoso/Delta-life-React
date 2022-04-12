import React from "react";
import '../Linhas/Linhas.css';
import {Link} from "react-router-dom";

const VentLife = require('../assets/hosp3.3.jpeg');
const Life1000 = require('../assets/Life1000.jpeg');
const Term = require('../assets/termometro.png');

export default function LinhaHospitalar(props){
    return (
        <main className="linhaHospitalar">
            <h1>Linha Hospitalar</h1>           
            <div className="linhasProdutos">                
                <div className="linhasProduto">
                    <img src={VentLife}  alt="VentLife"/>
                    <h2>Vent Life</h2>
                    <h3>Ventilador Pulmonar Mecânico </h3> 
                </div>                
                <div className="linhasProduto">
                    <Link to="/produtos/Life1000" onClick={()=>props.produto("Life1000")}>
                        <img src={Life1000}  alt="Life1000"/>
                        <h2>Life1000</h2>
                        <h3>Monitor Multiparamétrico</h3> 
                    </Link>                
                </div>
                <div className="linhasProduto">
                    <img src={Term}  alt="Termometro"/>
                    <h2>INCOTERM TCI300</h2>
                    <h3>Termômetro Clínico Infravermelho</h3> 
                </div>
            </div>
        </main>
    )
}