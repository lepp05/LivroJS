const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor da compra : '))
const aux = Math.floor(valor/20)  // numero de parcelas sem condições 
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux 
const valorParcelas = valor / parcelas 

console.log(`pode pagar em ${parcelas}x de ${valorParcelas.toFixed(2)}`)