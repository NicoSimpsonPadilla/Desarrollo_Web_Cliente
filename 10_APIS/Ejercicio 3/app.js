document.getElementById("boton").addEventListener("click", () => {

    let url = "https://fakestoreapi.com/products";
    let salidas = document.querySelectorAll("section");
    let imagen = document.createElement("img");

    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        for (let i = 0; i < datos.length; i++) {
            let par = document.createElement("p");
            par.innerHTML = datos[i].title;
            par.addEventListener("mouseenter", () => {
                imagen.src = datos[i].image;
                salidas[1].appendChild(imagen);
            });
            salidas[0].appendChild(par);
        }
    });
});