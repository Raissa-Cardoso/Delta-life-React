import React from "react";


import './BannerImagem.css';


const bannerFundo1=require('../../assets/bannerHospitalar.png');
const bannerFundo2=require('../../assets/bannerVeterinario.png');
const bannerFundo3=require('../../assets/bannerLaudos.png');
const bannerFundo4=require('../../assets/manutencao1.png');

export default function Header(props){ 
    window.onload=function(e){
        const elementos = document.querySelectorAll("[slider] > p") 
        const frases = document.querySelectorAll("[slider] h2")       
        const slides= Array.from(elementos)
        const conjuntoFrases= Array.from(frases)    
        exibirSlide(slides,slides[0], conjuntoFrases, conjuntoFrases[0])    
    }
    let imagem=0
    function exibirSlide(slides,slide, frases, frase){
        imagem=slides.indexOf(slide)
        props.imagem(imagem)
        slide.style.display="block"
        frase.style.display="block"
        const inicio=320
        const fim=-320
        frase.style.left=`${inicio}px`
        slide.style.left=`${inicio}px`
        mover(slide,frase, inicio,fim,5,()=>{
            slide.style.display="none"
            frase.style.display="none"        
            exibirSlide(slides,getProximo(slides,slide), frases,getProximo(frases,frase))
        })
    }    
    function getProximo(lista,atual){
        const i=lista.indexOf(atual)+1
       
        return i<lista.length?lista[i]:lista[0]
    }
    function mover(elem,frase, inicio, fim, passo, callback){
        const novoInicio=inicio-passo
        if(novoInicio>=fim){
            elem.style.left=novoInicio + "px"
            frase.style.left=novoInicio + "px"
            setTimeout(()=>mover(elem,frase, novoInicio, fim, passo, callback), 30)
        }else{
            callback()
        }
    }
    
    
    return (
        <header>
            <div className="bannerImagem" slider="true">            
                <p><img  src={bannerFundo1}  alt="banner inicial"/></p>
                <p><img  src={bannerFundo2}  alt="banner inicial"/></p>
                <p><img  src={bannerFundo3}  alt="banner inicial"/></p>   
                <p><img  src={bannerFundo4}  alt="banner inicial"/></p>             
                <div className="agrupar">
                    {props.children} 
                </div>               
            </div>
        </header>
    )
}