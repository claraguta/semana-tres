//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se esse numero é par ou ímpar.

function dividir (num1,num2){
   
   let divisao = num1/num2
   
    if (divisao % 2 == 0){
        return (`${divisao} é par`)
    } else {
        return (`${divisao} é ímpar`)
    }}

console.log(dividir(80,20))
console.log(dividir(155,50))