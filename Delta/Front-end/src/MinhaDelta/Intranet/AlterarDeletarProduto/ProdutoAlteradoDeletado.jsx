import React, { Component } from "react";
import './ProdutoAlteradoDeletado.css';
import MenuIntranet from "../MenuIntranet/MenuIntranet";
import api from "../../../api.js";


class ProdutoAlteradoDeletado extends Component{   
state={
    produto:[],
    titulo:"",
    subtitulo:"",
    descricao:"",
    caracteristicas:[]
}
async componentDidMount(){    
    const response=await api.get(`/produto/${this.props.produto}`);           
    this.setState({produto:response.data})  
    this.setState({titulo:response.data.titulo})  
    this.setState({subtitulo:response.data.subtitulo})       
    this.setState({descricao:response.data.descricao})
    this.setState({caracteristicas:response.data.caracteristicas})
}
handleChange(){        
    let tituloAlterar = document.getElementById("titulo").value;  
    if(tituloAlterar)this.setState({titulo:tituloAlterar})    
    let subtituloAlterar = document.getElementById("subtitulo").value;  
    if(subtituloAlterar)this.setState({subtitulo:subtituloAlterar}) 
    let descricaoAlterar = document.getElementById("descricao").value;  
    if(descricaoAlterar)this.setState({descricao:descricaoAlterar}) 
    let caracteristicasAlterar=document.getElementById("caracteristicas").value;                
    let caracteristicasAlterarArray=((caracteristicasAlterar.indexOf("\n")!==-1)||(caracteristicasAlterar.indexOf("\r")!==-1))?caracteristicasAlterar.split("\n"):caracteristicasAlterar 
    
    if(caracteristicasAlterarArray)this.setState({caracteristicas:caracteristicasAlterarArray})  
}     
    
render(){    
    const {produto,titulo,subtitulo,descricao,caracteristicas}=this.state;     
   
    function deletar() {               
        api.delete(`/produto/${produto._id}`)
        alert(`Produto: ${produto.titulo} foi deletado`)  
        window.open("/intranet/alterarproduto",'_self');      
    }
    function alterar(){    
        api.put(`/produto/${produto._id}`,{            
            titulo: `${titulo}`,
            subtitulo:`${subtitulo}`,
            descricao:`${descricao}`,           
            caracteristicas:caracteristicas.map(caracteristica=>{if(caracteristica!==""||caracteristica!==null) return caracteristica})
        })
        alert(`Produto: ${produto.titulo} foi alterado`)
        window.open("/intranet/alterarproduto",'_self');  
    }
          
    return(          
        <main className="produtoAlteradoDeletado">                        
            <div className="divMenuIntranet"><MenuIntranet url="alterarProduto"/></div>
            <div className="divProdutoAlteradoDeletado">  
                <div className="tituloAlterar">
                    <h1>Título:</h1>              
                                           
                        <input key={produto._id} id="titulo"
                            placeholder={produto.titulo}
                            onBlur={()=>this.handleChange()}                                                        
                            /> 
                </div>
                <div className="subTituloAlterar">
                   <h2>Subtítulo:</h2> 
                                         
                        <input key={produto._id} id="subtitulo"
                            placeholder={produto.subtitulo}
                            onBlur={()=>this.handleChange()}
                            /> 
                </div>
                <div className="especificidadeAlterar">
                    <p><strong>Especificidade:</strong></p>
                                    
                                           
                        {produto.isVet===true?                                                       
                            <input key={produto._id}
                            placeholder="uso veterinário"
                            />:<input key={produto._id}
                            placeholder="uso hospitalar humano"
                            />
                        }                                                                                                                     
                    {                       
                        produto.focoCirurgico?                                                       
                            <input key={produto._id}
                            placeholder="foco cirúrgico"
                            />:""
                    }                                                  
                    {                       
                        produto.focoProcedimento?                            
                            <input key={produto._id}
                            placeholder="foco procedimento"
                            />:""
                    }
                </div>
                <div className="descricaoeAlterar">
                    <h2>Descrição:</h2>
                    
                        <textarea key={produto._id} rows="10" cols="40" id="descricao"
                          placeholder={produto.descricao}
                          onBlur={()=>this.handleChange()}
                         />
                    
                </div>
                <div className="caracteristicasAlterar">
                    <h2>Características:</h2>                    
                                          
                        <textarea key={produto._id} rows="10" cols="40" id="caracteristicas"
                         placeholder={produto.caracteristicas}
                         onBlur={()=>this.handleChange()}
                         />                        
                    
                </div>              
                <div className="BotoesAlterarDeletar">
                    <div className="divBotaoAlterarProduto">
                        <button onClick={()=>alterar()}>Alterar</button>
                    </div>  
                    <div className="divBotaoDeletarProduto">
                        <button onClick={()=>deletar()}>Deletar</button>
                    </div>        
                </div>
                
            </div>
                                     
        </main>
    )

    
}

}

export default ProdutoAlteradoDeletado;


