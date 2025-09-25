/**
        Se solicite un numero a usuario para adivinar un numero secreto que sera generado a
        aleatoriamente entre el rango de 1 y 10

 */
const numeroSecreto = Math.floor(Math.random()*11-1)
const numeroJugador = parseInt(prompt("Adivina el numero entre el 1 al 10"))

console.log(`El numero secreto que ingresaste fue :${numeroJugador}`)
if (numeroJugador === numeroSecreto) {
    console.log("Felicidades Ganaste, adivinaste mi bro")
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero secreto es mayor al que pusiste mano")
}else{
    console.log("El numero secreto es menor al que pusiste bro")
}

console.log(`El numero secreto es ${numeroSecreto}`)