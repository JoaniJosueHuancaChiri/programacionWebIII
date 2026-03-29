const  obj = miFuncion([1, 2, 3, 4, 5]);
function miFuncion(arreglo) {
    return {
        pares: arreglo.filter(num => num % 2 === 0),
        impares: arreglo.filter(num => num % 2 !== 0)
    };
}
console.log(obj);