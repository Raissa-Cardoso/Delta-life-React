import React, { Component } from "react";
import '../Linhas/Linhas.css';
import {Link} from "react-router-dom";
import api from "../api";


class LinhaVeterinaria extends Component{
    
    state={
        produtos:[]
    }

    async componentDidMount(){
        const response=await api.get("/");        
        this.setState({produtos:response.data})        
    }
    render(){
        const {produtos}=this.state;
        const produto=produtos.filter(produto=>{return produto.isVet===true});        
                          
        return (
            <main className="linhaVeterinaria">
                <h1>Linha Veterinária</h1>           
                <div className="linhasProdutos">                    
                    <div className="linhasProduto">                        
                        {produto.map(produto=>(                                                                                 
                            <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                <h2>{produto.titulo}</h2>
                                <h3>{produto.subtitulo} </h3>                                                                
                            </Link>                              
 
                        ))} 

                    </div>                    
                </div>
            </main>
        )              
  
    }
    
}

export default LinhaVeterinaria;

