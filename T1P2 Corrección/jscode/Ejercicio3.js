
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
        for (let i = 0; i < filas; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < columnas; i++) {
                let td = document.createElement("td");
                let texto = document.createTextNode(i+1);
                td.append(texto); // añado texto al td
                tr.appendChild(td); // añado este td al tr por el que voy
            }
            tabla.appendChild(tr);
        }
        
        tabla.setAttribute("class", "tabla");

        conjuntoTablas.appendChild(tabla);
    }
}