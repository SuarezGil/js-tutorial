/* Estudiante: Iosef Suárez
    Ejercicio 4: Suma de números del 1 al 50
*/

// La función principal que se llama desde el botón
function ejecutarSumaDelUnoAlCincuenta() {
    // 1. Llamamos a la función de lógica para obtener la suma.
    const sumaTotal = calcularSumaDelUnoAlCincuenta();

    // 2. Creamos el mensaje para el usuario.
    const resultadoTexto = `La suma de todos los números del 1 al 50 es: <strong>${sumaTotal}</strong>`;
    
    // 3. Mostramos el resultado en el elemento 'resultado' del HTML.
    document.getElementById("resultado").innerHTML = resultadoTexto;
    
    // Opcional: Imprimimos en consola también, por si quieres ver los pasos.
    console.log("Suma total (1 a 50):", sumaTotal);
}


// La función de lógica que hace la suma
function calcularSumaDelUnoAlCincuenta() {
    // Variable para ir guardando la suma (se inicializa en cero)
    let suma = 0; 
    
    // El bucle FOR va desde el número 1 hasta el 50
    for (let i = 1; i <= 50; i++) {
        // En cada vuelta, sumamos el valor actual de 'i' a nuestra variable 'suma'.
        // Es como decir: suma = suma + i;
        suma += i; 
        
        // Opcional: Para ver cómo se va acumulando la suma (mira la consola al principio)
        // console.log("Sumando:", i, " | Suma actual:", suma); 
    }
    
    // Devolvemos el resultado final.
    return suma;
}