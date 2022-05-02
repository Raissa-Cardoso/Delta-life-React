import React, { Component } from "react";
import './Produtos.css';
import api from "../api";

class Produtos extends Component{
    
    state={
        produtos:[]
    }

    async componentDidMount(){
        const response=await api.get("/");        
        this.setState({produtos:response.data})        
    }
    render(){
        const {produtos}=this.state;
        const produto=produtos.filter(produto=>{ return produto.titulo===this.props.produto});         
        const produtoDescricao=produto.map(produto=>produto.descricao.split("\n"))
        console.log(produtoDescricao)

        return(          
            
            <main className="produtos">            
                <div className="produtoComTexto">
                    <div className="produtoTextos">                    
                        {produto.map(produto=>(                            
                            <h1 key={produto._id}>
                                {produto.titulo}
                            </h1> ))}
                        {produto.map(produto=>(
                            produto.subtitulo?
                            <h2 key={produto._id}>
                                {produto.subtitulo}
                            </h2>: <h2></h2>) )
                            }
                        {produto.map(produto=>(                        
                            produto.isVet?                                                       
                                <p key={produto._id}>
                                    uso veterinário
                                </p> :<p key={produto._id}>uso hospitalar humano</p>
                        ))}                    
                        {produto.map(produto=>(                        
                            produto.focoCirurgico?                                                       
                                <p key={produto._id}>
                                    Foco cirúrgico
                                </p> :<p key={produto._id}></p>
                        ))}
                        {produto.map(produto=>(                        
                            produto.focoProcedimento?                                                       
                                <p key={produto._id}>
                                    Foco Procedimento
                                </p> :<p key={produto._id}></p>
                        ))} 
                        {produtoDescricao.map(produto=>(
                            produto.map((descricao,index)=>(
                                descricao===""?
                                <br/>:
                                <h3 key={index}>
                                    {descricao}
                                </h3>
                            ))  
                        ))}                       
                       
                    <ul>
                        {produto.map(produto=>(
                            produto.caracteristicas.map((caracteristica,index)=>(
                                <li key={index}>
                                    {caracteristica}
                                </li>
                            ))
                        ))}
                        
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
                    <div className="fotoProduto">
                        <img src={require(`../assets/${this.props.produto}.jpeg`)}  alt={this.props.produto}/> 
                    </div> 
                    <div className="fundoFoto">
                    </div>        
                </div>
            </main>
        )

        
    }
    
}

export default Produtos;

