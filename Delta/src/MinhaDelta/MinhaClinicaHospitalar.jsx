import React from "react";
import './MinhaClinicaHospitalar.css';
import MenuMinhaDelta from "./MenuMinhaDelta";
import {Link} from "react-router-dom";

const life1000 = require('../assets/Life1000.jpeg');

export default function MinhaClinicaHospitalar(props){    
    return (
        <main className="minhaClinicaHospitalar">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta/></div> 
            <div className="divMinhaClinicaHospitalar">                
                <div className="produtoClinicaHosp"></div>
                    <Link to="/produtos/life1000" onClick={()=>props.produto("Life1000")} >
                        <img src={life1000}  alt="Life 1000"/>
                        <h2>Life 1000</h2>
                        <h3>Monitor multiparamétrico médico-hospitalar humano</h3>
                    </Link>           
            </div>
        </main>
    )
}