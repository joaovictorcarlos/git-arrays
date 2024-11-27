/**
 * Array que armazena as tarefas.
 * @type {string[]}

 * Adiciona tarefas ao array de tarefas.
 * 
 * @param {...string} Tarefa - Tarefas adicionadas ao array.
 * 
 * @returns {string} O último elemento removido.
 */

function gerenciartarefas(){
let tarefas=[]//criando array
tarefas.push('limpar a casa','consertar encanamento','trocar lampadas')//adicioando tarefas
tarefas.pop()//removendo ultimo elemento
console.log(tarefas)}
gerenciartarefas()
