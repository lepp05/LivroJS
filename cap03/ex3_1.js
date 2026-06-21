const prompt = require('prompt-sync')() //adiciona pacote para entrada de dados
const num1 = Number(prompt('1° número: ')) // lê os números
const num2 = Number(prompt('2° número: '))
const soma = num1 + num2  // faz a soma
console.log(`A soma é : ${soma} `) //exibe o resultado

// no terminal, na pasta do arquivo, digito: node ex3_1