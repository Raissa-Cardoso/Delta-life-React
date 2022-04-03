export default function clicou(url){                
    const links=document.querySelectorAll(`.menu a`)          
    for(let i=0;i<links.length;i++){            
        let link=links[i]
        if(link.classList.contains('selected')){
            link.classList.remove('selected')
        }
    }
    
    if((url==="/produtos")||(url==="/linhaVeterinaria")||(url==="/linhaHospitalar")){            
        document.querySelector(`.subProdutos`).style.display="flex"             
        document.getElementById(`produtos`).classList.add('selected')
        if((url==="/linhaVeterinaria")||(url==="/linhaHospitalar")){
            document.querySelector(`.menu a[href='${url}']`).classList.add('selected')
        }
        
    }else{
        document.querySelector(`.subProdutos`).style.display="none" 
        const newMenu=document.querySelector(`.menu a[href='${url}']`)
        newMenu.classList.add('selected')           
    }

}
