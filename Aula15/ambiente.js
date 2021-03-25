/*
num[3] = 6   ------> registra 6 dentro da variável num indice 3
num.push(7)  ------> registra 7 dentro do ultimo indice disponível da variável num
num.length   ------> exibe o tamanho do array da variável num
*/

let num = [5, 8, 2, 9, 3]
console.log(`${num}`)
num.sort()
num.push(1)
console.log(`Nosso valor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf() //inserir valor dentro dos parenteses, caso não for encontrato o valor retornado será -1
if (pos == -1) {
    console.log(`[ERRO Index ${pos}] O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}