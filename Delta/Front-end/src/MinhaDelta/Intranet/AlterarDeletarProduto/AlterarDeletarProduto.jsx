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
              
        return(          
            <main className="alterarProdutos">                        
                <div className="divMenuIntranet"><MenuIntranet url="alterarProduto"/></div>
                <ul>
                    
                        {produtos.map(produto=>( 
                            <Link to={`/intranet/alterardeletarproduto/${produto.titulo}`} onClick={()=>this.props.alterar(`${produto.titulo}`)}>                       
                                <li key={produto._id}>                                
                                    {produto.titulo}
                                </li>
                            </Link> 
                        ))}  
                                         
                </ul>                                
            </main>
        )

        
    }
    
}

export default AlterarDeletarProduto;


