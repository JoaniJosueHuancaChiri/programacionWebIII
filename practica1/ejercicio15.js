// callback
function obtenerDatos(callback) {
    setTimeout(() => {
        callback(null, "Datos recibidos correctamente"); // null = sin error
    }, 2000);
}

// de callback a promesa
function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        obtenerDatos((error, resultado) => {
            if (error) {
                reject(error);      // Si hay error
            } else {
                resolve(resultado); // Éxito
            }
        });
    });
}

// Uso fácil
obtenerDatosPromesa()
    .then(datos => console.log("Exito:", datos))
    .catch(err => console.log("Error:", err));