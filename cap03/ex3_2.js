const prompt = require('prompt-sync')() // adiciona o papcote ao progama
const veiculo = prompt('Veículo: ')  // lê os dados 
const preco = Number(prompt('Preço R$: '))
const entrada = preco * 0.50  // calcula o valor da entrada
const parcela = entrada  / 2 // ...e das parcelas 

console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$ ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)

