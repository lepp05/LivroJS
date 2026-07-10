const frm = document.querySelector('form')
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const hora = Number(frm.inHora.value)
    let horaFranca = hora + 5

    if(horaFranca > 24 ){ // se passar das 24 hrs na frança 
        horaFranca = horaFranca - 24  //... subtrai 24 , reseta 
    }
    resp.innerHTML = `${horaFranca.toFixed(2)}`
})