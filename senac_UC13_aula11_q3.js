/**
* Array contendo os alunos e suas respectivas notas.
* 
* 
* @type {Array<[string, number, number, number]>}
* 
* @function
* @returns {void} Não retorna nada, apenas exibe no console.
* @type {string} - nome do aluno
* @type {number} -  Soma das notas do aluno.
* @type {number} - Média das notas do aluno.
 */

function calcularMediaAlunos(){
const alunos = [
    ["João", 7.5, 8.0, 6.5],  
    ["Maria", 9.0, 9.5, 8.0],  
    ["Pedro", 6.0, 7.5, 7.0]   
  ];//array com alunos e nota
  
  // Loop para calcular a média das notas de cada aluno
  for (let i = 0; i < alunos.length; i++) {
    const nome = alunos[i][0];
    let somaNotas = 0;
  
    // Loop aninhado para somar as notas
    for (let j = 1; j < alunos[i].length; j++) {
      somaNotas += alunos[i][j];
    }
  
    // Calcular a média
    const media = somaNotas / (alunos[i].length - 1);
  
    // Exibir o nome e a média
    console.log(`${nome}: Média = ${media.toFixed(2)}`);
  }}

calcularMediaAlunos()
  