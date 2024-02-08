window.onload = function () {

    let padre = document.querySelector("section");
    let h1 = document.querySelector("h1");

    h1.textContent = "Hay " + library.length + " libros en la biblioteca";

    for (const libro of library) {
        let zona = document.createElement("article");
        zona.setAttribute("class", "presentacion");

        let h3 = document.createElement("h3");
        h3.textContent = libro.title;
        zona.appendChild(h3);

        let imagen = document.createElement("img");
        imagen.setAttribute("src", libro.cover);
        zona.appendChild(imagen);

        padre.appendChild(zona);

        zona.addEventListener("click",function () {
            let cadena = JSON.stringify(libro);

            sessionStorage.getItem("aBuscar");

            location.replace("mostrar.html");
        });
    }

}