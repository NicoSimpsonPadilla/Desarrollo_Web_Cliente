
window.onload = function() {

    let boton = document.querySelector("input[type='button']");
    let conjuntoTablas = document.querySelector("div[class='solucion']");

    boton.onclick = function() {

        let filas,columnas;

        while (filas < 0 || isNaN(filas) || filas > 10){
            filas = prompt("Introduce el numero de filas: ");
            filas = parseInt(filas);
            if (filas < 0 || isNaN(filas)){
                alert("Datos no son validos");
            }
        }
        while (columnas < 1 || isNaN(columnas) || columnas > 10){
            columnas = prompt("Introduce el numero de columnas 2: ");
            columnas = parseInt(columnas);
            if (columnas < 0 || isNaN(columnas)){
                alert("Datos no son validos");
            }
        }

        let tabla = document.createElement("table");
        tabla.setAttribute("class", "tabla");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        // no pude hacer los tr y td, pero almenos la tabla se crea :)
        // for(i = 0; i < filas; i++) {
        //     tr = document.createElement("tr");
        //     for(j = 0; i < columnas; j++) {
        //         td = document.createElement("td");
        //     }
        // }
        conjuntoTablas.appendChild(tabla);
    }
}