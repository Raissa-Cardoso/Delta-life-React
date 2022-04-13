import "./MenuMinhaDelta.css"
import React from "react";
import '../MeusPedidos/MeusPedidos';
import {Link} from 'react-router-dom'

export default function MenuMinhaDelta(props){      
    let home, meusPedidos, boletos, meuHistorico, minhaClinica, calibracoes, duvidas, assistencia =""  
    
    switch (props.url) {
        case "meuspedidos":
            meusPedidos="selecionado"
            break;
        case "boletos":
            boletos="selecionado"
            break;
        case "meuHistorico":
            meuHistorico="selecionado"
            break;
        case "minhaClinica":
            minhaClinica="selecionado"
            break;
        case "calibracoes":
            calibracoes="selecionado"
            break;
        case "duvidas":
            duvidas="selecionado"
            break;
        case "assistencia":
            assistencia="selecionado"
            break;
        default:
            home="selecionado"
            break;
    }

    return (
            <nav className="menuMinhaDelta">                
                <ul>
                    <li><Link className={home} to="/minhadelta">Home</Link></li>
                    <li><Link className={meusPedidos} to="/minhadelta/meuspedidos">Meus Pedidos</Link></li>
                    <li><Link className={boletos} to="/minhadelta/boletos">Boletos</Link>  </li>                       
                    <li><Link className={meuHistorico} to="/minhadelta/meuhistorico" >Meu histórico de pedidos</Link></li> 
                    <li><Link className={minhaClinica} to="/minhadelta/minhaclinica" >Minha clínica</Link></li>                       
                    <li><Link className={calibracoes} to="/minhadelta/calibracoes" >Calibrações</Link></li> 
                    <li><Link className={duvidas} to="/minhadelta/duvidas" >Dúvidas frequentes</Link> </li>
                    <li><Link className={assistencia} to="/minhadelta/assistencia" >Assistência Técnica</Link></li> 
                </ul>
            </nav> 
    )
}  