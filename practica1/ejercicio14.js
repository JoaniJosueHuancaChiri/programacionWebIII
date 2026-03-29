// promesa
function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos");
        }, 2000);
    });
}

// de promesa a callback
function obtenerDatosCallback(callback) {
    obtenerDatos()
        .then(resultado => callback(null, resultado))   // exito
        .catch(error => callback(error, null));         // error
}

// Uso
obtenerDatosCallback((error, datos) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Exito:", datos);
    }
});