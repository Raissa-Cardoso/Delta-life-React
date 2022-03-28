import React from "react";


import './BannerImagem.css';
import '../../Actions/carrossel.js'

const bannerFundo1=require('../../assets/bannerHospitalar.png');
const bannerFundo2=require('../../assets/bannerVeterinario.png');
const bannerFundo3=require('../../assets/bannerLaudos.png');

export default function Header(props){ 
  
    return (
        <header>
            <div className="bannerImagem" slider="true">            
                <p><img  src={bannerFundo1}  alt="banner inicial"/></p>
                <p><img  src={bannerFundo2}  alt="banner inicial"/></p>
                <p><img  src={bannerFundo3}  alt="banner inicial"/></p>               
                <div className="agrupar">
                    {props.children} 
                </div>               
            </div>
        </header>
    )
}