function ejecutarParImpar() {
    // Abre la ventana emergente para que el usuario ingrese el número
    const entradaUsuario = prompt("Ingresa el número que deseas verificar como Par o Impar:");
    
    const resultadoElemento = document.getElementById("resultado");

    // 1. Manejar si el usuario cancela o no ingresa nada
    if (entradaUsuario === null || entradaUsuario.trim() === "") {
        resultadoElemento.innerHTML = "Operación cancelada o sin entrada.";
        return;
    }
    
    // 2. Convertir la entrada a un número
    const numero = parseInt(entradaUsuario.trim());
    
    let resultadoTexto;
    
    // 3. Validar si es un número válido
    if (isNaN(numero)) {
        resultadoTexto = "⚠️ Error: Por favor, ingresa un valor numérico válido.";
    } 
    // 4. Lógica Par o Impar
    else if (numero % 2 === 0) {
        resultadoTexto = `El número ${numero} es PAR`;
    } else {
        resultadoTexto = `El número ${numero} es IMPAR`;
    }
    
    // 5. Mostrar el resultado en el HTML
    resultadoElemento.innerHTML = resultadoTexto;
}