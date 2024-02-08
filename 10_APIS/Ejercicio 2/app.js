document.getElementById("boton").addEventListener("click", () => {

    let url = "https://jsonplaceholder.typicode.com/comments";
    let salida = document.getElementById("salida");

    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        for (let i = 0; i < datos.length; i++) {
            let par = document.createElement("p");
            par.innerHTML = datos[i].body;
            salida.appendChild(par);
        }
    })
});