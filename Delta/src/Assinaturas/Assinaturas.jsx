import React from "react";
import './Assinaturas.css';

export default function Assinaturas(props){
    return (
        <main className="assinaturasComTexto">
            <h1>Assinaturas</h1>
            <h2>O que é?</h2>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quo adipisci repellendus voluptates similique! Dignissimos distinctio doloribus quisquam amet?
                 Sunt nemo neque vel eius maiores dolorum quibusdam, vitae officiis ut accusamus!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quo adipisci repellendus voluptates similique! Dignissimos distinctio doloribus quisquam amet?
                 Sunt nemo neque vel eius maiores dolorum quibusdam, vitae officiis ut accusamus!</h3>
            <h2>Como funciona?</h2>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quo adipisci repellendus voluptates similique! Dignissimos distinctio doloribus quisquam amet?
                 Sunt nemo neque vel eius maiores dolorum quibusdam, vitae officiis ut accusamus!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quo adipisci repellendus voluptates similique! Dignissimos distinctio doloribus quisquam amet?
                 Sunt nemo neque vel eius maiores dolorum quibusdam, vitae officiis ut accusamus!</h3>
            <div className="assinaturas">
                <div className="assinatura">
                    <h2>Pacote 1</h2>                                        
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo adipisci repellendus voluptates similique! 
                        Dignissimos distinctio doloribus quisquam amet?
                    </h3>
                    <button className="botaoAssinatura">Assinar</button>
                </div>
                <div className="assinatura">
                    <h2>Pacote 2</h2>                                        
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo adipisci repellendus voluptates similique! 
                        Dignissimos distinctio doloribus quisquam amet?
                    </h3>
                    <button className="botaoAssinatura">Assinar</button>
                </div>
                <div className="assinatura">
                    <h2>Pacote 3</h2>                                        
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo adipisci repellendus voluptates similique! 
                        Dignissimos distinctio doloribus quisquam amet?
                    </h3>
                    <button className="botaoAssinatura">Assinar</button>
                </div>

            </div>
           
        </main>
    )
}