/* Estudiante: Iosef Suárez
    Ejercicio 3: Imprimir números del 1 al 100
*/
function imprimirDelUnoAlCien() {
    // 1. Limpiamos el área de resultado en el HTML
    document.getElementById("resultado").innerHTML = "¡Mira la consola para ver el resultado de la cuenta!";

    // 2. Usamos el bucle FOR, que es la forma más común de empezar
    // Inicializamos una variable 'i' en 1
    // La condición es que 'i' sea menor o igual a 100
    // Aumentamos 'i' de uno en uno con 'i++'
    for (let i = 1; i <= 100; i++) {
        // 3. Imprimimos el número directamente en la consola.
        // Usamos console.log() porque es la forma más básica de mostrar resultados.
        console.log("El número actual es: " + i);
    }
    
    console.log("¡La cuenta ha terminado!");
}