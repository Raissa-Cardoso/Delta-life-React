import React from "react";
import './Produtos.css';


const dl1000 = require('../assets/vet1.jpeg');


export default function DL1000(props){    
    return (
        <main className="DL1000">            
            <div className="DL1000ComTexto">
                <div className="DL1000Textos">
                    <h1>DL1000</h1>
                    <h2>Monitor Multiparamétrico Touch screen</h2>
                    <p>Uso veterinário</p>
                    <h3>É um equipamento fundamental para clínicas
                         e hospitais veterinários. Ele detecta sinais vitais do paciente e exibe os resultados 
                         simultaneamente para a efetividade do acompanhamento cirúrgico. Como possui alarmes 
                         configuráveis, o DL1000 oferece suporte necessário para que seu paciente esteja 
                         seguramente monitorado.</h3>                    
                    <h2 id="caracteristicas">Característica gerais</h2>
                    <ul>
                        <li>Alto desempenho em baixa perfusão</li>
                        <li>Cabo paciente de 5 vias</li> 
                        <li>Cabo sensor de temperatura retal, com 3 m de comprimento cada</li>
                        <li>Conexão USB</li>
                        <li>5 manguitos com tamanhos diferentes</li>
                        <li>Software para gravação de exames de ECG dos pacientes</li>
                        <li>Sistema de análise por impressão</li>
                        <li>Fácil instalação</li>
                        <li>Cursores eletrônicos para medidas</li>
                        <li>Geração de laudo eletrônico de ECG para envio ao cliente</li>
                        <li>Detector de respiração</li>
                    </ul>
                    <div className="duvidas">
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
                    <img src={dl1000}  alt="DL1000"/> 
                </div> 
                <div className="fundoFoto">
                </div>              

            </div>
                       
       
            
        </main>
    )
}