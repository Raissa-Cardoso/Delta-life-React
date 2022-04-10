const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios= require('axios')

const chineses=funcionarios=>funcionarios.pais==="China"
const mulheres=funcionarios=>funcionarios.genero==="F"
const menorSalario=(funcionario1,funcionario2)=> funcionario1.salario<funcionario2.salario?funcionario1:funcionario2

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
    /*MINHA RESOLUÇÃO:
    const mulheresChinesas=funcionarios.filter(funcionario=>(funcionario.genero=='F')&&(funcionario.pais=='China'))
    const menorSalario=(valor1,valor2)=>valor1<valor2?valor1:valor2
    const chinesaMenorSalario=mulheresChinesas.map(funcionaria=>funcionaria.salario).reduce(menorSalario)
    console.log(mulheresChinesas.filter(funcionaria=>funcionaria.salario==chinesaMenorSalario))      */         
})