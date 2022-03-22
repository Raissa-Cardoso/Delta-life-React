import React from "react";

import './BannerImagem.css';

const bannerFundo1=require('../../assets/bannerHospitalar.png');
const bannerFundo2=require('../../assets/veterinário.png');
const bannerFundo3=require('../../assets/laudos.png');

export default function Banner(props){
    return (
        <header>
            <div className="bannerImagem" wm-slider>            
                <p>
                    <img  src={bannerFundo1}  alt="banner inicial"/>                
                    {/*<img  src={bannerFundo2}  alt="banner inicial"/> 
                    <img  src={bannerFundo3}  alt="banner inicial"/>*/}                                      
                </p>                
                {props.children}                
                
                
                
            </div>
        </header>
    )
}