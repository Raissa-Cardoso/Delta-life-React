import React from "react";
import './MinhaDelta.css';



export default function MinhaDelta(props){    
    return (
        <main className="MinhaDeltaCompleto">                        
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

                </div>

            </div>
        </main>
)
}