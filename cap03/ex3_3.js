const prompt = require("prompt-sync")()

const salario = Number(prompt('Salário: '))
const tempo = Number(prompt('Tempo: '))
const quad = Math.floor(tempo / 4)
const acr = (salario * quad) / 100

console.log(`Quadricenios: ${quad}`)
console.log(`Salario final R$: ${(salario+acr).toFixed(2)}`)





