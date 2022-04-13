import React from "react";
import "./Kanban.css";

export default function Kanban(){
    return (
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
    )
}