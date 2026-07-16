const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoB + ladoA)){  // se um lado for maior que a soma dos outros 2, nao pode formar  
        resp1.innerHTML = 'Lados não podem formar um triangulo'
        resp2.innerHTML = ''
        return

    }else{
        resp1.innerHTML = 'Lados podem formar um triangulo'
    }

    if(ladoA == ladoB && ladoB == ladoC){  // se forem iguais
        resp2.innerHTML = 'Equilátero'
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) { // se 2 lados forem iguais
        resp2.innerHTML = 'Isósceles'
    }else {
        resp2.innerHTML = 'Escaleno'   // se todos os lados forem diferentes
    }
})