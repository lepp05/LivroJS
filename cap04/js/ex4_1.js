const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2
    resp1.innerHTML = `sua média é ${media}`

    if(media >= 7){
        resp2.innerHTML = `${nome}, vc passou`
    }else if(media < 5){
        
    }else{
        resp2.innerHTML = `${nome}, vc reprovou`
        resp2.style.color = 'red'
    }
    
})