//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

//Usando SWITCH
let diaDaSemana = '8'

switch(diaDaSemana){
case '1':
    console.log('É domingo')
    break
case '2':
    console.log('É segunda-feira')
    break
case '3':
    console.log('É terça-feira')
    break
case '4':
    console.log('É quarta-feira')
    break
case '5':
    console.log('É quinta-feira')
    break
case '6':
    console.log('É sexta-feira')
    break
case '7':
    console.log('É sábado')
default:
    console.log(`Você digitou ${diaDaSemana}. Este da dia da semana não existe. Por favor, digite um número de 1 a 7.`)
}


///USANDO ELSE-IF

let diaDaSemana2 = '552'
if (diaDaSemana2 === '1') {
    console.log('é domingo')
} else if (diaDaSemana2 === '2'){
    console.log('é segunda')
} else if (diaDaSemana2 === '3'){
    console.log('é terça')
} else if (diaDaSemana2 === '4'){
        console.log('é quarta')
} else if (diaDaSemana2 === '5'){
    console.log('é quinta')
} else if (diaDaSemana2 === '6'){
    console.log('é sexta')
} else if (diaDaSemana2 === '7'){
        console.log('é sábado')
} else {
    console.log(`Você digitou ${diaDaSemana2}. Este dia da semana não existe. Digite um número de 1 a 7.`)
}