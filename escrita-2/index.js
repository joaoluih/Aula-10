
/**
 *
 * Fa�a um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma vari�vel.
 * Em seguida, siga os passos:
 *
 * 1. Imprima no console o array completo.
 *
 * 2. Imprima no console a mensagem "Essas s�o as minhas comidas preferidas" seguida por cada uma das comidas, uma embaixo da outra.
 *
 * 3. Desafio: pergunte ao usu�rio uma comida preferida. Troque a segunda comida da sua lista pela resposta do usu�rio e imprima no console a nova lista.
 *
**/

let comidas = ["frango", "ovo", "cafe", "chocolate", "uva"]
console.log(comidas)

console.log("Essas são minhas comidas preferidas")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4]) 

let comidaUsuario = prompt("Qual sua comida preferida?") 

comidas[1] = comidaUsuario

console.log(comidas)

