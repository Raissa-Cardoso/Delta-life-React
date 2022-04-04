import React from "react";
import './Boletos.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

const DL1000 = require('../assets/vet1.jpeg');

export default function Boletos(props){    
    return (
        <main className="boletos">                        
            <div className="divMenuMinhaDelta">< MenuMinhaDelta/></div>             
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
                                <td>04/04/2022</td>
                                <td>R$10000</td>
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td>Total: R$40000</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                
            </div>
        </main>
)
}