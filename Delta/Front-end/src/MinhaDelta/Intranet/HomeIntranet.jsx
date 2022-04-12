import React from "react";
import './Intranet.css';
import MenuIntranet from "./MenuIntranet";

export default function HomeIntranet(props){    
    return (
        <main className="HomeIntranet">                        
            <div className="divMenuHomeIntranet"><MenuIntranet url="intranet"/> </div>
            <h1>Seja bem-vindo(a) a intranet!!</h1>
        </main> 
    )
}