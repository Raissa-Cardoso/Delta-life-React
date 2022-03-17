import React from 'react';
import './App.css';

const logo = require('./assets/logo.jpg');
const bannerFundo1=require('./assets/bannerFundo.jpg');
const bannerFundo2=require('./assets/bannerFundo2.jpg');

function Header() {
  return (
    <header class="cabecalho"> 
        <div class="header" wm-slider>
            <p><img class="cabecalhoFundo" src={bannerFundo1}  alt="banner inicial"/></p>
            <p><img class="cabecalhoFundo" src={bannerFundo2}  alt="banner inicial"/></p>            
        </div>     
        <div class="container">
            <img id="logo" src={logo} alt="logo da Delta Life"/>
            <div class="busca">
                <input type="text" placeholder="Pesquisa"/>
                <button type="submit">OK</button>
            </div>            
            <nav class="menu">
                <ul>
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
        </div>        
    </header>
  );
}

export default Header;

