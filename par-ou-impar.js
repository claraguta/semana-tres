//4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar (num1){
    if (num1 % 2 == 0){
        return (`${num1} é par`)
    } else {
        return (`${num1} é ímpar`)
    }}

console.log(parOuImpar(80))
console.log(parOuImpar(155))

    
