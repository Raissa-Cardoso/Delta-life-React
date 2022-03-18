function gerarNumeroNaoContido (min,max,array){
    const aleatorio=parseInt(Math.random()*(max+1 -min)+min)
    return array.includes(aleatorio)? gerarNumero (min,max,array):aleatorio
}

function gerarNumero(qtde){
    const numeros=Array(qtde).fill(0).reduce(nums=>{
        const novoNumero=gerarNumeroNaoContido(1,60,nums)
        return [...nums,novoNumero]
    },[]).sort((n1,n2)=>n1-n2)
    return numeros
}

console.log(gerarNumero(6))
//console.log(gerarNumeroNaoContido(1,5,[1,2,3]))