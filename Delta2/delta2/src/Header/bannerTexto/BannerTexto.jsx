import React from "react";
import './BannerTexto.css'

export default function BannerTexto(props){
    return (
        <div className="bannerTexto">
            <h2>Soluções em </h2>
            <h2>equipamentos hospitalares</h2>  
            <div className="bannerBotão">            
                <button className="botão">Veja mais</button> 
            </div>          
        </div>

    )
}