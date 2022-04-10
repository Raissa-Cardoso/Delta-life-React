const  minhaAppME  = require('./global')

require('./global')
console.log(minhaApp.nome)
console.log(module.exports.nomeME) //undefined, não foi trazido no require sem variável
//console.log(nomeME) dá erro porque o module.exports não está no global importado
console.log(minhaAppME.nomeME) //foi trazido com require com variável


/* 1)No processo de importar e exportar do node: quando executado um console.log em um aquivo que exportou outro, 
os console.log executados no arquivo importado, serão executados novamente de forma automatica no arquivo exportado.
2) Ao importar um arquivo sem colocar o require em uma variável, só o que estiver dentro do global será trazido
3) Para importar o module.exports é necessário colocar o require dentro de uma variável. 
4) global e module.exports são OBJETOS NATIVOS DO NODE. 
5) Apesar de module.exports ser um objeto criado no escopo global do arquivo, ele não é colocado 
dentro do objeto global do NODE. 
6) require sem variável só contém os objetos criados na variável global e, quando colocado em uma variável tudo é 
importado.
7) OU SEJA, tudo o que for criado dentro do objeto global, pode ser acessado dentro do próprio arquivo onde foi criado,
sem a necessidade de colocar (global.) e também quando este arquivo for importado.
Já para acessar algo dentro de module.exports: dentro do arquivo onde foi criado é preciso acessá-lo especificamente
(com module.exports.) e, para importá-lo é preciso colocá-lo dentro de uma variável.
*/