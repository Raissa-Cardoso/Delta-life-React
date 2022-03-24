import React from "react";
import './Menu.css'

export default function Menu(props){
    window.onhashchange=function(e){
        const oldURL=e.oldURL.split('#')[1]
        const newURL=e.newURL.split('#')[1]
        const oldMenu=document.querySelector(`.menu a[href='#${oldURL}']`)
        const newMenu=document.querySelector(`.menu a[href='#${newURL}']`)
        oldMenu && oldMenu.classList.remove('selected')
        newMenu && newMenu.classList.add('selected')
    }
    return (
        <div className="menu">
             <nav>
                <ul className="navegacao">
                    <li>
                        <a href="#inicio" className="selected">Home</a>
                    </li>                    
                    <li>
                        <a href="#produtos">Produtos</a>              
                    </li>
                    <li>
                        <a href="#minhaDelta">Minha Delta</a>
                    </li>
                    <li>
                        <a href="#laudos">Assinaturas</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                </ul>
            </nav> 
            <button className="menu-toggle">
                <i className="fa fa-lg fa-bars"></i>
            </button>         

        </div>
    )
}