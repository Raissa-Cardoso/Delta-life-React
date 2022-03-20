function sortear(min,max,qtde){
    let numeros=[]
    for(let i=1;i<=qtde;i++){
        const aleatorio=parseInt(Math.random()*(max-min)+min)
        if(numeros.indexOf(aleatorio)===-1) numeros.push(aleatorio)
    }
    return numeros.sort((n1,n2)=>n1-n2)
}


console.log(sortear(1,60,6))