var somaFuncao = require('./calculadora')

function mult(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b
}

function div(a, b) {
    return a / b
}

const a = somaFuncao(8, 22)

console.log(a)