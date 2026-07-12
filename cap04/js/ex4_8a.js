
const frm = document.querySelector('form')
const resp = document.querySelector('h2')


frm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    if(num % 2 == 0){
        resp.innerHTML = `${num} é par`
    }else {
        resp.innerHTML =`${num} é impar`
    }
}) 


    // node.js
/*
const prompt = require('prompt-sync')()

const num = Number(prompt('Digite um número : '))
if(num % 2 == 0){
    console.log('par')
}else{
    console.log('impar')
} 
    */