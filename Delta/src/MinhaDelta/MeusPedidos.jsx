import React from "react";
import './MeusPedidos.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

const DL1000 = require('../assets/vet1.jpeg');

export default function MeusPedidos(props){    
    return (
        <main className="meusPedidos">                        
            <div className="divMenuMinhaDelta">< MenuMinhaDelta/></div> 
            <div className="minhaDelta">
                <div className="kanbanConjunto">
                    <div className="kanban">
                        <div className="inativo">
                            <i className="fa fa-check-square-o check" aria-hidden="true"></i>
                        </div>                            
                        <p>Boleto pago</p>
                    </div>
                    <div className="setas">
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </div>
                   
                    <div className="kanban">
                        <div className="inativo">
                            <i className="fa fa-check-square-o check" aria-hidden="true"></i>
                        </div>
                        <p>Faturado</p>
                    </div>
                    <div className="setas">
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </div>
                    <div className="kanban">
                        <div className="ativo">
                            <i className="fa fa-check-square-o check" aria-hidden="true"></i>
                        </div>
                        <p>Produção</p>
                    </div>
                    <div className="setas">
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </div>
                    <div className="kanban">
                        <div className="inativo">
                            <i className="fa fa-square-o check" aria-hidden="true"></i>
                        </div>
                        <p>Separado para envio</p>
                    </div>
                    <div className="setas">
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </div>
                    <div className="kanban">
                        <div className="inativo">
                            <i className="fa fa-square-o check" aria-hidden="true"></i>
                        </div>
                        <p>Enviado</p>
                    </div>
                    
                </div>
                <div className="pedidos">
                    <div className="pedidoPrazo">
                        <h2>Monitor multiparamétrico veterinário (touch screen) - DL1000</h2>
                        <h2>Nº de série: DX4554687</h2>
                        <h3>Prazo de envio: 10/04/2022</h3>
                    </div>
                    <div className="statusPedido">
                        <h2>Status do pedido</h2>
                        <div className="kanban">
                            <div className="ativo">
                                <i className="fa fa-check-square-o check" aria-hidden="true"></i>
                            </div>
                            <p>Produção</p>
                        </div>
                    </div>
                    <div className="imagemLinks">
                        <div className="imagemPedido">
                            <img src={DL1000}  alt="DL1000"/> 
                        </div>
                        <ul>
                            <li>
                                <a href="">Especificações técnicas</a>
                            </li>
                            <li>
                                <a href="">Manual do usuário</a>
                            </li>
                            <li>
                                <a href="">Vídeo tutorial</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </main>
)
}