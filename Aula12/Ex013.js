var agora = new Date()
var diaSem = agora.getDay()
/*
    getDay() retorna valores de 0 a 6, correspondendo eles o dia da semana conforme abaixo
    0 = domingo
    1 = segunda
    2 = terca
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
            console.log('Domingo')
            break
    case 1:
            console.log('Segunda')
            break
    case 2:
            console.log('Terca')
            break
    case 3:
            console.log('Quarta')
            break
    case 4:
            console.log('Quinta')
            break
    case 5:
            console.log('Sexta')
            break
    case 6:
            console.log('Sabado')
            break
    default:
            console.log('[ERRO] Dia invalido')
            break
}
