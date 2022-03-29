import React from "react";
import './Login.css';

export default function Login(props){
    return (
        <main className="loginCompleto">
            <div className="login">
                <p>Login</p>
                <input type="text" />
                <p>Email</p>
                <input type="text" />
                <button>Entrar</button>
            </div>
            <div className="novoCadastro">
                <p>Não possui cadastro?</p>
                <button>Cadastre-se aqui</button>
            </div>     
        </main>
    )
}