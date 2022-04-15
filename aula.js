// Utilizando os conceitos que estudamos, 
// vamos criar um programa que irá nos informar os dias de aula 
// para a nossa turma.

function verificaDiaAula(diaDaSemana) {
  switch(diaDaSemana) {
    case 'quarta':
      return 'é dia de revisão'
    case'sábado':
      return 'é dia de aula'
    default:
      return 'não tem aula'
  }
}

console.log(verificaDiaAula('quinta')) // não tem aula
console.log(verificaDiaAula('sábado')) // é dia de aula
console.log(verificaDiaAula('quarta')) // é dia de revisão
