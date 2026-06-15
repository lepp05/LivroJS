// cria referencia ao form, h3 e h4 (respostas)
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// cria um ouvinte de evento, acionado quando clicar no submit

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const titulo = frm.inFilme.value // obtem o conteudo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda para baixo o resultado
    const minutos = duracao % 60 // obtem o resto da divisão
    
    //exibe a resposta
    resp1.innerText = titulo
    resp2.innerText = `${horas} horas e ${minutos} minutos`
    
     // evita o envio do form
})