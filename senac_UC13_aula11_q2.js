/**
 * Array que armazena os itens no estoque.
 * @type {string[]}
 * @param {number} estoque - item que será atualizado no estoque.
 * @param {string} estoque - item que substituirá o item especificado.
 * @returns {number} O número total de itens no estoque.
 */

function gerenciarestoque(){
let estoque=['farinha','carne','frango','trigo']//criando array e adicionado itens
estoque[1]="peixe";//atualizando item do array
console.log("o numero total de items no estoque é", estoque.length)}
gerenciarestoque()