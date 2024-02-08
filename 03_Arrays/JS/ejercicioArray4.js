var returnedArray = [];

function pedirValores() {
    let contador = 1;
    let lectura = 0;

    do {
        lectura = promt("Intuoduce numero: ");

        if (lectura == "*") {
            contador = 10;
        } else {
            lectura = Number(lectura);
            if (isNaN(lectura)){
                alert("Los datos introducidos no son validos");
            } else {
                returnedArray.push(lectura);
                contador++;
            }
        }
    } while (contador < 10);
    console.log(returnedArray);
    return returnedArray;
}

function calcula() {
    let arrayEntrada = pedirValores();

    calculaResultado(arrayEntrada);
}

function calculaResultado(arrEntrada) {
    let elem;
    let contador = 1;
    // opcion 1
    for (var i = 0; i < arrEntrada; i++) {
        returnedArray[i] = new Array(arrEntrada.length);
        for (j = 0; j < arrEntrada.length; j++) {
            returnedArray[i][j] = arrEntrada[i]*(j+1);
        }
    }

    // opcion 2
    for (var i = 0; i < arrEntrada.length; i++) {
        returnedArray[i] = [];
        contador = 1;
        for (var j = 0; j<arrEntrada.length; j++) {
            returnedArray[i].push(arrEntrada[i]*contador);
            contador++;
        }
    }

    // Opcion 1
    pintaResultado(returnedArray);
    
    // Opcion 2
    pintaResultado(returnedArray);
}

// Con DOM
function pintaResultado(arrMatriz) {
    let elem;
    let longitud = arrMatriz.length
    for (var i = 0; i < longitud; i++) {
        switch (i) {
            case 1:
                elem = document.getElementById("resultado1");
                break;
            case 2:
                elem = document.getElementById("resultado2");
                break;
            case 3:
                elem = document.getElementById("resultado3");
                break;
            case 4:
                elem = document.getElementById("resultado4");
                break;
            case 5:
                elem = document.getElementById("resultado5");
                break;
            case 6:
                elem = document.getElementById("resultado6");
                break;
            case 7:
                elem = document.getElementById("resultado7");
                break;
            case 8:
                elem = document.getElementById("resultado8");
                break;
            case 9:
                elem = document.getElementById("resultado9");
                break;
            case 10:
                elem = document.getElementById("resultado10");
                break;
        }
        elem.innerHTML = arrMatriz[i];
        console.log("Array" + i + " " + arrMatriz[i]);
    }
}

function pintaResultadoMatriz(retArray) {
    let elem;
    let resultado = "";

    // recorremos las filas
    for (let i = 0; i < retArray.length; i++) {
        // recorremos las columnas en la dila actual i que tenemos del for anterior
        for (let j = 0; j < retArray[i].length; j++) {
            document.write(retArray[i][j] + " ");
        }
        document.write("<br>");
    }
    console.log("Array: " + resultado);
}

