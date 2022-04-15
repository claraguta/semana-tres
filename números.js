
//2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function maiorOuMenor(a, b) {
    if (a > b) {
        return `${a} é maior do que ${b}.`
    } else if (b > a) {
        return `${a} é menor do que ${b}.`
    } else {
        return `Os números são iguais.`
    }
}

console.log(maiorOuMenor(2,2))
console.log(maiorOuMenor(2,5))
console.log(maiorOuMenor(5,2))