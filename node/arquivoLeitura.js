const fs=require('fs')

const caminho= __dirname +'/arquivo.json'

//sincrono
const conteudo=fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono

fs.readFile(caminho, 'utf-8', (err,conteudo)=>{
    const config=JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//para leitura especifica de arquivos JSON
const config =require('./arquivo.json')
console.log(config.db)

//para ler diretório
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)  //retorna um ARRAY os nomes de todos os arquivos da pasta node, onde está o arquivoLeitura.js
    console.log("abrindo arquivo...")
    console.log(fs.readFileSync(`${__dirname}/${arquivos[0]}`, 'utf-8'))
})