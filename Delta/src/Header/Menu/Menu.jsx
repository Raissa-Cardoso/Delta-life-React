import React from "react";
import './Menu.css';
import {Link} from 'react-router-dom'

const linha1000 = require('../../assets/vet1.jpeg');

export default function Menu(props){

    window.onhashchange=function(e){
        console.log("entrou")                
        const oldURL=e.oldURL.split('#')[1]          
        const newURL=e.newURL.split('#')[1]        
        const oldMenu=document.querySelector(`.menu a[href='#${oldURL}']`)
        const newMenu=document.querySelector(`.menu a[href='#${newURL}']`)
        oldMenu && oldMenu.classList.remove('selected') 
        newMenu && newMenu.classList.add('selected')
        if(newMenu===document.querySelector(`.menu a[href='#produtos']`)){
            document.querySelector(`.subProdutos`).style.display="flex"
        }else{
            document.querySelector(`.subProdutos`).style.display="none"
        }
    } 
           
    function clicou(){       
        const inicio=document.querySelector(`.menu a[href='/']`)             
        const produtos=document.querySelector(`.menu a[href='#produtos']`)       
        if(inicio.classList.contains('selected')){
            inicio.classList.remove('selected')
        }
        produtos.addEventListener('click', (e)=>{
            document.querySelector(`.subProdutos`).style.display="flex"
        });   
    }

    return (
        <div className="menu">
             <nav>
                <ul className="navegacao">
                    <li className="inicio" >  
                        <Link to="/"  className="selected" onClick={clicou}>Home</Link>                
                                               
                    </li>                    
                    <li>
                        <a href="#produtos" onClick={clicou}>Produtos</a>
                        <div className="subProdutos">
                            <ul>
                                <li id="linhaVet">
                                    <Link to="/linhaVeterinaria" >Linha Veterinária</Link> 
                                </li>
                                <li id="linhaHosp">
                                    <Link to="/linhaHospitalar" >Linha Hospitalar</Link> 
                                </li>
                            </ul>                               
                            <div className="demonstrativo">
                                <img src={linha1000}  alt="DL1000-Monitor Multiparametros Vet"/>
                            </div>                             
                        </div>
                    </li>
                    <li>
                        <Link to="/assinaturas" >Assinaturas</Link>                        
                        
                    </li>
                    <li>
                        <Link to="/contato" >Contato</Link> 
                    </li>
                    <li>
                        <Link to="/login" >Login</Link>
                    </li>
                </ul>
            </nav> 
            <button className="menu-toggle">
                <i className="fa fa-lg fa-bars"></i>
            </button>         

        </div>
    )
}