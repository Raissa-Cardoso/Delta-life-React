import React from "react";
import './Calibracoes.css';
import MenuMinhaDelta from "../MenuMinhaDelta/MenuMinhaDelta";

export default function Calibracoes(props){    
    return (
        <main className="calibracoes">                        
            <div className="divMenuMinhaDelta">< MenuMinhaDelta url="calibracoes"/></div>             
            <div className="calibracoesComTitulo">
                <h1>Período:</h1>
                <div className="datas">
                    <p>De:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <p>Para:</p>
                    <input type="date" name="" id="" placeholder="dd/mm/aaaa"/>
                    <button>Buscar</button>
                </div>            
                <div className="tabelaCalibracoes">
                    <table>
                        <thead>
                            <tr>
                                <th>Nº Calibração</th>
                                <th>Data</th>                                
                                <th>Download em pdf</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XXXX</td>
                                <td>04/04/2022</td>                                
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>15/02/2022</td>                                
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>30/11/2021</td>                                
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>15/10/2020</td>                                
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>XXXX</td>
                                <td>15/08/2020</td>                                
                                <td className="tdDownloadPdf">
                                    <button className="downloadPdf">
                                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>                        
                    </table>
                </div>
                
            </div>
        </main>
)
}