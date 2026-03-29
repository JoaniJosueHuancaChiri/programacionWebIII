function obtenerUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, nombre: "Maria" }), 1000);
    });
}

function obtenerPedidos(usuario) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Pedido 1", "Pedido 2"]), 800);
    });
}

// Con promesas
obtenerUsuario(5)
    .then(usuario => obtenerPedidos(usuario))
    .then(pedidos => console.log("Pedidos:", pedidos))
    .catch(err => console.log("Error:", err));

// Migrado a async/await
async function procesar() {
    try {
        const usuario = await obtenerUsuario(5);
        const pedidos = await obtenerPedidos(usuario);
        
        console.log("Pedidos:", pedidos);
        
    } catch (err) {
        console.log("Error:", err);
    }
}

// Ejecutar
procesar();