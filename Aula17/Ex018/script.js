
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function inNumero(n) { //valida se numero inserido esta entre o solicidade
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) { //valida se o numero inserido ja se encontra na lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(inNumero(num.value) && !inLista(num.value, valores)) { // "!" quer dizer nao em JS. ou seja sera o inverso        //window.alert('Tudo ok')
        valores.push(Number(num.value)) // PUSH eh adicionar valores a um Vetor    
        let item = document.createElement('option') // adicionar o elemento interido no Selection, para isso criar um Option
        item.text = `Valor ${num.value} adicionado.` // String com possibilidade de interpolacao
        lista.appendChild(item) // Este eh o comando que ira adicionar a lista
        res.innerHTML = ''
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = '' // apaga o ultimo valor digitado no campo de entrada
    num.focus() // deixa o curso no campo de entrada (curso piscando)
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) { //Maneira simples de exibir na tela o valor do array através do FOR; este comando está nas versões mais rescente da actme script
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${media}.</p>`    
    }
}