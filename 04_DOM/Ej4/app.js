function avanzar() {
    let imagen = document.querySelector("img");
    switch (imagen.getAttribute("src")){
        case "Galeria/foto1.jpg": imagen.setAttribute("src", "Galeria/foto2.jpg"); break;
        case "Galeria/foto2.jpg": imagen.setAttribute("src", "Galeria/foto3.jpg"); break;
        case "Galeria/foto3.jpg": imagen.setAttribute("src", "Galeria/foto4.jpg"); break;
        case "Galeria/foto4.jpg": imagen.setAttribute("src", "Galeria/foto5.webp"); break;
    }
}

function retroceder() {
    let imagen = document.querySelector("img");
    switch (imagen.getAttribute("src")){
        case "Galeria/foto2.jpg": imagen.setAttribute("src", "Galeria/foto1.jpg"); break;
        case "Galeria/foto3.jpg": imagen.setAttribute("src", "Galeria/foto2.jpg"); break;
        case "Galeria/foto4.jpg": imagen.setAttribute("src", "Galeria/foto3.jpg"); break;
        case "Galeria/foto5.webp": imagen.setAttribute("src", "Galeria/foto4.jpg"); break;
    }
}
