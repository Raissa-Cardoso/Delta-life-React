import React from "react";
import './CadastroLogin.css';

export default function CadastroLogin(props){    
    return (
        <main className="cadastroLogin">                                    
            <div className="divCadastroLogin">
                <div className="nomeLogin">
                    <h2>Nome</h2>
                    <input type="text" name="" id="" placeholder="Digite seu nome completo" />                  
                </div> 
                <div className="cpfLogin">
                    <h2>CPF</h2>
                    <input type="text" name="" id="" placeholder="Digite seu CPF" />                  
                </div>  
                <div className="dataNascimentoLogin">
                    <h2>Data de Nascimento</h2>
                    <input type="date" />                  
                </div>  
                <div className="emailLogin">
                    <h2>E-mail</h2>
                    <input type="email" name="" id="" placeholder="Digite seu e-mail" />                  
                </div> 
                <div className="senhaLogin">
                    <h2>Senha</h2>
                    <input type="password" name="" id="" placeholder="Digite sua senha" />                  
                </div> 
                <div className="confirmaSenhaLogin">
                    <h2>Confirme senha</h2>
                    <input type="password" name="" id="" placeholder="Digite novamente sua senha" />   
                    <div className="divBotaoCadastroLogin">
                        <button>Cadastrar</button>
                    </div>                
                </div>                        
            </div>
            
        </main>
    )
}