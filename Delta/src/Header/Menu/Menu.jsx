import React from "react";
import './Menu.css';

export default function Menu(props){

    window.onhashchange=function(e){                
        const oldURL=e.oldURL.split('#')[1]          
        const newURL=e.newURL.split('#')[1]        
        const oldMenu=document.querySelector(`.menu a[href='#${oldURL}']`)
        const newMenu=document.querySelector(`.menu a[href='#${newURL}']`)
        oldMenu && oldMenu.classList.remove('selected') 
        newMenu && newMenu.classList.add('selected')
        if(newMenu===document.querySelector(`.menu a[href='#produtos']`)){
            document.querySelector(`.subProdutos`).style.display="block"
        }else{
            document.querySelector(`.subProdutos`).style.display="none"
        }
    } 
           
    function clicou(){        
        const inicio=document.querySelector(`.menu a[href='#inicio']`)       
        if(inicio.classList.contains('selected')){
            inicio.classList.remove('selected')
        }
    }

    return (
        <div className="menu">
             <nav>
                <ul className="navegacao">
                    <li>
                        <a href="#inicio" className="selected" onClick={clicou}>Home</a>
                    </li>                    
                    <li>
                        <a href="#produtos" onClick={clicou}>Produtos</a>
                        <div className="subProdutos">
                            <ul>
                                <li id="linhaVet">
                                    <a href="http://">Linha Veterinária</a>
                                </li>
                                <li>
                                    <a href="http://">Linha Hospitalar</a>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <a href="#assinaturas" onClick={clicou}>Assinaturas</a>
                    </li>
                    <li>
                        <a href="#contato" onClick={clicou}>Contato</a>
                    </li>
                    <li>
                        <a href="#login" onClick={clicou}>Login</a>
                    </li>
                </ul>
            </nav> 
            <button className="menu-toggle">
                <i className="fa fa-lg fa-bars"></i>
            </button>         

        </div>
    )
}