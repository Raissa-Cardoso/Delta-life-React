import React from "react";
import './Produtos.css';


const dl740 = require('../assets/vet8.jpeg');


export default function DL740(props){    
    return (
        <main className="DL1000">            
            <div className="DL1000ComTexto">
                <div className="DL1000Textos">
                    <h1>DL740</h1>
                    <h2>Aparelho de anestesia inalatória com ventilação</h2>
                    <p>Uso veterinário</p>
                    <h3>Sistema de Anestesia destinado à administração de gases e/ou vapores anestésicos 
                        através de respiração espontânea ou controlada, manual ou mecânica. Fabricado, em chapa
                        de aço carbono/alumínio e pintado com tinta a pó eletrostática híbrida e resistente a 
                        produtos químicos.</h3>                    
                    <h2 id="caracteristicas">Característica gerais</h2>
                    <ul>
                        <li>Ventilação micro processada</li>
                        <li>Ajuste digital para pressão</li>
                        <li>Ajuste digital para freqüência respiratória</li> 
                        <li>Ajuste digital de tempo inspiratório</li>
                        <li>Pressão máxima obtida pela ventilação</li>
                        <li>Pressão atual pulmonar</li>
                        <li>Relação inspiração expiração</li>
                        <li>Possibilita ciclar por pressão e tempo</li>
                        <li>Vaporizador universal, com ajustes para os diferentes tipos de anestésicos</li>
                        <li>Equipamento com pedestal, disponível nas opções em maleta e de bancada</li>  
                    </ul>
                    <div className="duvidas">
                       
                            <h2>Dúvidas frequentes</h2>
                        
                        
                            <input list="listaDuvidas"/>                    
                                <datalist id="listaDuvidas">
                                    <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                                    <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                                    <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                                    <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                                    <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                                </datalist>
                            <button>OK</button>
                        
                        
                    </div>    
                </div>
                <div className="fotoDL1000">
                    <img src={dl740}  alt="DL740"/> 
                </div> 
                <div className="fundoFoto">

                </div>              

            </div>
                       
       
            
        </main>
    )
}