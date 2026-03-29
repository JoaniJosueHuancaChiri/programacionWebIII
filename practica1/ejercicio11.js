// Ejemplo de encadenamiento de promesas

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Id ${id}...`);
            resolve({ id: id, nombre: "Juan Perez" });
        }, 1000);
    });
}

function obtenerPedidos(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Usuario ${usuario.nombre}...`);
            resolve(["Pedido 101", "Pedido 102", "Pedido 103"]);
        }, 1500);
    });
}

function obtenerDetallesPedido(pedidos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Detalles del pedido: ${pedidos[0]} - Producto: Laptop - Total: $1200`);
        }, 1000);
    });
}

// Encadenamiento de promesas
obtenerUsuario(5)
    .then(usuario => obtenerPedidos(usuario))
    .then(pedidos => obtenerDetallesPedido(pedidos))
    .then(detalles => {
        console.log("Encadenamiento:", detalles);
    })
    .catch(error => {
        console.error("error:", error);
    });
