import React from "react";

import './BannerImagem.css';

const bannerFundo1=require('../../assets/bannerHospitalar.png');
const bannerFundo2=require('../../assets/veterinário.png');
const bannerFundo3=require('../../assets/laudos.png');

export default function Banner(props){
    let i=0        
    const imagens = document.querySelectorAll("[wm-slider] > p")      
    function clicou(){ 
        console.log(i, imagens.length)                      
        let atual= imagens[i]
        atual.style.display="none";
        let proxima=0                   
        if(i===imagens.length-1){
            proxima=imagens[0]                
            i=0                
            console.log("if")                          
        } else {
            proxima=imagens[i+1]               
            i++
            console.log("else")
        }
            proxima.style.display="block"                
            proxima.classList.add('mover');                  

    }

    return (
        <header>
            <div className="bannerImagem" wm-slider>            
                <p>
                    <img  src={bannerFundo1}  alt="banner inicial"/>                
                    {/*<img  src={bannerFundo2}  alt="banner inicial"/> 
                    <img  src={bannerFundo3}  alt="banner inicial"/>*/}                                      
                </p>               
                <div className="agrupar">
                    {props.children} 
                </div>
                
                               
                
                
                
            </div>
        </header>
    )
}