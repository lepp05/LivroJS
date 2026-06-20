const frm = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

frm.addEventListener('submit', (e) =>{
    const nome = frm.inNome.value
    const preco = Number(frm.inPreco.value)

    const promo = (preco * 2) + preco / 2
    const desc = preco / 2

    resp1.innerHTML = `${nome} - Promoção: Leve 3 por R$: ${promo.toFixed(2)}`
    resp2.innerHTML = `O terceiro produto custa apenas R$: ${desc.toFixed(2)}`

    e.preventDefault()
})