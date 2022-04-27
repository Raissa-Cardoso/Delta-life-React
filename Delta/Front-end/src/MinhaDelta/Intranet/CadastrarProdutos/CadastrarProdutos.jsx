import {React, useState} from "react";
import './CadastrarProdutos.css';
import MenuIntranet from "../MenuIntranet/MenuIntranet";
import api from "../../../api.js";

export default function CadastrarProdutos(props){ 
    const [tituloAlterado, setTitulo] = useState("");
    const [subTituloAlterado, setSubTitulo] = useState("");
    const [descricaoAlterada, setDescricao] = useState("");
    const [caracteristicasAlteradas, setCaracteristicas] = useState([]); 
    const [isVetAlterado,setIsVet]=useState(true)
    function escreverInput() {        
        let titulo = document.getElementById("titulo").value;            
        setTitulo(titulo) 
        let subTitulo = document.getElementById("subtitulo").value;
        setSubTitulo(subTitulo)
        let descricao = document.getElementById("descricao").value;
        setDescricao(descricao)  
        let caracteristicas=document.getElementById("caracteristicas").value;                
        let caracteristicasArray=((caracteristicas.indexOf("\n")!==-1)||(caracteristicas.indexOf("\r")!==-1))?caracteristicas.split("\n"):caracteristicas 
        setCaracteristicas(caracteristicasArray)                           
    }
    function optar(){
        let opcao=document.querySelector('input[name="opUso"]:checked').value
        setIsVet(opcao==="isVet"?true:false)        
    }
    function carregarImagem(){
        
    }
   
    function cadastrar(){         
        
        api.post('/produto',{            
            titulo: `${tituloAlterado}`,
            subtitulo:`${subTituloAlterado}`,
            isVet:`${isVetAlterado}`,
            descricao:`${descricaoAlterada}`,
            caracteristicas:caracteristicasAlteradas.map((caracteristica)=>{if(caracteristica!==""||caracteristica!==null) return caracteristica})            
                       
        }).then(response=>alert(`Os dados: ${JSON.stringify(response.data)} foram cadastrados`))        
          .catch(erro=>console.log(erro)) 
        alert(`Produto: ${tituloAlterado} foi cadastrado`)
        window.open("/intranet/cadastrarprodutos",'_self');  
        
    }   

    return (
        <main className="cadastrarProdutos">                        
            <div className="divMenuIntranet"><MenuIntranet url="cadastroProdutos"/></div>
            <div className="divCadastrarProdutos">
                <div className="TituloProduto">
                    <h2>Título do produto</h2>
                    <input type="text" name="" id="titulo" placeholder="Digite o título do  produto" onBlur={()=>escreverInput()}/>                  
                </div> 
                <div className="SubtituloProduto">
                    <h2>Subtítulo do produto</h2>
                    <input type="text" name="" id="subtitulo" placeholder="Digite o subtítulo do  produto" onBlur={()=>escreverInput()}/>                  
                </div>  
                <div className="DescricaoProduto">
                    <h2>Descrição do produto</h2>
                    <textarea rows="10" cols="40" id="descricao" placeholder="Digite a descrição do  produto" onBlur={()=>escreverInput()}></textarea>
                                     
                </div> 
                <div className="CaracteristicasProduto">
                    <h2>Características do produto</h2>
                    <textarea rows="10" cols="40" id="caracteristicas" placeholder="Digite as características do  produto (uma característica em cada linha)" onBlur={()=>escreverInput()}></textarea>                  
                </div> 
                <div className="DuvidasProduto">
                    <h2>Dúvidas frequentes sobre o produto</h2>
                    <textarea rows="10" cols="40" placeholder="Digite as dúvidas frequentes do  produto"></textarea>                  
                </div> 
                <div className="InserirImagemProduto">
                    <h2>Inserir imagem do produto</h2>
                    <div className="divBotaoCarregarImagemProduto">
                        <label htmlFor="carregarArquivo" onClick={()=>carregarImagem()}>Carregar arquivo...</label>
                        <input type="file" id="carregarArquivo" name="carregarArquivo"></input>                        
                    </div>                                      
                </div> 
                <div className="opcoesUsosFocos">
                    <div className="opçãoUsosFocos"> 
                        <div className="opUsos">
                            <input type="radio" id="opUsoVet" name="opUso" value="isVet" onClick={()=>optar()}/>
                            <label htmlFor="opUsoVet">Uso exclusivo veterinário</label> 
                        </div>                                        
                        <div className="opUsos">                             
                            <input type="radio" id="opUsoHosp" name="opUso" value="isHosp" onClick={()=>optar()}/>
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