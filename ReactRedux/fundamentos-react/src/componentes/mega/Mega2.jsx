import React, {useState} from "react";

export default props=>{
    let [numero,setNumero]=useState(0)
    let [numeros,setNumeros]=useState(Array(props.qtde).fill(0))
    function sortear(min,max,qtde){
        const aleatorio=parseInt(Math.random()*(max-min)+min) 
        setNumero(aleatorio)
        setNumeros([...numero])
        /*for(let i=1;i<=qtde;i++){
            const aleatorio=parseInt(Math.random()*(max-min)+min)
            if(numeros.indexOf(aleatorio)===-1) setNumeros(aleatorio)
        }       
        return numeros*/
    }
    
    return(
        <div>
            <h3>Mega2</h3>
            <h2>{numero} {numeros}</h2>
            <div>
                <label>Quantidade de números</label>
                <input type="number" min="1" />
                <button onClick={e=>sortear(props.min,props.max,props.qtde)}>Sortear</button>
            </div>            
        </div>
    )
}