import React from "react";
import './Login.css';
import {Link} from 'react-router-dom';


export default function Login(props){
    return (
        <main className="loginCompleto">
            <div className="login">
                <p>Login</p>
                <input type="text" />
                <p>Email</p>
                <input type="text" />
                <Link to="/minhadelta">
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