import React from "react";

export default (props)=>{
    const {max,min}=props
    const numAleatorio=0
    const imprimir=()=>{
        numAleatorio=parseInt(Math.random()*(max-min)+min)
        return numAleatorio
    }    
    return (
        <div>
            <h2>Número sorteado</h2>
            <p>Entre <strong>{min} </strong>e <strong>{max}</strong></p>
            <p>O número sorteado foi <strong>{numAleatorio}</strong></p>
            <button onClick={e=>imprimir}>OK</button>           
        </div>
    )
}