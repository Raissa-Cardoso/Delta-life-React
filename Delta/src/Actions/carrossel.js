window.onload=function(e){
    const elementos = document.querySelectorAll("[wm-slider] > p") 
    const frases = document.querySelectorAll("[wm-slider] h2")       
    const slides= Array.from(elementos)
    const conjuntoFrases= Array.from(frases)
    console.log(conjuntoFrases)
    exibirSlide(slides,slides[0], conjuntoFrases, conjuntoFrases[0])
}
function exibirSlide(slides,slide, frases, frase){
    slide.style.display="block"
    frase.style.display="block"
    const inicio=320
    const fim=-320
    frase.style.left=`${inicio}px`
    slide.style.left=`${inicio}px`
    mover(slide,frase, inicio,fim,5,()=>{
        slide.style.display="none"
        frase.style.display="none"
        exibirSlide(slides,getProximo(slides,slide), frases,getProximo(frases,frase) )
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