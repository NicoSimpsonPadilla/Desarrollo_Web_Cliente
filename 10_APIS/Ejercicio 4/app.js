window.onload = () => {
    let url = "https://jsonplaceholder.typicode.com/todos#";
    let salida = document.getElementById("tareas");
    let completado = document.createElement("p");

    

    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
        for (let i = 0; i < datos.length; i++) {
            let par = document.createElement("li");
            par.innerHTML = datos[i].title;

            let boton = document.createElement("button");
            boton.innerHTML = "pulsame " + i;

            boton.addEventListener("click", () => {
                if (!datos[i].completed) datos[i].completed = true;
                else datos[i].completed = false;
                completado.innerHTML = "Estado " + datos[i].completed;
                par.appendChild(completado);
            });

            salida.appendChild(par);
            salida.appendChild(boton);
        }
    });
}