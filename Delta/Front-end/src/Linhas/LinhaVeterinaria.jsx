import React, { Component } from "react";
import '../Linhas/LinhaVeterinaria.css';
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
        const ultrassom=produto.filter(produto=>produto.titulo.indexOf("DL300")!==-1)                              
        const focos=produto.filter(produto=> produto.titulo.indexOf("DL4000")!==-1)
        const ventAnestesia=produto.filter(produto=>produto.titulo==="DL250"||produto.titulo.indexOf("DL7")!==-1||produto.titulo==="DL500")
        const bisturi=produto.filter(produto=>produto.titulo==="DL840")
        const monitoramentoVet=produto.filter(produto=>produto.titulo==="DL100"||produto.titulo==="DL400"||produto.titulo==="DL430"||
                                                       produto.titulo==="Life500"||produto.titulo==="DL650"||produto.titulo==="DL900"||
                                                       produto.titulo.indexOf("DL1000")!==-1 )
        const bombaSeringaVet=produto.filter(produto=>produto.titulo==="SP750"||produto.titulo.indexOf("Mini")!==-1||
                                                      produto.titulo==="DL800"||produto.titulo==="DL2100"||produto.titulo==="DL330")
        const outros=produto.filter(produto=>produto.titulo.indexOf("DL300")===-1&&produto.titulo.indexOf("DL4000")===-1&&
                                            produto.titulo!=="DL250"&&produto.titulo.indexOf("DL7")===-1&&
                                            produto.titulo!=="DL500"&&produto.titulo!=="DL840"&&produto.titulo!=="DL100"&&produto.titulo!=="DL400"&&produto.titulo!=="DL430"&&
                                            produto.titulo!=="Life500"&&produto.titulo!=="DL650"&&produto.titulo!=="DL900"&&
                                            produto.titulo.indexOf("DL1000")===-1&&produto.titulo!=="SP750"&&produto.titulo.indexOf("Mini")===-1&&
                                            produto.titulo!=="DL800"&&produto.titulo!=="DL2100"&&produto.titulo!=="DL330")
        
        let i=0
        
        function slideinLeft(div){
            let elementos = document.querySelectorAll(div)                           
            elementos[i].style.display="none" 
            i++ 
            if(i===elementos.length){
                i=0
                for(let i=0;i<=elementos.length;i++){
                    elementos[i].style.display="block"
                }                
            }

        }
        let j=1
        function slideinRigth(div){ 
            const elementos = document.querySelectorAll(div) 
            elementos[elementos.length-j].style.display="none"                    
            j++           
            if(j===elementos.length+1){
                elementos[0].style.display="none" 
            }
            if(j===elementos.length+1){                    
                j=1
                for(let j=0;j<=elementos.length-1;j++){
                    elementos[j].style.display="block"
                }                
            }
        }

        
        return (
            <main className="linhaVeterinaria">
                <h1>Linha Veterinária</h1>           
                <div className="linhasProdutosVet">                    
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Ultrassom</h2> 
                        <div className="ultrassom">
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaUltrassom")}></i>                          
                                {ultrassom.map(produto=>(
                                    <div className="cadaUltrassom">                                                                                                                                                         
                                        <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                            <img   src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                            <h2 >{produto.titulo}</h2>
                                            <h3 >{produto.subtitulo} </h3>                                                                
                                        </Link>                                                             
                                    </div>
                                ))}                                 
                                
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaUltrassom")}></i>
                        </div>                                         
                    </div> 
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Focos</h2> 
                        <div className="focos"> 
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaFoco")}></i>                           
                            {focos.map(produto=>(   
                                <div className="cadaFoco">                                                                             
                                    <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                               
                                    
                                        <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                        <h2>{produto.titulo}</h2>
                                        <h3>{produto.subtitulo} </h3>                                                                
                                    </Link>                           
                                </div>
                            ))} 
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaFoco")}></i>
                        </div>                                         
                    </div>   
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Ventilação e Anestesia</h2> 
                        <div className="ventilaçãoAnestesia">
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaVentilação")}></i>                            
                            {ventAnestesia.map(produto=>( 
                                <div className="cadaVentilação">                                                                                                                
                                    <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                        <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                        <h2>{produto.titulo}</h2>
                                        <h3>{produto.subtitulo} </h3>                                                                
                                    </Link>                         
                                </div>
                            ))}
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaVentilação")}></i> 
                        </div>                                         
                    </div>  
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Bisturi eletrônico</h2> 
                        <div className="bisturi">
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaBisturi")}></i>                                                        
                            {bisturi.map(produto=>(   
                                <div className="cadaBisturi">                                                                            
                                    <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                        <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                        <h2>{produto.titulo}</h2>
                                        <h3>{produto.subtitulo} </h3>                                                                
                                    </Link>                           
                                </div>
                            ))} 
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaBisturi")}></i>
                        </div>                                         
                    </div>    
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Monitoramento</h2> 
                        <div className="monitoramentoVet"> 
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaMonitoramento")}></i>
                            {monitoramentoVet.map(produto=>(   
                                <div className="cadaMonitoramento">                                                                            
                                    <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                        <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                        <h2>{produto.titulo}</h2>
                                        <h3>{produto.subtitulo} </h3>                                                                
                                    </Link>                             
                                </div>
                            ))} 
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaMonitoramento")}></i>
                        </div>                                         
                    </div> 
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Bomba de infusão e seringa</h2> 
                        <div className="bombaSeringaVet">
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaBomba")}></i>                            
                            {bombaSeringaVet.map(produto=>(   
                                <div className="cadaBomba">                                                                               
                                    <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                        <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                        <h2>{produto.titulo}</h2>
                                        <h3>{produto.subtitulo} </h3>                                                                
                                    </Link>                       
                                </div>
                            ))} 
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaBomba")}></i>
                        </div>                                         
                    </div>  
                    <div className="linhasProdutoVet"> 
                        <h2 className="familiaVetTitulo">Outros</h2> 
                        <div className="outrosVet"> 
                            <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>slideinLeft(".cadaOutro")}></i>                           
                            {outros.map(produto=>(   
                                <div className="cadaOutro">                                                                               
                                    <Link to={`/produtos/${produto.titulo}`} onClick={()=>this.props.produto(produto.titulo)} >                                
                                        <img src={require(`../assets/${produto.imagem.split("../assets/")[1].split(".jpeg")[0]}.jpeg`)}  alt={produto.imagem}/>
                                        <h2>{produto.titulo}</h2>
                                        <h3>{produto.subtitulo} </h3>                                                                
                                    </Link>                       
                                </div>
                            ))} 
                            <i className="fa fa-angle-right" aria-hidden="true"  onClick={()=>slideinRigth(".cadaOutro")}></i>
                        </div>                                         
                    </div>                           
                </div>
            </main>
        )              
  
    }
    
}

export default LinhaVeterinaria;

