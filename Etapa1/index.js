const frutas = [1,2,3];

console.log(frutas[1]);
console.log(frutas[2]);

frutas[3] = 4;
frutas[0] = 11;
frutas[10] = 11;

console.log(frutas);
console.log(frutas[frutas.length - 1]);

const estoque = [];

estoque.push("Monitor");
const tamanhoAtual = estoque.push("Mouse");

console.log(tamanhoAtual);
console.log(estoque);

estoque.unshift("Notebook");
estoque.unshift("Teclado");
console.log(estoque);

const estoque2 = ["faca", "copo", "mesa"]

const itensRemovidos = estoque2.splice(1, 1)
console.log(estoque)

const elementoRemovidoFinal = estoque.pop();
const elementoRemovido = estoque.shift();
console.log(elementoRemovidoFinal);
console.log(elementoRemovido);