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
    const [imagemCarregar,setImagemCarregar]=useState("")
    function escreverInput() {        
        let titulo = document.getElementById("titulo").value;            
        setTitulo(titulo) 
        let subTitulo = document.getElementById("subtitulo").value;
        if(subTitulo)setSubTitulo(subTitulo)
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
        let imagemArquivo=document.getElementById("carregarArquivo").value.replace("C:\\fakepath\\","../assets/" );        
        setImagemCarregar(imagemArquivo)                        
    }
   
    function cadastrar(){                   
        
        api.post('/produto',{            
            titulo: `${tituloAlterado}`,
            subtitulo:`${subTituloAlterado}`,
            isVet:`${isVetAlterado}`,
            descricao:`${descricaoAlterada}`,
            caracteristicas: typeof caracteristicasAlteradas!=="string"?caracteristicasAlteradas.map((caracteristica)=>{if(caracteristica!==""||caracteristica!==null) return caracteristica}):caracteristicasAlteradas,
            imagem:`${imagemCarregar}`
                       
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
                        <input type="file" id="carregarArquivo" name="carregarArquivo" value="" onChange={()=>carregarImagem()}></input>                                          
                        <label htmlFor="carregarArquivo" >Carregar arquivo...</label>                                            
                        <p>{imagemCarregar.replace("../assets/","")}</p>                                                                                        </div>                                      
                </div> 
                <div className="opcoesUsosFocos">
                    <h2 className="opcoesUsosFocosTitulo">Usos</h2>
                    <div className="opçãoUsosFocos"> 
                        <div className="opUsos">
                            <input type="radio" id="opUsoVet" name="opUso" value="isVet" defaultChecked/>
                            <label htmlFor="opUsoVet">Uso exclusivo veterinário</label> 
                        </div>                                        
                        <div className="opUsos">                                                     
                            <input type="radio" id="opUsoHosp" name="opUso" value="isHosp" onClick={()=>optar()}/>
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
                                                                    
                       
                    
                    
                    <div className="divBotaoCadastrarProdutos">
                        <button onClick={()=>cadastrar()}>Cadastrar</button>
                    </div>                                                 
            </div>
            
        </main>
    )
}