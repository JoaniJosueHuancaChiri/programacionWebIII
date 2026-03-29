const obj = miFuncion("oruro");
function miFuncion(texto) {
    const str = texto.toLowerCase().replace(/\s+/g, '');
    
    let izquierda = 0;
    let derecha = str.length - 1;

    while (izquierda < derecha) {
        if (str[izquierda] !== str[derecha]) {
            return false;
        }
        izquierda++;
        derecha--;
    }
    return true;
}
console.log(obj)