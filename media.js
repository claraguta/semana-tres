
//3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

function mediaDoAluno(a, b, c) {
    
    const media = (a + b + c) / 3

    if (media >= 7) {
        return `Sua média foi ${media.toFixed(1)}. Parabéns, você foi aprovado!`
    } else if (media >=5 && media < 7) {
        return `Sua média foi ${media.toFixed(1)}. Ops!! Você está de recuperação.`
    } else {
        return `Sua média foi ${media.toFixed(1)}. Eita :( Você reprovou.`
    }
}

console.log(mediaDoAluno(7,8,9))
console.log(mediaDoAluno(7,5,6))
console.log(mediaDoAluno(4,3,5))

