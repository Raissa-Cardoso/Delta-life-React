const os = require('os') //para usar o ${os.EOL} (quebra de linha ou enter em todos os sistemas operacionais)
const anonimo=process.argv.indexOf('-a')!==-1
//console.log(anonimo)

if(anonimo){
    process.stdout.write("Fala anonimo!\n")
    process.exit()
}else{
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on('data', data=>{
        const nome=data.toString().replace(`${os.EOL}`, '') 
        process.stdout.write(`Fala ${nome}!!${os.EOL}`)
        //${os.EOL}==\n (no MacOs) ou \r\n(windows) é a quebra de linha ou o clique do enter
        process.exit()
    })
}