import React from 'react';
import './index.css';

const logo = require('./assets/logo.jpg');
const bannerFundo1=require('./assets/hospitalar.png');
const bannerFundo2=require('./assets/veterinário.png');
const bannerFundo3=require('./assets/laudos.png');

function Header() {
  return (
    <header class="header"> 
        <div class="headerFundo" wm-slider>
            <p>
                <img  src={bannerFundo1}  alt="banner inicial"/>
                <img  src={bannerFundo2}  alt="banner inicial"/> 
                <img  src={bannerFundo3}  alt="banner inicial"/>
            </p>           
        </div>        
        <div class="container">
            <div class="logo">
                <img src={logo} alt="logo da Delta Life"/>
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
                        <a href="#produtos" target="_self">Produtos</a>              
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
                </ul>
            </nav>
            <button class="menu-toggle">
                <i class="fa fa-lg fa-bars"></i>
            </button>
        </div>      
    </header>
  );
}

export default Header;

