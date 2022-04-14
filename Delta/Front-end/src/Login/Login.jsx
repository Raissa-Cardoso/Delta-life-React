import {React,useState} from "react";
import './Login.css';
import {Link} from 'react-router-dom';


export default function Login(props){
    let [login,setLogin]=useState("")
    let [caminho,setCaminho]=useState("")      
    function loginDigitado(e){
        setLogin(e.target.value)        
    }
    function teste(){        
        if(login==="1"){
            setCaminho("/intranet")
        }else{
            setCaminho("/minhadelta")
        }        
    }
    
      
    return (
        <main className="loginCompleto">
            <div className="login">
                <p>Login</p>
                <input id="login" value={login} type="email" onChange={loginDigitado} onBlur={teste}/>
                <p>Senha</p>
                <input type="password"/>
                <Link to={caminho} >
                    <button>Entrar</button>
                </Link>                
            </div>
            <div className="novoCadastro">
                <p>Não possui cadastro?</p>
                <Link to="/cadastroLogin" >                
                    <button>Cadastre-se aqui</button>  
                </Link>              
            </div>     
        </main>
    )
}