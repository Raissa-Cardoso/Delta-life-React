import React from "react";
import './Menu.css'

export default function Menu(props){
    return (
        <div className="menu">
             <nav>
                <ul className="navegacao">
                    <li>
                        <a href="index.html">Home</a>
                    </li>                    
                    <li>
                        <a href="#produtos">Produtos</a>              
                    </li>
                    <li>
                        <a href="#minhaDelta">Minha Delta</a>
                    </li>
                    <li>
                        <a href="#laudos">Assinaturas</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </nav> 
            <button className="menu-toggle">
                <i className="fa fa-lg fa-bars"></i>
            </button>         

        </div>
    )
}