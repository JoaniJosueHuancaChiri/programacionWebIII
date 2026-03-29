// FUNCIONES CON PROMESAS

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`ID: ${id}...`);
            const usuario = { 
                id: id, 
                nombre: "Carlos Ruiz", 
                email: "carlos.ruiz@email.com" 
            };
            console.log(`Usuario encontrado: ${usuario.nombre}`);
            resolve(usuario);
        }, 1000);
    });
}

function obtenerPedidos(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pedidos = ["Pedido A - Laptop", "Pedido B - Celular", "Pedido C - Audifonos"];
            console.log(`Se encontraron ${pedidos.length} pedidos`);
            resolve(pedidos);
        }, 1200);
    });
}

function obtenerDetallesPedido(pedido) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Detalles pedido: "${pedido}"...`);
            const detalle = `Detalles completos del pedido "${pedido}" → Total: $1,250 - Estado: Enviado`;
            resolve(detalle);
        }, 800);
    });
}

// CÓDIGO PRINCIPAL CON ASYNC/AWAIT

async function procesarPedido() {
    try {

        // Paso 1
        const usuario = await obtenerUsuario(25);

        // Paso 2
        const pedidos = await obtenerPedidos(usuario);

        // Paso 3
        const detalleFinal = await obtenerDetallesPedido(pedidos[0]);

        // Resultado final
        console.log("EXITO");
        console.log(detalleFinal);

    } catch (error) {
        console.error("ERROR:", error);
    }
}

// Ejecutamos la función
procesarPedido();