import React from "react";
import If from "./if.js"

export default props=>{
    const usuario=props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo(a) <strong>Anônimo</strong>
            </If>
            
        </div>
    )
}