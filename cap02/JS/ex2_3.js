const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e) => {
    
    
    const nome = frm.inNome.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco / 2
    const parcelas = entrada / 12

    resp1.innerHTML = `Promoção : ${nome}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)} `
    resp3.innerText = `+ 12x de R$ ${parcelas.toFixed(2)}`

    e.preventDefault()
})

