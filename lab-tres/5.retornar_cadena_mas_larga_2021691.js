/* Estudiante: Iosef Suárez
    Ejercicio 5: Encontrar la cadena de texto más larga en un arreglo
*/

function encontrarCadenaMasLarga(arregloDeCadenas) {
    let cadenaMasLarga = ""; 
    
    if (arregloDeCadenas.length === 0) {
        return "El arreglo está vacío.";
    }

    for (let i = 0; i < arregloDeCadenas.length; i++) {
        let cadenaActual = arregloDeCadenas[i];
        if (cadenaActual.length > cadenaMasLarga.length) {
            cadenaMasLarga = cadenaActual;
        }
    }
    
    // 5. Cuando termina el bucle, devolvemos el resultado.
    return cadenaMasLarga;
}


// La función principal que se llama desde el botón
function ejecutarCadenaMasLarga() {
    // Definimos un arreglo de prueba para que la función tenga datos con qué trabajar.
    const miArreglo = ["manzana", "platano", "sandia", "kiwi", "uva"];

    // 1. Llamamos a la función de lógica.
    const resultadoCadena = encontrarCadenaMasLarga(miArreglo);

    // 2. Preparamos el mensaje para el usuario.
    const arregloMostrado = "[" + miArreglo.join(", ") + "]"; // Muestra el arreglo bonito
    
    let resultadoTexto = "";
    if (resultadoCadena === "El arreglo está vacío.") {
         resultadoTexto = resultadoCadena;
    } else {
        resultadoTexto = `En el arreglo ${arregloMostrado}, la cadena más larga es: <strong>"${resultadoCadena}"</strong>`;
    }

    // 3. Mostramos el resultado en el HTML.
    document.getElementById("resultado").innerHTML = resultadoTexto;
    
    console.log("Resultado de la cadena más larga:", resultadoCadena);
}