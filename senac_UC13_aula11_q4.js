/**
 * Array que contém uma lista de palavras.
 * 
 * @type {string[]}
 * 
 * @function
 * @returns {void} Não retorna nada, apenas exibe as palavras no console.
* 
* @type {string} - Exibe a palavra na posição `i` do array no console.
*/


function exibirPalavrasReverso(palavras){
// Criando o array
const items = ["café", "livro", "código", "javascript", "aprendizado"];

// Loop for reverso para exibir cada palavra no console
for (let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}}
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
