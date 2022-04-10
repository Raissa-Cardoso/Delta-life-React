global.minhaApp={
    saudacao(){
        return "Estou em todos os lugares!"
    },
    nome:"Sistema X"
}

Object.freeze(global.minhaApp)

/*function teste(){
    console.log("aqui é função")    
}
teste()
Todos os console.log criados aqui são exportados para todos os arquivos que importarem este arquivo
*/


//console.log(minhaApp) //aparece aqui
module.exports={
    //minhaAppME:{nome:"ksjakj"},
    nomeME:"Esse nome está no module.exports!"
}
//console.log(nomeME) não aparece aqui, só se colocar module.exports.nomeME
//console.log(global)

//console.log(minhaApp.nome)
//console.log(minhaAppME.nome)
