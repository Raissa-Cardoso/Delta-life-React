import React from "react";
import './MinhaDelta.css';

const DL1000 = require('../assets/vet1.jpeg');

export default function MinhaDelta(props){    
    return (
        <main className="MinhaDeltaCompleto">                        
             <nav className="menuMinhaDelta">
                    <ul>
                        <li className="selected">
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
            <div className="minhaDelta">
                <div className="kanbanConjunto">
                    <div className="kanban">
                        <div className="inativo"></div>
                        
                        <p>Boleto pago</p>
                    </div>
                    <div className="kanban">
                        <div className="inativo"></div>
                        <p>Faturado</p>
                    </div>
                    <div className="kanban">
                        <div className="ativo"></div>
                        <p>Produção</p>
                    </div>
                    <div className="kanban">
                        <div className="inativo"></div>
                        <p>Separado para envio</p>
                    </div>
                    <div className="kanban">
                        <div className="inativo"></div>
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
                            <div className="ativo"></div>
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