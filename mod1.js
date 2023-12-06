const nome = 'Leandro';
const sobrenome = 'Machado';

const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;