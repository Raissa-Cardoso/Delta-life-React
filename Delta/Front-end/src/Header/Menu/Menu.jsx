import React from "react";
import './Menu.css';
import {Link} from 'react-router-dom'

import clicou from'../../Actions/menu.js'

const linha1000 = require('../../assets/DL1000.jpeg');

export default function Menu(props){     
    
    return (
        <div className="menu">
             <nav>
                <ul className="navegacao">
                    <li>  
                        <Link to="/"  className="selected" onClick={()=>clicou("/")}>Home</Link>                
                                               
                    </li>                    
                    <li>
                        <a id="produtos" onClick={()=>clicou("/produtos")}>Produtos</a>
                        
                        <div className="subProdutos">
                            <ul>
                                <li id="linhaVet">
                                    <Link to="/linhaVeterinaria" onClick={()=>clicou("/linhaVeterinaria")}>Linha Veterinária</Link> 
                                </li>
                                <li id="linhaHosp">
                                    <Link to="/linhaHospitalar" onClick={()=>clicou("/linhaHospitalar")}>Linha Hospitalar</Link> 
                                </li>                                                                
                            </ul> 
                            <div className="catalogosMenu">
                                <div className="menuCatalogoHospitalar">                        
                                    <button className="botaoMenuCatalogoHosp">Catálogo hospitalar humano</button>                        
                                </div>
                                <div className="menuCatalogoVeterinario">
                                    <button className="botaoMenuCatalogoVet">Catálogo hospitalar veterinário</button>
                                </div>
                            </div>                             
                            <div className="demonstrativo"  >
                                <Link to="/produtos/DL1000">
                                    <img src={linha1000}  onClick={()=>props.produto("DL1000")}/>
                                </Link>
                            </div>                             
                        </div>
                    </li>
                    <li>
                        <Link onClick={()=>clicou("/assinaturas")} to="/assinaturas">Assinaturas</Link>                        
                        
                    </li>
                    <li>
                        <Link to="/contato"   onClick={()=>clicou("/contato")}>Contato</Link> 
                    </li>
                    <li>
                        <Link to="/login"  onClick={()=>clicou("/login")}>Login</Link>
                    </li>
                </ul>
            </nav> 
            <button className="menu-toggle">
                <i className="fa fa-lg fa-bars"></i>
            </button>         

        </div>
    )
}