import './index.css'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header/bannerImagem/BannerImagem'
import Logo from './Header/Logo/Logo'
import Busca from './Header/Busca/Busca'
import Menu from './Header/Menu/Menu'
import BannerTexto from './Header/bannerTexto/BannerTexto'
import Main from "../src/Main/Main"
import Footer from './Footer/Footer'

export default function App() {
    return (
      <div className="App">
        <Router>
            <Header>            
                <Logo/>
                <Busca/>             
                <Menu/>                                  
                <BannerTexto/>            
            </Header>        
            <Main/>
            <Footer/>
        </Router>        
       
    </div>
)
}