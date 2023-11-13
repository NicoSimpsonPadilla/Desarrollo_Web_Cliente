
window.onload = function() {

    let botones = document.querySelectorAll("input[type='button']");
    let galeria = document.querySelector("div");
    let imgs = [];
    let cont = 0;

    botones[0].onclick = function() {

        botones[1].removeAttribute("disabled");

        let ruta = prompt("Dime la ruta que quieres añadir: ");

        imgs[cont] = document.createElement("img");
        if (ruta == "" ) {    
            imgs[cont].src = "img/terra.jpg";
        } else {
            imgs[cont].src = "img/" + ruta;
        }
        img[cont].setAttribute("class", "foto");
        galeria.appendChild(imgs[cont]);

        cont++;
    }

    botones[1].onclick = function() {
        // Manera jaime
        // while (galeria.firstChild) { Mientras la galeria tenga un primer hijo
        //     galeria.removeChild(galeria.firstChild);
        // }
        for (let i = 0; i < cont; i++) {
            galeria.removeChild(imgs[i]);
        }
        botones[1].setAttribute("disabled", true);
        cont = 0;
    }
}