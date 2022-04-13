import React from "react";
import './Boletos.css';
import MenuMinhaDelta from "../MenuMinhaDelta/MenuMinhaDelta";

export default function Boletos(props){    
    return (
        <main className="boletos">                        
            <div className="divMenuMinhaDelta">< MenuMinhaDelta url="boletos"/></div>             
            <div className="datasComTitulo">
                <h1>Período:</h1>
                <div className="datas">
                    <p>De:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <p>Para:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <button>Buscar</button>
                </div>            
                <div className="tabelaBoletos">
                    <table>
                        <thead>
                            <tr>
                                <th>Nº pedido</th>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Download em pdf</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XXXX</td>
                                <td>04/04/2022</td>
                                <td>R$10000</td>
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>15/02/2022</td>
                                <td>R$4000</td>
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>30/11/2021</td>
                                <td>R$8000</td>
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>15/10/2020</td>
                                <td>R$40000</td>
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td>Total: R$62000</td>
                                <td></td>
                            </tr> 
                        </tfoot>
                    </table>
                </div>
                
            </div>
        </main>
)
}