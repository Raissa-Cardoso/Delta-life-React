import "./MenuMinhaDelta.css"
import React from "react";
import './MeusPedidos';
import {Link} from 'react-router-dom'



export default function MenuMinhaDelta(props){   
    
    return (
            <nav className="menuMinhaDelta">                
                    <ul>
                        <Link to="/minhadelta" ><li>Home</li></Link>
                        <Link to="/minhadelta/meuspedidos" ><li>Meus Pedidos</li></Link>
                        <Link to="/minhadelta/boletos" ><li>Boletos</li></Link> 
                        
                        <li>
                            <a href="">Meu histórico de pedidos</a>
                        </li>
                        <li>
                            <a href="">Minha clínica</a>
                        </li>
                        <li>
                            <a href="">Calibrações</a>
                        </li>
                        <li>
                            <a href="">Dúvidas frequentes</a>
                        </li>
                        <li>
                            <a href="">Assistência Técnica</a>
                        </li>
                    </ul>
                </nav> 
    )
}  