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
                <div className="listagem">
                    <ul>
                        
                        {produtos.map((produto,index)=>( 
                            <Link to={`/intranet/alterardeletarproduto/${produto.titulo}`} onClick={()=>this.props.alterar(`${produto.titulo}`)}>                       
                                <li key={index}>                                                                    
                                    {produto.titulo}
                                </li>
                            </Link> 
                        ))}  
                                        
                    </ul> 

                </div>
                                               
            </main>
        )

        
    }
    
}

export default AlterarDeletarProduto;


