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
    caracteristicas:[],
    isVet:"true",
    imagem:""
}
async componentDidMount(){    
    const response=await api.get(`/produto/${this.props.produto}`);           
    this.setState({produto:response.data})  
    this.setState({titulo:response.data.titulo})  
    this.setState({subtitulo:response.data.subtitulo})       
    this.setState({descricao:response.data.descricao})
    this.setState({caracteristicas:response.data.caracteristicas})
    this.setState({isVet:response.data.isVet})
    this.setState({imagem:response.data.imagem})    
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
    let opcao=document.querySelector('input[name="opUso"]:checked').value==="isVet"?true:false  
    this.setState({isVet:opcao})      
}     
    
render(){    
    const {produto,titulo,subtitulo,descricao,caracteristicas,isVet,imagem}=this.state;     
    
    function deletar() {               
        api.delete(`/produto/${produto._id}`)
        alert(`Produto: ${produto.titulo} foi deletado`)  
        window.open("/intranet/alterarproduto",'_self');      
    }
    function alterar(){ 
        console.log(isVet)    
        api.put(`/produto/${produto._id}`,{            
            titulo: `${titulo}`,
            subtitulo:`${subtitulo}`,
            descricao:`${descricao}`,           
            caracteristicas:caracteristicas.map(caracteristica=>{if(caracteristica!==""||caracteristica!==null) return caracteristica}),
            isVet:`${isVet}`,
            imagem:`${imagem}`
        })
        alert(`Produto: ${produto.titulo} foi alterado`)
        window.open("/intranet/alterarproduto",'_self');  
    } 
    
    function carregarImagem(){
        let imagemArquivo=document.getElementById("imagemAlterar").value.replace("C:\\fakepath\\","../assets/" );        
        console.log(imagemArquivo)                               
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
                    <p>Especificidade:</p>
                                    
                                           
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
                <div className="DuvidasProdutoAlterar">
                    <h2>Dúvidas frequentes sobre o produto:</h2>
                    <textarea rows="10" cols="40" placeholder="Digite as dúvidas frequentes do  produto"></textarea>                  
                </div> 
                <div className="InserirImagemProdutoAlterar">
                    <h2>Inserir imagem do produto:</h2>
                    <div className="divBotaoCarregarImagemProdutoAlterar">                      
                        <input type="file" id="imagemAlterar" name="imagemAlterar" onChange={()=>carregarImagem()}></input>                                          
                        <label htmlFor="imagemAlterar" >Carregar arquivo...</label>                                            
                        <p>{imagem.replace("../assets/","")}</p>                                                                                        </div>                                      
                </div> 
                <div className="opcoesUsosFocos">
                    <h2 className="opcoesUsosFocosTitulo">Usos</h2>
                    <div className="opçãoUsosFocos"> 
                        <div className="opUsos">
                        {produto.isVet===true? 
                            <input type="radio" id="opUsoVet" name="opUso" value="isVet" onClick={()=>this.handleChange()} defaultChecked/>
                            :<input type="radio" id="opUsoVet" name="opUso" value="isVet" onClick={()=>this.handleChange()}/>}
                            <label htmlFor="opUsoVet">Uso exclusivo veterinário</label> 
                        
                        </div>                                        
                        <div className="opUsos"> 
                            {produto.isVet===false?                                                     
                            <input type="radio" id="opUsoHosp" name="opUso" value="isHosp" onClick={()=>this.handleChange()} defaultChecked/>
                            :<input type="radio" id="opUsoHosp" name="opUso" value="isHosp" onClick={()=>this.handleChange()}/>}
                            <label htmlFor="opUsoHosp">Uso exclusivo hospitalar</label>                        </div> 
                        </div>
                    </div>
                    <h2 className="opcoesUsosFocosTitulo">Ultrassom</h2>
                    <div className="opçãoUsosFocos">                         
                        <div className="opUltrassom">                   
                            <input type="radio" id="opUltrassomComLed" name="opUltrassomComLed"/>
                            <label htmlFor="opUltrassomComLed">Com LED</label>
                        </div>
                        <div className="opUltrassom">                   
                            <input type="radio" id="opUltrassomSemLed" name="opUltrassomSemLed"/>
                            <label htmlFor="opUltrassomSemLed">Sem LED</label>
                        </div>
                    </div>
                    <h2 className="opcoesUsosFocosTitulo">Focos</h2>
                    <div className="opçãoUsosFocos"> 
                        <div className="opFocos">                   
                            <input type="radio" id="opFocoCirurgico" name="opFoco"/>
                            <label htmlFor="opFocoCirurgico">Foco cirúrgico</label>
                        </div>
                        <div className="opFocos">                                                        
                            <input type="radio" id="opFocoProcedimento" name="opFoco"/>                        
                            <label htmlFor="opFocoProcedimento">Foco Procedimento</label>
                        </div>
                        <div className="opFocosPosição">                   
                            <input type="radio" id="opFocoParede" name="opFocoParede"/>
                            <label htmlFor="opFocoParede">Parede</label>
                        </div>
                        <div className="opFocosPosição">                                                        
                            <input type="radio" id="opFocoPedestal" name="opFocoPedestal"/>                        
                            <label htmlFor="opFocoPedestal">Pedestal</label>
                        </div>
                        <div className="opFocosPosição">                                                        
                            <input type="radio" id="opFocoTeto" name="opFocoTeto"/>                        
                            <label htmlFor="opFocoTeto">Teto</label>
                        </div>
                        <div className="opFocosOutros">                                                        
                            <input type="radio" id="opFocoBateria" name="opFocoBateria"/>                        
                            <label htmlFor="opFocoBateria">Com bateria</label>
                        </div>
                        <div className="opFocosOutros">                                                        
                            <input type="radio" id="opFocoDuplo" name="opFocoDuplo"/>                        
                            <label htmlFor="opFocoDuplo">Foco duplo</label>
                        </div>
                        <div className="opFocosLeds">                                                        
                            <input type="radio" id="opFoco6" name="opFoco6"/>                        
                            <label htmlFor="opFoco6">6 LEDS</label>
                        </div>
                        <div className="opFocosLeds">                                                        
                            <input type="radio" id="opFoco12" name="opFoco12"/>                        
                            <label htmlFor="opFoco12">12 LEDS</label>
                        </div>
                        <div className="opFocosLeds">                                                        
                            <input type="radio" id="opFoco24" name="opFoco24"/>                        
                            <label htmlFor="opFoco24">24 LEDS</label>
                        </div>
                    </div>
                    <h2 className="opcoesUsosFocosTitulo">Ventilação e Anestesia</h2>
                    <div className="opçãoUsosFocos">                         
                        <div className="opVentAnestesiaPosição">                   
                            <input type="radio" id="opVentAnestesiaBancada" name="opVentAnestesiaBancada"/>
                            <label htmlFor="opVentAnestesiaBancada">Bancada</label>
                        </div>
                        <div className="opVentAnestesiaPosição">                   
                            <input type="radio" id="opVentAnestesiaMaleta" name="opVentAnestesiaMaleta"/>
                            <label htmlFor="opVentAnestesiaMaleta">Maleta</label>
                        </div>
                        <div className="opVentAnestesiaPosição">                   
                            <input type="radio" id="opVentAnestesiaPedestal" name="opVentAnestesiaPedestal"/>
                            <label htmlFor="opVentAnestesiaPedestal">Pedestal</label>
                        </div>
                        <div className="opVentAnestesiaPosição">                   
                            <input type="radio" id="opVentAnestesiaMovel" name="opVentAnestesiaMovel"/>
                            <label htmlFor="opVentAnestesiaMovel">Móvel</label>
                        </div>
                        <div className="opVentAnestesia">                   
                            <input type="radio" id="opVentAnestesiaComVent" name="opVentAnestesiaComVent"/>
                            <label htmlFor="opVentAnestesiaComVent">Com ventilação</label>
                        </div>
                        <div className="opVentAnestesia">                   
                            <input type="radio" id="opVentAnestesiaSemVent" name="opVentAnestesiaSemVent"/>
                            <label htmlFor="opVentAnestesiaSemVent">Sem ventilação</label>
                        </div>
                    </div>
                    <h2 className="opcoesUsosFocosTitulo">Bisturi</h2>
                    <div className="opçãoUsosFocos">
                        <div className="opBisturi">                   
                            <input type="radio" id="opBisturiCorte" name="opBisturiCorte"/>
                            <label htmlFor="opBisturiCorte">Corte</label>
                        </div>
                        <div className="opBisturi">                   
                            <input type="radio" id="opBisturiBipolar" name="opBisturiBipolar"/>
                            <label htmlFor="opBisturiBipolar">Bipolar de coagulação</label>
                        </div>
                        <div className="opBisturi">                   
                            <input type="radio" id="opBisturiCorteCoag" name="opBisturiCorteCoag"/>
                            <label htmlFor="opBisturiCorteCoag">Corte e coagulação</label>
                        </div>
                        <div className="opBisturi"/>                
                            
                    </div>
                    <h2 className="opcoesUsosFocosTitulo">Monitoramento</h2>
                    <div className="opçãoUsosFocos">
                        <div className="opMonitoramento">                   
                            <input type="radio" id="opMonitoramentoTouch" name="opMonitoramentoTouch"/>
                            <label htmlFor="opMonitoramentoTouch">Touch screen</label>
                        </div>
                        <div className="opMonitoramento">                   
                            <input type="radio" id="opMonitoramentoUSB" name="opMonitoramentoUSB"/>
                            <label htmlFor="opMonitoramentoUSB">USB</label>
                        </div>
                        <div className="opMonitoramento">                   
                            <input type="radio" id="opMonitoramentoPressao" name="opMonitoramentoPressao"/>
                            <label htmlFor="opMonitoramentoPressao">Pressão invasiva</label>
                        </div>
                        <div className="opMonitoramento">                   
                            <input type="radio" id="opMonitoramentoCapnografia" name="opMonitoramentoCapnografia"/>
                            <label htmlFor="opMonitoramentoCapnografia">Capnografia</label>
                        </div>
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


