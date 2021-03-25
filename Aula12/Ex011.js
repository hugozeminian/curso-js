var idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota')
} else if (idade < 18) {
        console.log('Voto opcional')
} else if (idade >= 18 && idade < 65) {
    console.log('Voto obrigatorio')
} else if (idade >= 65) {
    console.log('Voto opcional')
}

// segunda opcao -> feito pelo Guanabara
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
} 