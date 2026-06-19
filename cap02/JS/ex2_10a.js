const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    const med = frm.inMed.value
    const preco = Number(frm.inPreco.value)

    const desc = Math.floor(preco) * 2
    //const rest ????

    resp1.innerHTML = `Promoção de : ${med}`
    resp2.innerHTML = `Leve 2 por apenas R$: ${desc.toFixed(2)}`

    e.preventDefault()

})