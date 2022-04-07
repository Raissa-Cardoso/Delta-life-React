import React from "react";
import './Duvidas.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

export default function Duvidas(props){    
    return (
        <main className="duvidas">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta/></div>
            <div className="divDuvidas">
                <div className="pesquisaDuvidas">
                    <h1>Encontre mais soluções</h1>
                    <input type="text" name="" id="" placeholder="Digite sua dúvida" />                  
                </div>
               <div className="topicosDuvidas">
                <h2>Tópicos mais pesquisados</h2>
                    <ul>
                        <li><a href="http://">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a></li>
                        <li><a href="http://">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a></li>   
                        <li><a href="http://">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a></li>
                        <li><a href="http://">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a></li>
                        <li><a href="http://">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a></li>
                    </ul>
               </div>               
            </div>
            
        </main>
    )
}