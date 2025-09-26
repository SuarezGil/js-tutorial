/* Estudiante: Iosef Suárez
    Ejercicio 6: Determinar si un número es primo.
*/

function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; 
        }
    }

    return true; 
}


function ejecutarNumeroPrimo() {
    const entradaUsuario = prompt("Ingresa un número entero para verificar si es PRIMO (ej. 13):");
    
    const resultadoElemento = document.getElementById("resultado");

    if (entradaUsuario === null || entradaUsuario.trim() === "") {
        resultadoElemento.innerHTML = "Operación cancelada.";
        return;
    }
    
    // Convertir a número.
    const numero = parseInt(entradaUsuario.trim());
    
    let resultadoTexto = "";
    
    if (isNaN(numero) || numero <= 0) {
        resultadoTexto = " Error: Por favor, ingresa un número entero positivo válido.";
    } else {
        const esPrimo = esNumeroPrimo(numero);
        
        if (esPrimo) {
            resultadoTexto = `El número <strong>${numero}</strong> SI es un número PRIMO.`;
        } else {
            resultadoTexto = `El número <strong>${numero}</strong> NO es un número PRIMO.`;
        }
    }
    resultadoElemento.innerHTML = resultadoTexto;
}