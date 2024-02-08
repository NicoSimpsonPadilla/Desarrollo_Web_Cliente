window.onload = () => {
    const origen = 'https://dog.ceo/api/breeds/image/random';
    let salida = document.querySelector("section");
    let boton = document.querySelector("button");

    xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function (respuesta) {
        console.log("TODO OK");
        let resultado = JSON.parse(respuesta.target.response);
        salida.innerHTML = `<img src='${resultado.message}'></img>`;
    });

    xhr.addEventListener("error", function (respuesta) {
        console.log("ERROR");
        console.log(respuesta);
    });
    
    boton.addEventListener("click", function() {
        xhr.open("GET", origen);
        xhr.send();
    });

    
}