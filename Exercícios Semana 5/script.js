
//Exercício 01
const mensagemOla = () => {
  return 'Olá Mundo!!!';
};

//Exercício 02
const mensagemOla2 = nome => {
  return `Olá ${nome}`;
};

const ListaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Exercício 03
const invertArray = array => {
   var ListaNumerosInvertida = array
  return ListaNumerosInvertida.reverse();
};

//Exercício 04
const impares = numeros => numeros.filter(x => x % 2 != 0);

//Exercício 05
const quadrado = numeros => numeros.map(x => x ** 2);

//Exercício 06

const gravaLocalStorage = () => {
let frutas = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra'];

frutas.forEach(function (valor, indice) {
  let chave = 'Frutas ' + indice
  localStorage.setItem(chave, valor);
});
}