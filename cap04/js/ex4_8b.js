const frm = document.querySelector('form')
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const velP = Number(frm.inVelPermitida.value)
    const velC = Number(frm.inVelCondutor.value)
    const vel20 = (20 / 100) * velP // calculo porcentagem , 20%
    if(velC <= velP){
        resp.innerHTML = `Sem Multa`
    }else if (velC <= velP + vel20){
        resp.innerHTML = 'Multa leve'
    }else{
        resp.innerHTML = 'Multa Grave'
    }
})