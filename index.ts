const fs = require('fs')

const leitorDeArquivo = () => {

    return JSON.parse(fs.readFileSync('./bd.json'))


}

const escritorDeArquivo = (dados: any): void => {

    fs.writeFileSync('./bd.json', JSON.stringify(dados))

}

const dados = leitorDeArquivo() as string[]

dados.push('Ucciolini')
escritorDeArquivo(dados)

console.log(leitorDeArquivo());
