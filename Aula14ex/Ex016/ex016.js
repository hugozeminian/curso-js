function count()    {
    var count
    var start = document.getElementById('start')
    var startN = Number(start.value)
    var end = document.getElementById('end')
    var endN = Number(end.value)
    var step = document.getElementById('step')
    var stepN = Number(step.value)
    result.innerHTML = "Contador: <br>"


    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0 || step.value < 1) {
        result.innerHTML = `IMPOSSIVEL CONTAR`
        window.alert('[ERRO] Verifique os valores inseridos')

    } else {
        if(startN < endN) {
            // for(inicio; teste; incrementa)
            for(count = startN; count <= endN; count += stepN){
                result.innerHTML += `${count} \u{1F449} `
            }
        
        } else if (startN > endN) {
            for(count = startN; count >= endN; count -= stepN){
                result.innerHTML += `${count} \u{1F449} `
            }
        } else {
                result.innerHTML += `Inicio e Fim possuem dados iguais `
        }
        
    }
    result.innerHTML += `\u{1F3C1}`
}

