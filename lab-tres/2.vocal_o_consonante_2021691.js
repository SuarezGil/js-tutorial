/* Iosef Suarez Gil
*/
function ejecutarVocalOConsonante() {
    
    const entradaUsuario = prompt("¡Hola! Ingresa una letra para ver si es vocal o consonante.");
    
    if (entradaUsuario === null || entradaUsuario === "") {
        document.getElementById("resultado").innerHTML = "Operación cancelada.";
        return; // Detiene la función.
    }
    const caracter = entradaUsuario.charAt(0);
    
    const resultadoTexto = esVocalOConsonante(caracter);
    
    document.getElementById("resultado").innerHTML = resultadoTexto;
}
function esVocalOConsonante(caracter) {
 
    caracter = caracter.toLowerCase();

    
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        // Devolvemos el texto que queremos que se muestre en la web
        return `El carácter '<strong>${caracter}</strong>' es una VOCAL`;
    } 
    // Si no es vocal, y asumimos que es una letra, entonces es consonante
    else {
        // Devolvemos el texto que queremos que se muestre en la web
        return `El carácter '<strong>${caracter}</strong>' es una CONSONANTE`;
    }
}