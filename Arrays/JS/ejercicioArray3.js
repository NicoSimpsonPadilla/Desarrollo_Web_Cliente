function matriz() {
    do {
        let a = prompt("Dime numero mayor que 2: ");
        a = Number(a);
        if (a < 2 || isNaN(a)) {
            alert("Numero erroneo");
        }
    } while (a < 2 || isNaN(a));
    let num = 1;
    let matriz = [a][a];
    for (i = 0; i < a; i++) {
        for (j = 0; j < a; j++) {
            num *= a;
            matriz[i][j] = num;
        }
    }
    console.log(matriz);
}