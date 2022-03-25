import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Header from './Header/bannerImagem/BannerImagem'
import Logo from './Header/Logo/Logo'
import Busca from './Header/Busca/Busca'
import Menu from './Header/Menu/Menu'

import BannerTexto from './Header/bannerTexto/BannerTexto'
import Main from './Main/Main'
import Footer from './Footer/Footer'


ReactDOM.render(  
  
    <div>
        <Header>
            <Logo/>
            <Busca/>             
            <Menu/>           
            <BannerTexto/>            
        </Header>        
        <Main/>
        <Footer/>
       
    </div>,
    document.getElementById("root")
)