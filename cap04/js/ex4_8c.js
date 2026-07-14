const frm = document.querySelector('form')
const respTempo = document.getElementById('respTempo')
const respTroco = document.getElementById('respTroco')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let min30 = Number(1.00)
    let min60 = Number(1.75)
    let min120 = Number(3.00)
    if(valor < min30){
        respTempo.innerHTML = 'valor insuficiente'
    }else if (valor >= min30 && valor < min60){
        respTempo.innerHTML = 'Tempo : 30 min'
        const troco = valor - min30
        respTroco.innerHTML = `Troco R$ : ${troco.toFixed(2)}`
    }else if(valor >= min60 && valor < min120){
        respTempo.innerHTML = 'Tempo : 60 min'
        const troco = valor - min60
        respTroco.innerHTML = `Troco R$ : ${troco.toFixed(2)}`
    }else if(valor >= min120){
        respTempo.innerHTML = 'Tempo : 120 min'
        const troco = valor - min120
        respTroco.innerHTML = `Troco R$ : ${troco.toFixed(2)}`
    }

})