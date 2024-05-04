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

const listarUsuarios = (filtro?: string): Usuario[] => {

    const bd = leitorDeArquivo() as Usuario[]

    const usuarios = bd.filter(usuario => {

        if (filtro) {
            return usuario.profissao === filtro
        }

        return usuario;
    })

    return usuarios;

}

const detalharUsuario = (cpf: string): Usuario => {

    const bd = leitorDeArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    });

    if (!usuario) {
        throw new Error("Usuário não encontrado");

    }

    return usuario;

}

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {

    const bd = leitorDeArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    });

    if (!usuario) {
        throw new Error("Usuário não encontrado");

    }

    Object.assign(usuario, dados);

    escritorDeArquivo(bd)

    return dados;


}

// const evandro = cadastrarUsuario({
//     nome: 'Evandro',
//     email: 'evandro@email.com',
//     cpf: "123456789-10",
//     profissao: 'DEV',
//     endereco: {

//         cep: 456745213,
//         rua: 'Uma rua qualquer',
//         bairro: 'Um bairro qualquer',
//         cidade: 'Uma cidade qualquer'

//     }

// })

//const evandro = detalharUsuario('123456789-10')

// atualizarUsuario('123456789-10', {
//     nome: 'Evandro',
//     email: 'evandro@email.com',
//     cpf: "123456789-10",
//     profissao: 'backend',
//     endereco: {

//         cep: 456745213,
//         rua: 'Uma rua ali qualquer',
//         bairro: 'Um bairro qualquer',
//         cidade: 'Uma cidade qualquer'

//     }
// })

const excluirUsuario = (cpf: string): Usuario => {

    const bd = leitorDeArquivo() as Usuario[]
    const usuario = bd.find(usuario => {
        return usuario.cpf === cpf
    });

    if (!usuario) {
        throw new Error("Usuário não encontrado");

    }

    const exclusao = bd.filter(usuario => {

        return usuario.cpf !== cpf

    })

    escritorDeArquivo(exclusao)

    return usuario;

}

const bd = leitorDeArquivo()
console.log(bd);
