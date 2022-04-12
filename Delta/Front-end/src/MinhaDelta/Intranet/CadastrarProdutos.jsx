import React from "react";
import './CadastrarProdutos.css';
import MenuIntranet from "./MenuIntranet";

export default function CadastrarProdutos(props){    
    return (
        <main className="cadastrarProdutos">                        
            <div className="divMenuIntranet"><MenuIntranet url="cadastroProdutos"/></div>
            <div className="divCadastrarProdutos">
                <div className="TituloProduto">
                    <h2>Título do produto</h2>
                    <input type="text" name="" id="" placeholder="Digite o título do  produto" />                  
                </div> 
                <div className="SubtituloProduto">
                    <h2>Subtítulo do produto</h2>
                    <input type="text" name="" id="" placeholder="Digite o subtítulo do  produto" />                  
                </div>  
                <div className="DescricaoProduto">
                    <h2>Descrição do produto</h2>
                    <textarea rows="10" cols="40" maxlength="500" placeholder="Digite a descrição do  produto"></textarea>
                                     
                </div> 
                <div className="CaracteristicasProduto">
                    <h2>Características do produto</h2>
                    <textarea rows="10" cols="40" maxlength="500" placeholder="Digite as características do  produto"></textarea>                  
                </div> 
                <div className="DuvidasProduto">
                    <h2>Dúvidas frequentes sobre o produto</h2>
                    <textarea rows="10" cols="40" maxlength="500" placeholder="Digite as dúvidas frequentes do  produto"></textarea>                  
                </div> 
                <div className="InserirImagemProduto">
                    <h2>Inserir imagem do produto</h2>
                    <div className="divBotaoCadastroProdutos">
                        <button>Carregar arquivo...</button>
                    </div>                                      
                </div>                       
            </div>
            
        </main>
    )
}