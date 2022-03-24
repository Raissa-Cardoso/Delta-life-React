import React from "react";
import './Footer.css';


const logo=require('../assets/logo.jpg');

export default function Footer(props){
    return (
        <div>
            <footer className="rodape">
                <div className="logoMarca">
                    <img src={logo} alt="logo da Delta Life"/>
                    <p>&reg; 2022 | Delta Life</p>  
                </div>
                <div className="contato">
                    <h2>Contato</h2>
                    <p>Telefone: (12) 3966-2884</p>
                    <p>Suporte Técnico: (12) 99683-2433</p> 
                    <p>E-mail: contato@deltalife.com.br</p>
                </div>
                <div className="localização">
                    <h2>Localização</h2>
                    <p> Rua Salviano José da Silva, 445 </p>
                    <p>Centro Industrial e Empresarial Eldorado</p>
                    <p>São José dos Campos/SP</p>
                </div>        
            </footer>
        </div>
    )
}