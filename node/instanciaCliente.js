const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //foi alterado porque ambos apontam para o mesmo objeto obtido pelo require sem factory

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) //não foi alterado porque com a factory eles apontam para objetos diferentes

