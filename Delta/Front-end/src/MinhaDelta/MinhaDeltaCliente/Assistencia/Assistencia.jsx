import React from "react";
import './Assistencia.css';
import MenuMinhaDelta from "../MenuMinhaDelta/MenuMinhaDelta";

export default function Assistencia(props){    
    return (
        <main className="assistencia">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta url="assistencia"/> </div>
            <div className="divAssistencia">
                <div className="divAssistenciaTitulo">
                    <h1>Suporte Técnico</h1>                                           
                </div>            
                <div className="divAssistenciaContato">
                    <h2>(12) 99683-2433</h2>
                    <button className="assistenciaBotaoWhatsapp">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </button>
                </div> 
            </div>            
        </main>
    )
}