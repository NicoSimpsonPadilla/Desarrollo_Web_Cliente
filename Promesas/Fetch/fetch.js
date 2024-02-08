document.getElementById("boton").addEventListener("click", (e) => {
    let salida = document.getElementById("salida");

    const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/info?locale=esES";

    const opciones = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "729413b8e3msh377a94be04c10a1p1cc325jsnaa9376328948",
            "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
    };

    fetch(url, opciones)
    .then((respuesta) => {
        return respuesta.text();
    })
    .then((datos) => {
        salida.innerHTML = datos;
    })
    .catch((respError) => {
        alert("Problema con el fetch: " + respError);
    });
});