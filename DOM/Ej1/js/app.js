function alturaAnchura() {
    let altura = -1;
    let anchura = -1;
    while (isNaN(altura) || altura < 0) {
        altura = prompt("Dime la altura: ");
        if (isNaN(altura) || altura < 0) {
            alert("Datos son incorrectos");
        }
    }
    while (isNaN(anchura) || anchura < 0) {
        anchura = prompt("Dime la anchura: ");
        if (isNaN(anchura) || anchura < 0) {
            alert("Datos son incorrectos");
        }
    }
    let dedo = document.querySelector(".pakita");
    dedo.setAttribute("height", altura);
    dedo.setAttribute("width", anchura);
    let dedo2 = document.querySelector(".chichio");
    dedo2.setAttribute("height", altura);
    dedo2.setAttribute("width", anchura);
}

function tipoBorde() {
    let borde = -1
    while (isNaN(borde) || borde < 0) {
        borde = prompt("Dime el tipo de borde: ");
        if (isNaN(borde) || borde < 0) {
            alert("Datos son incorrectos");
        }
    }
    let dedo = document.querySelector(".pakita");
    dedo.setAttribute("border", borde);
    let dedo2 = document.querySelector(".chichio");
    dedo2.setAttribute("border", borde);
}

function alineacion() {

}

function cambioCalse() {

}

