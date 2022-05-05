import {React,Component} from "react";
import {Link} from "react-router-dom";
import './AlterarDeletarProduto.css';
import MenuIntranet from "../MenuIntranet/MenuIntranet";
import api from "../../../api.js";

class AlterarDeletarProduto extends Component{
    
    state={
        produtos:[]
    }

    async componentDidMount(){
        const response=await api.get("/");        
        this.setState({produtos:response.data})        
    }
    render(){
        const {produtos}=this.state; 
        const produtosVet= produtos.filter(produto=> produto.isVet).map(produto=>produto.titulo).sort()
        const produtosHosp= produtos.filter(produto=> !produto.isVet).map(produto=>produto.titulo).sort()        
        return( 
            
            <main className="alterarProdutos">                        
                <div className="divMenuIntranet"><MenuIntranet url="alterarProduto"/></div>
                <div className="listagem">
                    <h2>Produtos veterinários</h2>
                    <ul>
                        {produtosVet.map((produto,index)=>(                          
                           
                            <div className="produtosVet">
                                <Link to={`/intranet/alterardeletarproduto/${produto}`} onClick={()=>this.props.alterar(`${produto}`)}>                       
                                    <li key={index}>                                                                    
                                        {produto}                                    
                                    </li>
                                </Link>
                            </div>
                        ))} 
                    </ul> 
                    <h2>Produtos humanos</h2>
                    <ul>
                        {produtosHosp.map((produto,index)=>( 
                            
                            <div className="produtosHosp">
                             <Link to={`/intranet/alterardeletarproduto/${produto}`} onClick={()=>this.props.alterar(`${produto}`)}>                       
                                 <li key={index}>                                                                    
                                     {produto}                                    
                                 </li>
                             </Link>
                         </div>                             
  
                        ))}  
                                        
                    </ul> 
                    
                </div>
                                               
            </main>
        )

        
    }
    
}

export default AlterarDeletarProduto;


