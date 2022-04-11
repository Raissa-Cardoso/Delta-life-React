import React from "react";
import './MinhaDelta.css';
import MenuMinhaDelta from "./MenuMinhaDelta";

export default function MinhaDeltaIntranet(props){    
    return (
        <main className="MinhaDelta">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta url="minhadelta"/> </div>
            <h1>Seja bem-vindo(a) a intranet!!</h1>
        </main> 
    )
}