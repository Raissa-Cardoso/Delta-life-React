import React from 'react';
import './index.css';

const logo = require('./assets/logo.jpg');
const bannerFundo1=require('./assets/hospitalar.png');
const bannerFundo320=require('./assets/hospitalar320.png');
const bannerFundo2=require('./assets/veterinário.png');
const bannerFundo3=require('./assets/laudos.png');

function Header() {
  return (
    <header class="header"> 
        <div class="headerFundo" wm-slider>
            <p>
                <img  srcSet={`${bannerFundo320} 300w,${bannerFundo320} 768w,${bannerFundo1} 1280w`}  alt="banner inicial"/>                
                <img  src={bannerFundo2}  alt="banner inicial"/> 
                <img  src={bannerFundo3}  alt="banner inicial"/>
            </p> 
            <button type='submit'>Veja mais</button>          
        </div>        
        <div class="container">
            <div class="logo">
                <img src={logo} alt="logo da Delta Life"/>                
                <button class="menu-toggle">
                    <i class="fa fa-lg fa-bars"></i>
                </button>
            </div>            
            <div class="busca">
                <input type="text" placeholder="Pesquisa"/>                
            </div>          
           <nav class="menu">
                <ul class="navegacao">
                    <li>
                        <a href="index.html">Home</a>
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
        </div>      
    </header>
  );
}

export default Header;

