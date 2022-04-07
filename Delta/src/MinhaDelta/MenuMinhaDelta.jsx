import "./MenuMinhaDelta.css"
import React from "react";
import './MeusPedidos';
import {Link} from 'react-router-dom'

import clicou from "../Actions/menu"

export default function MenuMinhaDelta(props){
    console.log(props.url)    
    const link=document.getElementById(props.url)    

    return (
            <nav className="menuMinhaDelta">                
                <ul>
                    <li><Link className={props.classe} to="/minhadelta" onClick={()=>clicou("/minhadelta")}>Home</Link></li>
                    <li><Link to="/minhadelta/meuspedidos" onClick={()=>clicou("/minhadelta/meuspedidos")}>Meus Pedidos</Link></li>
                    <li><Link to="/minhadelta/boletos" onClick={()=>clicou("/minhadelta/boletos")}>Boletos</Link>  </li>                       
                    <li><Link to="/minhadelta/meuhistorico" onClick={()=>clicou("/minhadelta/meuhistorico")}>Meu histórico de pedidos</Link></li> 
                    <li><Link to="/minhadelta/minhaclinica" onClick={()=>clicou("/minhadelta/minhaclinica")}>Minha clínica</Link></li>                       
                    <li><Link to="/minhadelta/calibracoes" onClick={()=>clicou("/minhadelta/calibracoes")}>Calibrações</Link></li> 
                    <li><Link to="/minhadelta/duvidas" onClick={()=>clicou("/minhadelta/duvidas")}>Dúvidas frequentes</Link> </li>
                    <li><Link to="/minhadelta/assistencia" onClick={()=>clicou("/minhadelta/assistencia")}>Assistência Técnica</Link></li> 
                </ul>
            </nav> 
    )
}  