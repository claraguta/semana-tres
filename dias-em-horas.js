//6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function DiasEmHoras (dia){

let horas = (dia*24)
return `${dia} dia(s) são ${horas} horas`

}

console.log(DiasEmHoras(1))
console.log(DiasEmHoras(2))
console.log(DiasEmHoras(10))