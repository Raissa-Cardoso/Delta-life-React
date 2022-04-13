import React from "react";
import './MinhaDelta.css';
import MenuMinhaDelta from "../MenuMinhaDelta/MenuMinhaDelta";

export default function MinhaDelta(props){    
    return (
        <main className="MinhaDelta">                        
            <div className="divMenuMinhaDelta"><MenuMinhaDelta url="minhadelta"/> </div>
            <h1>Seja bem-vindo(a)!!</h1>
        </main> 
    )
}