import React from "react";
import './Busca.css'

export default function Busca(props){    
    return (
        <div className="busca">
            <input type="text" placeholder="Pesquisa"/> 
            <button className="lupa">
                <i className="fa fa-search"/>
            </button>
        </div>
    )
}