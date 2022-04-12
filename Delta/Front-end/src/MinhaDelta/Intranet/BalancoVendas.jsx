import React from "react";
import './BalancoVendas.css';
import MenuIntranet from "./MenuIntranet";

export default function BalancoVendas(props){  
     
    return (
        <main className="BalancoVendas">                        
            <div className="divMenuIntranet">< MenuIntranet url="balancoVendas"/></div>             
            <div className="datasBalancoComTitulo">
                <h1>Período:</h1>
                <div className="datasBalanco">
                    <p>De:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <p>Para:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <button>Buscar</button>
                </div> 
                <div className="balancoGrafico">
                    <div className="coluna">                        
                    </div>
                    <div className="coluna">                        
                    </div>
                    <div className="coluna">                        
                    </div>
                    <div className="coluna">                        
                    </div>
                    <div className="coluna">                        
                    </div>
                    <div className="coluna">                        
                    </div>
                </div>         
            </div>
        </main>
    )
}