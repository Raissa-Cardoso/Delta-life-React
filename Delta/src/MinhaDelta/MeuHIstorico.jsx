import React from "react";
import './MeuHistorico.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

import Kanban from "./Kanban"

export default function MeuHistorico(props){    
    return (
        <main className="meuHistorico">                        
            <div className="divMenuMinhaDelta">< MenuMinhaDelta/></div> 
            <div className="historicoPedidos">
                <div className="pedidoAtual">
                    <div className="dadosPedidoAtual">
                        <div className="dataPedido">
                            <h2>Data do pedido</h2>
                            <h3>31/03/2022</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$40000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                        <div className="previsaoEntrega">
                            <h2>Previsão de entrega</h2>
                            <h3>10/05/2022</h3> 
                        </div>
                    </div>
                    <div className="kanbanHistorico">
                        <Kanban/>
                    </div>
                    
                </div> 
                <div className="pedidosAnteriores">
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>31/02/2022</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$40000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>15/01/2022</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$1000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>05/12/2021</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$80000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>31/11/2021</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$4000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>10/09/2021</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$100000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>1/06/2020</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$25000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                    <div className="pedidoAnterior">
                        <div className="dataPedido">
                                <h2>Data do pedido</h2>
                                <h3>27/07/2020</h3>
                        </div>
                        <div className="numeroPedido">
                            <h2>Nº do pedido</h2>
                            <h3>XXXXXX</h3>
                        </div>                    
                        <div className="totalPedido">
                            <h2>Total</h2>
                            <h3>R$10000</h3>
                        </div>                    
                        <div className="botaoHistorico">
                            <button>Detalhes</button>
                        </div>
                    </div>
                </div> 
            </div>                                
        </main>
)
}