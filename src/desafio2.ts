enum Ocupacao {
    Atiz,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Ocupacao
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao:  Ocupacao.Atiz
};


let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Ocupacao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Ocupacao.Atiz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Ocupacao.Padeiro
} 