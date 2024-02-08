var autos = ['BMW', 'Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var items = new Array(1, 6);
var items = new Array(6);

var pets = new Array("dog", "cat", "rabbit");
var pet = pets[0];
console.log(pet);
var people = new Array("Jose", "Luis", "Antonio", "Olga", "Jose Miguel");
people.length;

let resultado="";
let fLen = people.length
for (i=0; i<fLen; i++) {
    resultado = people[i] + ", " + resultado;
}
console.log(resultado);

// Foreach
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

// Quita el ultimo elemento del arrays
people.pop();
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

let aux = people[0];
// Sacamos el 1er elemento
people.shift();
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

// Añadimos el 1er elemento
aux = people.unshift("Jose Miguel");
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

// Ordenar array
people.sort();
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

people.reverse();
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

// Buscar posicion
let pos = people.indexOf("Jose Miguel");
console.log(pos);

let elementoEliminado = people.splice(pos, 2, "Pepe");
people.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

elementoEliminado.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});

// Copia de un Array
let copiaArray = people.slice();
copiaArray.forEach (function(elemento, indice, array) {
    console.log(elemento, indice);
});