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
