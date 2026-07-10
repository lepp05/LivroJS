const frm = document.querySelector('form')
const resp = document.querySelector('h2')


frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)  // calcula a raiz quadrada de um numero
    
    if(Number.isInteger(raiz)){    // verifica se o resultado é um numero inteiro
        resp.innerHTML = `Raiz : ${raiz}`
    }else {
        resp.innerHTML = `Não há raiz exata para ${numero}`
    }
})