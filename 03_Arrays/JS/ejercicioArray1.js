// Ejercicios 1
function calcula() {
    var numeros = [];
    for (i = 0; i < 6; i++) {
        numeros[i] = prompt("Dime numero entero: ");
        numeros[i] = Number(numeros[i]);
    }
    let aux = 0;
    aux = Number(aux);
    for (i = 0; i < 6; i++) {
        aux += numeros[i];
        numeros[i] = aux;
    }
    alert('La suma es: ' + numeros);
}