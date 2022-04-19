import {React, useState,useEffect} from "react";
import './CadastrarProdutos.css';
import MenuIntranet from "../MenuIntranet/MenuIntranet";
import api from "../../../api.js";

export default function CadastrarProdutos(props){ 
    const [tituloAlterado, setTitulo] = useState("");
    const [subTituloAlterado, setSubTitulo] = useState("");
    const [descricaoAlterada, setDescricao] = useState("");
    const [caracteristicasAlteradas, setCaracteristicas] = useState("");  
    function cadastrar(){
        let titulo = document.querySelector("#titulo");    
        setTitulo(titulo.value)
        let subTitulo = document.querySelector("#subtitulo");
        setSubTitulo(subTitulo.value)
        let descricao = document.querySelector("#descricao");
        setDescricao(descricao.value)
        /*let caracteristicas=document.querySelector("#caracteristicas"); 
        let qtCaracteristicas=caracteristicas.value.split(",")
        let caracteristicasArray=[]
        for(let i=0;i<qtCaracteristicas.length;i++){
            caracteristicasArray.push(qtCaracteristicas[i])
        }*/         

        setCaracteristicas(["caracteristica1","caracteristica2"])  
        
        api.post('/produto',{            
            titulo: `${tituloAlterado}`,
            subtitulo:`${subTituloAlterado}`,
            descricao:`${descricaoAlterada}`,           
            caracteristicas:["caracteristica1","caracteristica2"]            
        })   

           
    }   
    
        
    
    return (
        <main className="cadastrarProdutos">                        
            <div className="divMenuIntranet"><MenuIntranet url="cadastroProdutos"/></div>
            <div className="divCadastrarProdutos">
                <div className="TituloProduto">
                    <h2>Título do produto</h2>
                    <input type="text" name="" id="titulo" placeholder="Digite o título do  produto" />                  
                </div> 
                <div className="SubtituloProduto">
                    <h2>Subtítulo do produto</h2>
                    <input type="text" name="" id="subtitulo" placeholder="Digite o subtítulo do  produto" />                  
                </div>  
                <div className="DescricaoProduto">
                    <h2>Descrição do produto</h2>
                    <textarea rows="10" cols="40" id="descricao" maxlength="500" placeholder="Digite a descrição do  produto"></textarea>
                                     
                </div> 
                <div className="CaracteristicasProduto">
                    <h2>Características do produto</h2>
                    <textarea rows="10" cols="40" id="caracteristicas" maxlength="500" placeholder="Digite as características do  produto"></textarea>                  
                </div> 
                <div className="DuvidasProduto">
                    <h2>Dúvidas frequentes sobre o produto</h2>
                    <textarea rows="10" cols="40" maxlength="500" placeholder="Digite as dúvidas frequentes do  produto"></textarea>                  
                </div> 
                <div className="InserirImagemProduto">
                    <h2>Inserir imagem do produto</h2>
                    <div className="divBotaoCarregarImagemProduto">
                        <button>Carregar arquivo...</button>
                    </div>                                      
                </div> 
                <div className="opcoesUsosFocos">
                    <div className="opçãoUsosFocos"> 
                        <div className="opUsos">
                            <input type="radio" id="opUsoVet" name="opUso" defaultChecked/>                        
                            <label htmlFor="opUsoVet">Uso exclusivo veterinário</label> 
                        </div>                                        
                        <div className="opUsos">                             
                            <input type="radio" id="opUsoHosp" name="opUso"/>
                            <label htmlFor="opUsoHosp">Uso exclusivo hospitalar</label>                        </div> 
                        </div>
                    </div>
                    <div className="opçãoUsosFocos"> 
                        <div className="opFocos">                   
                            <input type="radio" id="opFocoCirurgico" name="opFoco"/>
                            <label htmlFor="opFocoCirurgico">Foco cirúrgico</label>
                        </div>
                        <div className="opFocos">                                                        
                            <input type="radio" id="opFocoProcedimento" name="opFoco"/>                        
                            <label htmlFor="opFocoProcedimento">Foco Procedimento</label>
                        </div>
                        <div className="opFocos">
                            <input type="radio" id="opFocoProcedimento" name="opFoco" defaultChecked/>                        
                            <label htmlFor="opFocoProcedimento" >Não é um foco</label>
                        </div>                                               
                    </div>    
                    <div className="opMaisVendidos">
                        <input type="radio" id="opMaisVendidos" name="opMaisVendidos"/>                        
                        <label htmlFor="opMaisVendidos">Adicionar como Mais Vendidos</label>
                    </div> 
                    <div className="divBotaoCadastrarProdutos">
                        <button onClick={()=>cadastrar()}>Cadastrar</button>
                    </div>                                                 
            </div>
            
        </main>
    )
}