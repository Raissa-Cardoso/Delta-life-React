import React from "react";
import './MinhaDelta';
import {Link} from 'react-router-dom'

import clicou from'../Actions/menu'

export default function menuMinhaDelta(props){     
    
    return (
    <nav className="menuMinhaDelta">
                    <ul>
                        <li>
                            <a href="">Meus pedidos</a>
                        </li>
                        <li>
                            <a href="">Boletos</a>
                        </li>
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