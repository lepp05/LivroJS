const prompt = require('prompt-sync')()

const centena = Number(prompt('Digite uma centena :'))

if(centena < 100 || centena > 1000){
    console.log('Error, digite uma CENTENA')
    return
}

const num1 = Math.floor(centena / 100)
const sobra = centena % 100
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10 

console.log(`${num3}${num2}${num1}`)