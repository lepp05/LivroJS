const prompt = require('prompt-sync')()

const pesoK = Number(prompt('peso Kg : '))
const consumoDia = Number(prompt('Consumo no dia gr: '))
const pesoG = pesoK * 1000

const duracao = Math.floor(pesoG / consumoDia)
const sobra = pesoG % consumoDia 

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra : ${sobra}gm`)
