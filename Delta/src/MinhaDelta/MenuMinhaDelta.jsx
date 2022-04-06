import "./MenuMinhaDelta.css"
import React from "react";
import './MeusPedidos';
import {Link} from 'react-router-dom'

import clicou from "../Actions/menu"

export default function MenuMinhaDelta(props){ 

    return (
            <nav className="menuMinhaDelta">                
                    <ul>
                        <Link  to="/minhadelta"  onClick={()=>clicou("/minhadelta")}>{/*<li className="selecionado">*/}<li> Home</li></Link>
                        <Link to="/minhadelta/meuspedidos" onClick={()=>clicou("/minhadelta/meuspedidos")}><li className="">Meus Pedidos</li></Link>
                        <Link to="/minhadelta/boletos" onClick={()=>clicou("/minhadelta/boletos")}><li className="">Boletos</li></Link>                         
                        <Link to="/minhadelta/meuhistorico" onClick={()=>clicou("/minhadelta/meuhistorico")}><li className="">Meu histórico de pedidos</li></Link> 
                        <Link to="/minhadelta/minhaclinica" onClick={()=>clicou("/minhadelta/minhaclinica")}><li className="">Minha clínica</li></Link>                        
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