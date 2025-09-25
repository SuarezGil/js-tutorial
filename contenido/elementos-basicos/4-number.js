/**
 * 
 * 
 *              TIPO DE DATO NUMBER
 * 
 */



// 1.Entero o decimal
const enter = 22
const dercimal = 22

//2. notacion cientifica
const cientifica = 5e4
 
//3. Infinito y NaN (No es un Numero)
const infinito = Infinity
const noEsNumero = NaN

// OPERACIONES ARITMETICAS
//1. suma resta multiplicaion y division
const suma = 5+6
const resta = 10-10
const multiplicaion = 2*5
const division = 16/4

//2. modulo y exponenciacion
const modulo =16%8 //esto va dar solo el residuo el cual en este caso es 0
const exponenciacion = 2**4

//LA PRESICION EN JAVASCRIPT
const resultado = 0.1 + 0.2 //0.3
//console.log(resultado.toFixed(1))
//console.log(resultado.toFixed(1)==0.3)//TRUE


//OPERACIONES AVANZADAS 
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.floor(Math.random()*20+5)
console.log(raizCuadrada)



//LENGUAJES DE PROGRAMACION

//COMPILADOS: java (JVM -> .java -> .class) OTROS SON : C, C++
//INTERPRETADOS: javasrcript --> lee>ejecuta
const numero = 2
const boolean = true
//Conversion Implicita
console.log(numero+boolean)