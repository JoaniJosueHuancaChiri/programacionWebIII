console.log("Callback");

function obtenerDatosCallback(callback) {
    setTimeout(() => {
        callback("esto es callback");
    }, 2000);
}

// Uso del callback
obtenerDatosCallback((resultado) => {
    console.log(resultado);
});

console.log("Promesa");

function obtenerDatosPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("esto es promesa");
        }, 3000);
    });
}

// Uso de la promesa
obtenerDatosPromesa()
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => console.log("Error:", error));