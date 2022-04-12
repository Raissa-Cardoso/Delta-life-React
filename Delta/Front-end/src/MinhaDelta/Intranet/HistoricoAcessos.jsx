import React from "react";
import './HistoricoAcessos.css';
import MenuIntranet from "./MenuIntranet";

export default function HistoricoAcessos(props){  
     
    return (
        <main className="historicoAcessos">                        
            <div className="divMenuIntranet">< MenuIntranet url="historicoAcessos"/></div>             
            <div className="datasAcessoComTitulo">
                <h1>Período:</h1>
                <div className="datasAcesso">
                    <p>De:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <p>Para:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <button>Buscar</button>
                </div> 
                <div className="acessoGrafico">
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