import {React,useState} from "react";
import './Login.css';
import {Link} from 'react-router-dom';


export default function Login(props){
    let [login,setLogin]=useState("")
    let caminho="/minhadelta"
    function loginDigitado(e){
        setLogin(e.target.value)
    }
      
    return (
        <main className="loginCompleto">
            <div className="login">
                <p>Login</p>
                <input id="login" value={login} type="text" onChange={loginDigitado}/>
                <p>Email</p>
                <input type="text"/>
                <Link to={caminho} >
                    <button>Entrar</button>
                </Link>                
            </div>
            <div className="novoCadastro">
                <p>Não possui cadastro?</p>                
                <button>Cadastre-se aqui</button>                
            </div>     
        </main>
    )
}