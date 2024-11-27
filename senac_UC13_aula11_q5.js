/**
* Função que executa um jogo de adivinhação, onde o usuário tenta adivinhar um número entre 1 e 10.
* 
* 
* @function
* @returns {void} Não retorna nada, apenas exibe mensagens no console.
* 
* 
* @type {number}Gera um número aleatório entre 1 e 10.
* 
* @type {string|number}Armazena a tentativa do usuário.
* 
* @type {string} Solicita a tentativa do usuário o número ou o comando 'sair'
* 
* @returns {void} Não retorna nada, apenas exibe mensagens no console.
*/
  


function jogoAdivinhação(){
// Gerando um número aleatório entre 1 e 10
const numeroaleatorio = Math.floor(Math.random() * 10) + 1;

let tentativa;  // tentativa do usuário

// Loop while para continuar pedindo números até o usuário acertar ou digitar "sair"
while (true) {
  tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para sair:");

  if (tentativa.toLowerCase() === "sair") {
    console.log("Você escolheu sair");
    break;
  }

  // Converter a tentativa para número
  tentativa = parseInt(tentativa);

  // Verifica se a tentativa é válida
  if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
    console.log("insira um número entre 1 e 10.");
  } else if (tentativa === numeroaleatorio) {
    console.log(" Você acertou o número!");
    break;  // Encerra o loop
  } else {
    console.log("O número não é esse.");
  }
}}
jogoAdivinhação()
