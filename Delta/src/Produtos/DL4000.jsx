import React from "react";
import './Produtos.css';


const dl4000 = require('../assets/vet2.jpeg');


export default function DL4000(props){    
    return (
        <main className="DL1000">            
            <div className="DL1000ComTexto">
                <div className="DL1000Textos">
                    <h1>DL4000</h1>
                    <h2>Foco 24 LEDs com pedestal</h2>
                    <p>Foco cirúrgico</p>
                    <h3>O Foco cirúrgico Delta Life é mais um equipamento desenvolvido para 
                        facilitar consultas e procedimentos simples. </h3>                    
                    <h2 id="caracteristicas">Característica gerais</h2>
                    <ul>                        
                        <li>24 luzes LED na cúpula</li>
                        <li>Dois tipos de luz: branco frio e amarelo quente</li>
                        <li>Baixo consumo</li> 
                        <li>Maior luminosidade</li>
                        <li>Não esquenta o ambiente</li>
                        <li>Diminui a necessidade do uso do centro cirúrgico em exames e procedimentos simples</li>
                         
                    </ul>
                    <div className="duvidasProduto">  
                        <h2 id="duvidas">Dúvidas frequentes</h2>
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
                    <img src={dl4000}  alt="DL4000"/> 
                </div> 
                <div className="fundoFoto">

                </div>              

            </div>
                       
       
            
        </main>
    )
}