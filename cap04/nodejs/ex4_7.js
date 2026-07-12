const prompt = require('prompt-sync')() // adiciona o pacote prompt-sync
const pessoas = Number(prompt('Número de pessoas : '))
const peixes = Number(prompt('Número de peixes : '))
let pagar //declara variavel pagar, mas ainda sem nada 


// a entrada é $20, cada pessoa pode levar 1 peixe, cada peixe adicional é $12
//
if (peixes <= pessoas){
    pagar = pessoas *20
}else{
    pagar = (pessoas * 20) + (peixes - pessoas) * 12
}

console.log(`Total a pagar : ${pagar.toFixed(2)}`)
