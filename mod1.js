const nome = 'Leandro';
const sobrenome = 'Machado';

const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);