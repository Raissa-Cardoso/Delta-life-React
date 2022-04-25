import "./MenuIntranet.css"
import React from "react";
import {Link} from 'react-router-dom'

export default function MenuIntranet(props){      
    let home, cadastroProdutos, historicoAcessos, balancoVendas,alterarProduto=""  
    
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
        case "alterarProduto":
            alterarProduto="selecionado"
            break;       
        default:
            home="selecionado"
            break;
    }

    return (
            <nav className="menuMinhaDelta">                
                <ul>
                    <li key="home"><Link className={home} to="/intranet">Home</Link></li>
                    <li key="cadastrar"><Link className={cadastroProdutos} to="/intranet/cadastrarprodutos">Cadastrar Produtos</Link></li>
                    <li key="alterar"><Link className={alterarProduto} to="/intranet/alterarproduto" >Alterar/Deletar Produto</Link></li>                     
                    <li key="historico"><Link className={historicoAcessos} to="/intranet/historicoacessos">Histórico de acessos</Link>  </li>                       
                    <li key="balanco"><Link className={balancoVendas} to="/intranet/balancovendas" >Balanço de vendas</Link></li>   
                                     
                </ul>
            </nav> 
    )
}  