// Variable global para almacenar el estado del juego y permitir la interacción con los botones.
let ahorcadoData = null; 

function ejecutarAhorcado() {
    // 1. Inicialización de variables
    const palabras = [
        "gato", "perro", "elefante", "computadora", "javascript",
        "teclado", "pantalla", "libro", "escuela", "profesor",
        "estudiante", "universidad", "juego", "raton", "telefono",
        "internet", "casa", "auto", "avion", "flor"
    ];

    let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    let ocultaInicial = Array(palabraSeleccionada.length).fill("_");
    
    // 8. Al iniciar, se guarda el estado en una variable global y se muestra el estado inicial
    // Reestablecemos ahorcadoData si se llama a ejecutarAhorcado (reinicio de juego)
    ahorcadoData = { 
        palabra: palabraSeleccionada, 
        oculta: ocultaInicial, 
        intentos: 0, 
        usadas: [], 
        maxIntentos: 7, 
        // 2. Definición de los dibujos del ahorcado (siguiendo la secuencia exacta del usuario)
        dibujos: [
            " <pre> \n \n \n \n \n \n ___ </pre>", // 0: Base
            " <pre> \n ___ \n  |/  O \n  | \n  | \n  | \n  | \n ___ </pre>", // 1: Cabeza
            " <pre> \n ___ \n  |/  O \n  |   | \n  | \n  | \n  | \n ___ </pre>", // 2: Torso
            " <pre> \n ___ \n  |/  O \n  |   | \n  |  / \n  | \n  | \n ___ </pre>", // 3: Pie 1 (Pierna 1)
            " <pre> \n ___ \n  |/  O \n  |   | \n  |  / \\ \n  | \n  | \n ___ </pre>", // 4: Pie 2 (Pierna 2)
            " <pre> \n ___ \n  |/  O \n  |  /| \n  |  / \\ \n  | \n  | \n ___ </pre>", // 5: Brazo 1 (Brazo izquierdo)
            " <pre> \n ___ \n  |/  O \n  |  /|\\ \n  | \n  | \n  | \n ___ </pre>", // 6: Brazo 2 (Brazo derecho)
            " <pre> \n ___ \n  |/  O \n  |  /|\\ \n  |  / \\ \n  | \n  | \n ___ </pre>" // 7: Ahorcado (Muñeco completo al perder)
        ]
    };
    
    mostrarEstado();
}

// 3. Función para verificar si el juego terminó y obtener el estado
function revisarEstado() {
    // Usamos el estado global
    const { oculta, intentos, maxIntentos } = ahorcadoData;
    
    if (!oculta.includes("_")) {
        return { ended: true, win: true };
    } else if (intentos >= maxIntentos) {
        return { ended: true, win: false };
    }
    return { ended: false, win: false };
}

// 4. Función para generar los botones de letras (Añadimos 'palabra' como argumento)
function generarBotonesLetras(usadas, isGameOver, palabra) {
    let buttonsHtml = '<div class="letter-buttons-container">';
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const isDisabled = usadas.includes(letra) || isGameOver;
        let buttonClass = 'letter-button';

        if (usadas.includes(letra)) {
            // Si ya fue usada, asigna la clase correcta/incorrecta para el estilo
            if (palabra.includes(letra)) {
                buttonClass += ' correct-guess';
            } else {
                buttonClass += ' wrong-guess';
            }
        }

        buttonsHtml += `
            <button 
                id="btn-${letra}"
                class="${buttonClass}"
                onclick="procesarLetra('${letra}')"
                ${isDisabled ? 'disabled' : ''}
            >
                ${letra}
            </button>
        `;
    }
    buttonsHtml += '</div>';
    return buttonsHtml;
}

// 5. Función para actualizar la interfaz (Muñequito, Contador y Botones)
function mostrarEstado() {
    // Si el juego no ha sido iniciado, salimos o ejecutamos la inicialización si es necesario
    if (!ahorcadoData) return; 

    // Extraemos las variables del estado global
    const { palabra, oculta, intentos, maxIntentos, dibujos, usadas } = ahorcadoData;

    const estado = revisarEstado();
    const { ended, win } = estado;
    const intentosRestantes = maxIntentos - intentos;

    let messageHtml = '';
    if (ended) {
        if (win) {
            // Mensaje de victoria con intentos usados
            messageHtml = `<br><h2 style="color: #64ffda;">🎉 ¡FELICIDADES, HAS GANADO! 🎉</h2> 
                           <p>Adivinaste la palabra <strong>${palabra}</strong> con ${intentos} fallos.</p>`;
        } else {
            // Mensaje de derrota
            messageHtml = `<br><h2 style="color: #ff6e6e;">💀 ¡Ahorcado! 💀</h2> 
                           <p>La palabra correcta era <strong>${palabra}</strong>.</p>`;
        }
    }

    document.getElementById("resultado").innerHTML = `
        <strong>🎮 Juego del Ahorcado 🎮</strong><br><br>
        
        <div style="font-size: 1.5em; line-height: 0.8; font-family: monospace; color: #ffeb3b;">
            ${dibujos[intentos]} <!-- Usa el contador de intentos para seleccionar el dibujo -->
        </div><br>
        
        <p style="font-size: 2em; letter-spacing: 0.5em; color: #a1ff9d; margin-bottom: 20px;">${oculta.join(" ")}</p>
        
        <p>Fallos: <strong>${intentos}</strong> de ${maxIntentos}. Te quedan ${intentosRestantes} intentos.</p>
        <p>Letras usadas: <strong>${usadas.join(", ") || 'Ninguna'}</strong></p>
        <hr style="border-color: #5a5a9e;">

        ${messageHtml}
        
        ${generarBotonesLetras(usadas, ended, palabra)}
    `;
}

// 6. Función de procesamiento del turno (global para los botones)
window.procesarLetra = function(letra) {
    // Obtenemos los datos del estado actual
    const { palabra, oculta, usadas } = ahorcadoData;
    
    if (revisarEstado().ended) return;

    // 7. Validación: Evitar doble click/uso
    if (usadas.includes(letra)) {
        return;
    } else {
        usadas.push(letra);
        
        let acierto = false;
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) {
                oculta[i] = letra;
                acierto = true;
            }
        }
        
        // Lógica crucial: si NO fue un acierto, incrementa el contador de fallos
        if (!acierto) {
            ahorcadoData.intentos++; 
        }
        
        // Actualizar la interfaz después de cambiar el estado
        mostrarEstado();
    }
}
