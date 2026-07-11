const frm = document.querySelector('form')
const resp100 = document.getElementById('nota100')
const resp50 = document.getElementById('nota50')
const resp10 = document.getElementById('nota10')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if (valor <= 0){
        alert('Digite um valor maior que 0 ')
        frm.inValor.focus()
        return
    }

    if (valor % 10 != 0) { // se o valor não é multiplo de 10 
        alert('Valor inválido para as notas disponiveis: 10 - 50 - 100')
        frm.inValor.focus()
        return
    }
    const nota100 = Math.floor(valor/100) // calcula notas de 100
    let resto = valor % 100 // quanto sobra pra pagar

    const nota50 = Math.floor(resto/50)
    resto = resto % 50

    const nota10 = Math.floor(resto / 10)

    if(nota100 > 0){
        resp100.innerText = `Notas de 100 : ${nota100}`
    }else{
        resp100.innerText = ''
    }

    if (nota50 > 0){
        resp50.innerText = `Notas de 50 : ${nota50}`
    }else{
        resp50.innerText = ''
    }

    if(nota10 > 0){
        resp10.innerText = `Notas de 10 : ${nota10}`
    }else{
        resp10.innerText = ''
    }
})