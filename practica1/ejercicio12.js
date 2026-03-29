// Funciones que devuelven Promesas
function obtenerUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Id: ${id}`);
            resolve({ id: id, nombre: "Ana Lopez" });
        }, 1000);
    });
}

function obtenerPedidos(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Datos Usuario: ${usuario.nombre} (ID: ${usuario.id})`);
            resolve(["Pedido 201", "Pedido 202"]);
        }, 1200);
    });
}

function obtenerDetalles(pedido) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Detalles pedido ${pedido} - Total: $850`);
        }, 800);
    });
}

// Código limpio con async/await
async function procesarPedido() {
    try {
        const usuario = await obtenerUsuario(10);
        const pedidos = await obtenerPedidos(usuario);
        const detalles = await obtenerDetalles(pedidos[0]);

        console.log("Respuesta:", detalles);

    } catch (error) {
        console.error("Error:", error);
    }
}

// Ejecutar
procesarPedido();