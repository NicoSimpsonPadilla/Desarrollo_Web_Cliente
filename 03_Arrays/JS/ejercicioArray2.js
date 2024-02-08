// Ejercicios 2
function countBy() {
    let x = prompt("Dime numero A: ");
    let y = window.prompt("Dime numero B: ");
    x = Number(x);
    y = Number(y);
    if (y < 0 || x < 0 || isNaN(y) || isNaN(x)) {
        alert("Deben de ser numeros positivos");
    } else {
        let multiplos = [];
        let cont = 0;
        for (i = 0; cont < y; i++) {
            if (x%i == 0){
                multiplos[cont]=i;
                cont++
            }
        }
        alert(multiplos);
    }
}