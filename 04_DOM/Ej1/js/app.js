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
    let tabla = document.querySelector("table");
    tabla.setAttribute("height", altura);
    tabla.setAttribute("width", anchura);
}

function tipoBorde() {
    let borde = -1
    while (isNaN(borde) || borde < 0) {
        borde = prompt("Dime el tipo de borde: ");
        if (isNaN(borde) || borde < 0) {
            alert("Datos son incorrectos");
        }
    }
    let tabla = document.querySelector("table");
    tabla.setAttribute("border", borde);
}


function alineacion() {
    let tabla = document.querySelectorAll("table")[0]; 
    // coge un array con todas las tablas y le decimos que solo coja la 1º es decir la 0

    let valor = tabla.getAttribute("align");

    switch (valor){
        case "center": tabla.setAttribute("align", "right"); break;
        case "right": tabla.setAttribute("align", "left"); break;
        default: tabla.setAttribute("align", "center"); break;
        // ponemos la ultima en default por si no esta definido
    }
}

let valorClase = 0;
function cambioClase() {
    let tabla = document.querySelector("table");
    valorClase++;
    if (valorClase%2 == 0) {
        tabla.setAttribute("class", "pakita");
    } else {
        tabla.setAttribute("class", "chichio");
    }
}

function fixcell() {
    document.getElementsByTagName("td")[2].setAttribute("colspan", 2);
}

function test() {
    let tabla = document.querySelector("table");
    let parra = document.querySelectorAll("p");

    // console.log(tabla.innerHTML);
    console.log(parra[0].innerHTML);
    console.log(parra[1].innerHTML);

    parra[0].innerHTML = "a tomar por ..."
    // console.log(tabla.innerText);

}
