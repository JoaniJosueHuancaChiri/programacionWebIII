const obj = miFuncion([3, 1, 5, 4, 2]);
function miFuncion(arreglo) {
    if (arreglo.length === 0) {
        return { mayor: null, menor: null };
    }

    return {
        mayor: Math.max(...arreglo),
        menor: Math.min(...arreglo)
    };
}

console.log(obj);
