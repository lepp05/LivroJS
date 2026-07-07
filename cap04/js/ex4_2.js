const frm = document.querySelector('form')
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasc.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2) // math.pow eleva ao quadrado 
    }else{
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerHTML = `${nome}, seu peso ideal é ${peso.toFixed(3)}kg`
})

// para limpar o conteudo da resposta/h2
frm.addEventListener('reset', () =>{
    resp.innerHTML = ''
})