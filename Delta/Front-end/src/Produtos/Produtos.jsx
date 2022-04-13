import React from "react";
import './Produtos.css';
import produtosDados from "./ProdutosDados.js"

export default function Produtos(props){           
    const produto=produtosDados.filter(produto=>{ return produto.titulo===props.produto})
    const produtoTitulo=produto.map(produto=>{
        return(
            <h1 key={produto.id}>
                {produto.titulo}
            </h1> 
        ) 
    }
    )
    const produtoSubtitulo=produto.map(produto=>{
        return(
            <h2 key={produto.id}>
                {produto.subtitulo}
            </h2> 
        ) 
    }
    )
    const produtoIsVetOrFoco=produto.map(produto=>{
        if(produto.isVet!==""){
            if(produto.isVet===true){
                return(
                    <p key={produto.id}>
                       uso veterinário
                    </p> 
                )
            }else{
                return(
                    <p key={produto.id}>
                       uso hospitalar humano
                    </p> 
                ) 
            }
        }else{
            if(produto.foco==="cirúrgico"){
                return(
                    <p key={produto.id}>
                       Foco cirúrgico
                    </p> 
                )
            }else{
                return(
                    <p key={produto.id}>
                       Foco de procedimento
                    </p> 
                ) 
            }

        }
       
    }
    )
    const produtoDescricao=produto.map(produto=>{
        return(
            <h3 key={produto.id}>
                {produto.descricao}
            </h3>
        )
    }
    )
    const produtoCaracteristicas= produto.map(produto=>{return produto.caracteristicas})
    const produtoCaracteristica=produtoCaracteristicas[0].map(caracteristica=>{
        return(
            <li key={caracteristica.idCaracteristica}>
                {caracteristica.caracteristica}
            </li>
        )
    })
    
    return (
        <main className="DL1000">            
        <div className="DL1000ComTexto">
            <div className="DL1000Textos">
                {produtoTitulo}
                {produtoSubtitulo}
                {produtoIsVetOrFoco}
                {produtoDescricao}                    
                <h2 id="caracteristicas">Características gerais</h2>
                <ul>
                   {produtoCaracteristica}
                </ul>
                <div className="duvidasProduto">  
                    <h2 id="duvidas">Dúvidas frequentes</h2>
                    <input list="listaDuvidas"/>                    
                        <datalist id="listaDuvidas">
                            <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                            <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                            <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                            <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                            <option value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "/>
                        </datalist>
                    <button>OK</button>
                </div>    
            </div>
            <div className="fotoDL1000">
                <img src={require(`../assets/${props.produto}.jpeg`)}  alt={props.produto}/> 
            </div> 
            <div className="fundoFoto">
            </div>              

        </div>
                   
   
        
    </main>
    )
}