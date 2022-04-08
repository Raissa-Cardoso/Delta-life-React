export default function clicou(url){    
    if(url.indexOf("minhadelta")===-1){                       
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
    }else{                 
        document.querySelector(`.menu a[href='/login']`).classList.add('selected') 
        const linksMinhaDelta=document.querySelectorAll(`.menuMinhaDelta a`)
        const newMinhaDelta=document.querySelector(`.menuMinhaDelta a[href='${url}']`)       
        for(let i=0;i<linksMinhaDelta.length;i++){            
            let linkMinhaDelta=linksMinhaDelta[i]            
            if(linkMinhaDelta.classList.contains('selecionado')){
                linkMinhaDelta.classList.remove('selecionado')                                             
            }                                    
        }        
        newMinhaDelta.classList.add('selecionado')          
    }
}
