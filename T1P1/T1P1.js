function gramosKgs() {
    let gramos = prompt("Introduce peso en gramos: ");
    let kilogramos = 0;
    if (isNaN(gramos) || gramos < 0) {
        alert("Datos son incorrectos");
    } else {
        kilogramos = parseInt(gramos) * 1000;
        alert(gramos + " gramos es equivalente a " + kilogramos + " kilogramo/s.");
        console.log(gramos + " gramos es equivalente a " + kilogramos + " kilogramo/s.");
    }
}

function media() {
    let num1,num2,num3,num4,num5,num6,num7,num8,num9,num10 = -1;
    let media = 0.0;
    media = parseInt(media);
    while (num1 < 0 || isNaN(num1)){
        num1 = prompt("Introduce un valor numero 1: ");
        num1 = parseInt(num1);
        if (num1 < 0 || isNaN(num1)){
            alert("Datos son incorrectos");
        } else {
            media += num1;
        }
    }
    while (num2 < 0 || isNaN(num2)){
        num2 = prompt("Introduce un valor numero 2: ");
        num2 = parseInt(num2);
        if (num2 < 0 || isNaN(num2)){
            alert("Datos son incorrectos");
        } else {
            media += num2;
        }
    }
    while (num3 < 0 || isNaN(num3)){
        num3 = prompt("Introduce un valor numero 3: ");
        num3 = parseInt(num3);
        if (num3 < 0 || isNaN(num3)){
            alert("Datos son incorrectos");
        } else {
            media += num3;
        }
    }
    while (num4 < 0 || isNaN(num4)){
        num4 = prompt("Introduce un valor numero 4: ");
        num4 = parseInt(num4);
        if (num1 < 0 || isNaN(num1)){
            alert("Datos son incorrectos");
        } else {
            media += num4;
        }
    }
    while (num5 < 0 || isNaN(num5)){
        num5 = prompt("Introduce un valor numero 5: ");
        num5 = parseInt(num5);
        if (num5 < 0 || isNaN(num5)){
            alert("Datos son incorrectos");
        } else {
            media += num5;
        }
    }
    while (num6 < 0 || isNaN(num6)){
        num6 = prompt("Introduce un valor numero 6: ");
        num6 = parseInt(num6);
        if (num6 < 0 || isNaN(num6)){
            alert("Datos son incorrectos");
        } else {
            media += num6;
        }
    }
    while (num7 < 0 || isNaN(num7)){
        num7 = prompt("Introduce un valor numero 7: ");
        num7 = parseInt(num7);
        if (num7 < 0 || isNaN(num7)){
            alert("Datos son incorrectos");
        } else {
            media += num7;
        }
    }
    while (num8 < 0 || isNaN(num8)){
        num8 = prompt("Introduce un valor numero 8: ");
        num8 = parseInt(num8);
        if (num8 < 0 || isNaN(num8)){
            alert("Datos son incorrectos");
        } else {
            media += num8;
        }
    }
    while (num9 < 0 || isNaN(num9)){
        num9 = prompt("Introduce un valor numero 9: ");
        num9 = parseInt(num9);
        if (num9 < 0 || isNaN(num9)){
            alert("Datos son incorrectos");
        } else {
            media += num9;
        }
    }
    while (num10 < 0 || isNaN(num10)){
        num10 = prompt("Introduce un valor numero 10: ");
        num10 = parseInt(num10);
        if (num10 < 0 || isNaN(num10)){
            alert("Datos son incorrectos");
        } else {
            media += num10;
        }
    }

    media /= 10;

    let frase = "Los valores que superan el valor medio " + media + " son: ";
    if (num1 > media) {
        let num = num1;
        frase += num + " ";
    }
    if (num2 > media) {
        let num = num2;
        frase += num + " ";
    }
    if (num3 > media) {
        let num = num3;
        frase += num + " ";
    }
    if (num4 > media) {
        let num = num4;
        frase += num + " ";
    }
    if (num5 > media) {
        let num = num5;
        frase += num + " ";
    }
    if (num6 > media) {
        let num = num6;
        frase += num + " ";
    }
    if (num7 > media) {
        let num = num7;
        frase += num + " ";
    }
    if (num8 > media) {
        let num = num8;
        frase += num + " ";
    }
    if (num9 > media) {
        let num = num9;
        frase += num + " ";
    }
    if (num10 > media) {
        let num = num10;
        frase += num + " ";
    }

    frase += "Supera el doble de la media: ";
    if (num1 > media*2) {
        let num = num1;
        frase += num + " ";
    }
    if (num2 > media*2) {
        let num = num2;
        frase += num + " ";
    }
    if (num3 > media*2) {
        let num = num3;
        frase += num + " ";
    }
    if (num4 > media*2) {
        let num = num4;
        frase += num + " ";
    }
    if (num5 > media*2) {
        let num = num5;
        frase += num + " ";
    }
    if (num6 > media*2) {
        let num = num6;
        frase += num + " ";
    }
    if (num7 > media*2) {
        let num = num7;
        frase += num + " ";
    }
    if (num8 > media*2) {
        let num = num8;
        frase += num + " ";
    }
    if (num9 > media*2) {
        let num = num9;
        frase += num + " ";
    }
    if (num10 > media*2) {
        let num = num10;
        frase += num + " ";
    }

    alert(frase);
    console.log(frase);
}

function arrayRandom() {
    let numArray = 0;
    while (isNaN(numArray) || numArray < 5 || numArray > 10) {
        numArray = prompt("Introduce la dimension del array(5 - 10): ");
        if (isNaN(numArray) || numArray < 5 || numArray > 10) {
            alert("Datos son incorrectos");
        }
    }

    let arrayR = [];
    numArray = parseInt(numArray);
    let frase = "El resultado del array es: ";
    let num = "";

    let media = 0;
    media = parseInt(media);

    for (let i=0; i < numArray; i++) {
        arrayR[i] = Math.floor(Math.random() * 10) * numArray;
        num = arrayR[i];
        frase += num + " ";
        media += arrayR[i];
    }
    alert(frase);
    console.log(frase);

    frase = "La media de todos los numeros es " + media/numArray + " y la superan: ";
    for (let i=0; i < numArray; i++) {
        num = arrayR[i];
        if (num > media) {
            frase += num + " ";
        }
    }
    alert(frase);
    console.log(frase);
}

function arrayBidimensional() {
    let N = 0;
    while (isNaN(N) || N < 2 || N > 5) {
        N = prompt("Introduce la dimension del arrayBidimensional(2 - 5): ");
        if (isNaN(N) || N < 2 || N > 5) {
            alert("Datos son incorrectos");
        }
    }

    let arrayB = [N][N];
    let media = 0;
    parseInt(media);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            arrayB[i][j] = parseInt(Math.floor(Math.random() * 99));
            media += arrayB[i][j];
        }
    }
    
    for (let i = 0; i < N; i++) {
        // recorremos las columnas en la dila actual i que tenemos del for anterior
        for (let j = 0; j < N; j++) {
            cosole.log(arrayB[i][j] + " ");
        }
        cosole.log("<br>");
    }

    alert(media/N);
}