const fs = require('fs')

const leitorDeArquivo = () => {

    return JSON.parse(fs.readFileSync('./bd.json'))


}

const escritorDeArquivo = (dados: any): void => {

    fs.writeFileSync('./bd.json', JSON.stringify(dados))

}

type Endereco = {

    cep: number,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string

}

type Usuario = {

    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null

}


const cadastrarUsuario = (dados: Usuario): Usuario => {

    const bd = leitorDeArquivo() as Usuario[]
    bd.push(dados)

    escritorDeArquivo(bd)

    return dados;

}

const listarUsuarios = (): Usuario[] => {

    return leitorDeArquivo() as Usuario[];

}

const evandro = cadastrarUsuario({
    nome: 'Evandro',
    email: 'evandro@email.com',
    cpf: "123456789-10",
    profissao: 'DEV',
    endereco: {

        cep: 456745213,
        rua: 'Uma rua qualquer',
        bairro: 'Um bairro qualquer',
        cidade: 'Uma cidade qualquer'

    }

})

const bd = leitorDeArquivo()
console.log(evandro, bd);
