window.onload = () => {
    const origen = 'http://rickandmortyapi.com/api/character/';
    let salida = document.querySelector("section");

    // 1 - Creo el objeto
    xhr = new XMLHttpRequest();

    // Paso 2 - Hago la peticion
    xhr.open("GET", origen);

    // Paso 3 - Defino los manejadores de eventos
    xhr.addEventListener("load", function (respuesta) {
        console.log("TODO OK");
        let resultado = JSON.parse(respuesta.target.response);
        pintarResultado(resultado.results);

        // Con el books en locacl ----------------------------------------------------------------------------------------
        // for (const libro of resultado.library) {
        //     salida.innerHTML += `<div>${libro.book.title} >><< ${libro.book.pages} páginas</div>`;
        // }
        // salida.innerHTML = `<div>${resultado.library[0].book.title}</div>`;
    });

    xhr.addEventListener("error", function (respuesta) {
        console.log("ERROR");
        console.log(respuesta);
    });

    // Paso 5 - Lo mando
    xhr.send();

    // Esto no es asincrono
    console.log("Soy la ultima en aparecer.....");

    function pintarResultado(listaPersonajes) {
        for (const personaje of listaPersonajes) {
            let imagen = document.createElement("img");
            imagen.setAttribute("src", personaje.image);

            // creo texto
            let h1 = document.createElement("h1");
            h1.appendChild(document.createTextNode(personaje.name));
            bloque = document.createElement("div");

            // enlazo todo
            bloque.appendChild(h1);
            bloque.appendChild(imagen);
            salida.appendChild(bloque);
        }
    }
}