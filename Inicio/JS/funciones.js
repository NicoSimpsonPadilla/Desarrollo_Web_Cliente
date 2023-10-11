let nombre = "Hola_Mundo";
let a = 2;
let b = '3';

console.log(typeof nombre);
console.log(typeof a);

let ok = true;
console.log(typeof ok); 

console.log(a + nombre);

let simbolo = Symbol("mi simolo");
console.log(typeof simbolo);

//Ifs
if (a >= 18) {
    console.log("Persona adulta");
} else {
    console.log("Persona no adulta");
}

let hora = 9;
if (hora <= 12 && hora >= 6) {
    console.log("buenos dias");
} else if (hora >= 12 && hora <= 20) {
    console.log("buenas tardes");
} else if (hora >= 20 && hora <= 6) {
    console.log("buenas noches");
} else if (hora > 24 || hora < 0) {
    console.log("valor incorrecto");
}

let n = 4;
if (n%2 == 0) {
    console.log(n + " es par");
} else {
    console.log(n + "no es par");
}

let resultado = (3>2) ? "Verdadero" : "Falso";
//para saber si es cierto lo sucedente en el parentesis
console.log(resultado);

let x = '2'
if (isNaN(x)) {
    console.log("no es un numero");
}

let miNumero = "18";
let edad = Number(miNumero);
if (isNaN(miNumero)) {
    console.log("no es un numero");
} else {
    resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
    console.log(resultado);
}

//While
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}

//Do while
contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 4);

for (let cont=0; cont<3; cont++) {
    console.log(cont);
}

//Incremento
//Pre-imvremento (el operador ++ antes de la variables)
v = ++a;
console.log(a);
console.log(v);
//Post-incremento (el operadr ++ desues de la variable)
v = b++;
console.log(b);
console.log(v);

//Switch
let mes = 11;
let estacion = "Desconocida";
switch (mes) {
    case 12: case 1: case 2:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Desconocida';
        break;
}
console.log(estacion);

//Objects
let objeto = {
    nombre: "Nico",
    apellido:"Simpson"
}
console.log(objeto);

class Persona {
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Arrays
let marcaCoches = ['BMW', 'Audi', 'Renault', 'Ford'];
console.log(marcaCoches);
console.log(marcaCoches[2]);

//Tipos de funciones
let xx;
let yy;
function miFuncion(xx,yy){
    console.log("Suma: " + (a+b));
}
console.log(typeof miFuncion);

//Llamada a Fumcion
miFuncion(xx,yy);

//Constuctor function
var func = new Function("a", "b", "return a * b");
var res = func(10,10);

// Funciooncon notacion flecha
const arrowF = (a,b) => a*b;

// Tipos primitivos
let z = 10;

function cambiarValor(a) {
    a = 20;
}

// El objeto arguments
function miConcatenador (separator) {
    var result;
    var i;
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    console.log(result);
    return result;
}