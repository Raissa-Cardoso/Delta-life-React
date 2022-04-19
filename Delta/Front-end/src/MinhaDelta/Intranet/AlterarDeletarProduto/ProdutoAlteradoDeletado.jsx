import React, { Component } from "react";
import './ProdutoAlteradoDeletado.css';
import MenuIntranet from "../MenuIntranet/MenuIntranet";
import api from "../../../api.js";

class ProdutoAlteradoDeletado extends Component{
    
state={
    produtos:[]
}

async componentDidMount(){
    const response=await api.get("/");        
    this.setState({produtos:response.data})        
}
render(){
    console.log(this.props.produto)
    const {produtos}=this.state;
    const produto=produtos.filter(produto=>{ return produto.titulo===this.props.produto});        
          
    return(          
        <main className="produtoAlteradoDeletado">                        
            <div className="divMenuIntranet"><MenuIntranet url="alterarProduto"/></div>
            <div className="divProdutoAlteradoDeletado">  
                <div className="tituloAlterar">
                    <h1>Título: </h1>              
                    {produto.map(produto=>(                        
                        <input key={produto._id}
                            placeholder={produto.titulo}
                        /> ))}
                </div>
                <div className="subTituloAlterar">
                   <h2>Subtítulo:</h2> 
                   {produto.map(produto=>(                        
                        <input key={produto._id}
                            placeholder={produto.subtitulo}
                        /> ))}
                </div>
                <div className="especificidadeAlterar">
                    <p><strong>Especificidade:</strong></p>                
                    {produto.map(produto=>(                        
                        produto.isVet?                                                       
                            <input key={produto._id}
                            placeholder="uso veterinário"
                            />:""
                    ))}                                                   
                    {produto.map(produto=>(                        
                        produto.isHosp?                                                       
                            <input key={produto._id}
                            placeholder="uso hospitalar humano"
                            />:""
                    ))}                                                  
                    {produto.map(produto=>(                        
                        produto.focoCirurgico?                                                       
                            <input key={produto._id}
                            placeholder="foco cirúrgico"
                            />:""
                    ))}                                                  
                    {produto.map(produto=>(                        
                        produto.focoProcedimento?                            
                            <input key={produto._id}
                            placeholder="foco procedimento"
                            />:""
                    ))}
                </div>
                <div className="descricaoeAlterar">
                    <h2>Descrição:</h2>
                    {produto.map(produto=>(
                        <textarea key={produto._id} rows="10" cols="40" id="descricao"
                         maxlength="500" placeholder={produto.descricao}
                        />
                    ))}
                </div>
                <div className="caracteristicasAlterar">
                    <h2>Características:</h2>
                    {produto.map(produto=>
                    (                       
                        <textarea key={produto._id} rows="10" cols="40" id="descricao"
                         maxlength="500" placeholder={produto.caracteristicas}
                        />                        
                    ))}
                </div>              
                <div className="BotoesAlterarDeletar">
                    <div className="divBotaoAlterarProduto">
                        <button>Alterar</button>
                    </div>  
                    <div className="divBotaoDeletarProduto">
                        <button>Deletar</button>
                    </div>        
                </div>
                
            </div>
                                     
        </main>
    )

    
}

}

export default ProdutoAlteradoDeletado;


