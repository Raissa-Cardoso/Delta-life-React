import React from "react";
import './Busca.css';

export default function Busca(props){ 
    document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {        
            let busca = document.querySelector("#busca");
            console.log(busca.value)
        }
    })
    return (
        <div className="busca">
            <input id="busca" type="text" placeholder="Pesquisa"/> 
            <button className="lupa">
                <i className="fa fa-search"/>
            </button>
        </div>
    )
}