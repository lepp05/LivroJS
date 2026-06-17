const frm = document.querySelector('form')
const resp = document.querySelector('#resp')

frm.addEventListener('submit', (e) =>{
    const valor = Number(frm.inPreco.value)
    const grama = Number(frm.inGrama.value)

    const pagar = valor / 1000 * grama

    resp.innerText = `Valor a ser pago R$ : ${pagar.toFixed(2)}`

    e.preventDefault()
})