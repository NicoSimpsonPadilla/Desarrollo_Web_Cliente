const alsa = [
    {
        nombre: "Pablo",
        precio: 450,
        localidad: "Nerja"
    },
    {
        nombre: "Aaron",
        precio: 350,
        localidad: "San Pedro"
    },
    {
        nombre: "Nico",
        precio: 750,
        localidad: "Alhaurino"
    },
    {
        nombre: "Fernando",
        precio: 150,
        localidad: "El Motel de al lado"
    },
    {
        nombre: "DaniR",
        precio: 7850,
        localidad: "Torremolinos"
    }
]

function getAlsa() {
    return new Promise(function(resolve, reject) {
        if (alsa.length == 0) reject("No hay datos en el array");
        setTimeout(() => {
            resolve(alsa);
        }, 3000);
    });
}

// Mejor manera:

getAlsa()
.then((respuestaResolve) => {
    console.log(respuestaResolve);
})
.catch((respuestaReject) => {
    console.log(respuestaReject);
});

// Otra manera de hacerlo:

// async function mostrarAlsa() {
//     const lista = await getAlsa();
//     console.log(lista);
// }

console.log("Soy el segundo");
console.log("Soy el tercero");