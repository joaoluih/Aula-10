
// Indique todas as mensagens impressas no console, sem executar o programa

let array
console.log('a. ', array)    /* console.log('a, ', array) - vai imprimir a, undefined */

array = null
console.log('b. ', array) /* console.log('b, ', array) - vai imprimir b, null */

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]   /* console.log('c, ', array.length) - imprimir c, 11 */ 
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i]) /* console.log('d, ', array[i]) - vai imprimir d, 3 */ 

array[i+1] = 19
console.log('e. ', array) e /* console.log('e, ', array) - vai imprimir e, 11 */ 

const valor = array[i+6]  /* console.log('f, ', valor) vai imprimir f, 9 */ 
console.log('f. ', valor)  
