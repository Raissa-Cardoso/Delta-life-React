console.log(this===global)//false
console.log(this===module) //false
console.log(this===module.exports) //true
console.log(this===exports) //true

const nome= "sara" //escopo global do arquivo
global.nome="raissa" //escopo da função
this.nome="Nina" //escopo global do node == module.exports ou exports
console.log(nome) //sara

function logThis(){
    console.log(this===module.exports)//false
    console.log(this===exports) //false
    console.log(this===global) //true
    console.log(nome) //sara 
    console.log(global.nome) //raissa
    console.log(this.nome) //raissa
    console.log(module.exports.nome) //Nina
    let idade=35 //apesar de estarmos no escopo global, a variavel só fica visivel quando jogada no objeto global
    this.idade=idade //jogando no objeto global para ficar visivel
}

logThis()
console.log(idade)
console.log(global, nome) 
/*console.log procura 1º no escopo global do arquivo e depois no objeto global
mas não procura no module.exports*/