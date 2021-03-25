let valores = [8, 1, 7, 4 ,2, 9]
valores.sort()

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


Exibir na tela o array através do FOR
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Maneira simples de exibir na tela o array através do FOR; este comando está nas versões mais rescente da actme script
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

