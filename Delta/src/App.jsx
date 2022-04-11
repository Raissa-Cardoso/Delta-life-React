import './index.css'
import {React,useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header/bannerImagem/BannerImagem'
import Logo from './Header/Logo/Logo'
import Busca from './Header/Busca/Busca'
import Menu from './Header/Menu/Menu'
import BannerTexto from './Header/bannerTexto/BannerTexto'
import Main from "../src/Main/Main"
import Footer from './Footer/Footer'

export default function App() {
    let [imagemApp,setImagem]=useState("")
    switch (imagemApp) {
        case 0:
            imagemApp="hospitalar"
            break;
        case 1:
            imagemApp="veterinario"
            break;
        case 2:
            imagemApp="laudos"
            break;
            
    
        default:
            imagemApp="manutencao"
            break;
    }
    function mudouImagem(imagem){        
       setImagem(imagem)
    }
    return (
      <div className="App">
        <Router>
            <Header imagem={mudouImagem}>            
                <Logo/>
                <Busca/>             
                <Menu/>                                  
                <BannerTexto botaoCarrossel={`/vejamais/${imagemApp}`}/>            
            </Header>        
            <Main />
            <Footer/>
        </Router>        
       
    </div>
)
}