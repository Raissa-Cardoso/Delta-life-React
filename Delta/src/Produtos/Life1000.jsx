import React from "react";
import './Produtos.css';


const dl740 = require('../assets/hosp1.jpeg');


export default function Life1000(props){    
    return (
        <main className="DL1000">            
            <div className="DL1000ComTexto">
                <div className="DL1000Textos">
                    <h1>Life1000</h1>
                    <h2>Monitor Multiparamétrico</h2>
                    <h3>O LIFE 1000 é destinado à monitorização de pacientes adultos, pediátricos e 
                        neonatais em ambiente ambulatórios de emergência ou unidades de tratamento intensivo. 
                        Equipamento deve ser operado por profissionais da saúde. Por ser um equipamento 
                        portátil, também pode ser utilizado para o transporte de pacientes.</h3>                    
                    <h2 id="caracteristicas">Característica gerais</h2>
                    <ul>
                        <li>Tela de LCD touchscreen de 8 polegadas</li>
                        <li>Permite a visualização de 7 derivações do ECG ( DI, DII, DIII, aVF, aVR, aVL e V )</li>
                        <li>Frequência cardíaca pelo ECG</li> 
                        <li>Saturação deoxigênio (SpO ) com curva pletismográfica</li>
                        <li>Pulso cardíaco pelo oxímetro</li>
                        <li>Índice de perfusão</li>
                        <li>Temperatura (dois sensores)</li>
                        <li>Pressão arterial não invasiva (PANI)</li>
                        <li>Frequência respiratória (FR)</li>
                        <li>Exibe o histórico gráfico dos parâmetros mensurados</li> 
                        <li>Possibilita a programação de aferições da PANI periodicamente</li>
                        <li>Possibilita o ajuste dos parâmetros dos alarmes conforme cada paciente</li>
                    </ul>
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