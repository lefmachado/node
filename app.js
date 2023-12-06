// const mod1 = require('./mod1');
// mod1.falaNome();

const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome());

const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Leandro');
console.log(p1);
