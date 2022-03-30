const alunos=[
    {
        nome:"fulano",
        notas:[10,9,8]
    },
    {
        nome:"jsdhj",
        notas:[8,7,6]
    }
]

const notas=alunos.map(aluno=>{return aluno.notas}).map(nota=>{return nota})
console.log(notas)

