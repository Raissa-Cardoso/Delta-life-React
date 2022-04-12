import "./MenuIntranet.css"
import React from "react";
import {Link} from 'react-router-dom'

export default function MenuIntranet(props){      
    let home, cadastroProdutos, historicoAcessos, balancoVendas=""  
    
    switch (props.url) {
        case "cadastroProdutos":
            cadastroProdutos="selecionado"
            break;
        case "historicoAcessos":
            historicoAcessos="selecionado"
            break;
        case "balancoVendas":
            balancoVendas="selecionado"
            break;        
        default:
            home="selecionado"
            break;
    }

    return (
            <nav className="menuMinhaDelta">                
                <ul>
                    <li><Link className={home} to="/intranet">Home</Link></li>
                    <li><Link className={cadastroProdutos} to="/intranet/cadastrarprodutos">Cadastrar Produtos</Link></li>
                    <li><Link className={historicoAcessos} to="/intranet/historicoacessos">Histórico de acessos</Link>  </li>                       
                    <li><Link className={balancoVendas} to="/intranet/balancovendas" >Balanço de vendas</Link></li>                     
                </ul>
            </nav> 
    )
}  