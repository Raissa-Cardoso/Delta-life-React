import React from "react";
import './BannerTexto.css'

export default function BannerTexto(props){   
    
    return (
        <div className="bannerTexto" slider="true">
            <h2>Soluções em <br/>equipamentos hospitalares</h2>  
            <h2>Soluções em <br/>equipamentos veterinários</h2>
            <h2>Laudos a distância<br/> Especialistas ao seu dispor</h2>
            <h2>Serviços de manutenções<br/> e substituições de peças</h2>
            <div className="bannerBotão">            
                <button className="botão">Veja mais</button> 
            </div>          
        </div>

    )
}