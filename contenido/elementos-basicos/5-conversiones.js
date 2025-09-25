/**
 * 
 * 
 *          CONVERSIONES -> EXPLICITAS e IMPLICITAS
 * 
 * 
 */

//Conversion Explicit Type Casting
const string = '54'
const integer = parseInt(string)

console.log (typeof string)
console.log(typeof integer)



const float = parseFloat("3.14")
console.log(typeof float)

const binario = '1010'
const decimal = parseInt(binario,2)
console.log(decimal)

const hexa = 'CAFE'
const decimalhex = parseInt(hexa,16)
console.log(decimalhex)


//CONVERSION IMPLICIT TYPE CASTING

const resultado = '5'+3
console.log(typeof resultado)
const sumaConBoolean='3'+true
console.log(sumaConBoolean)

const sumaConNumero = 2+true
console.log(sumaConNumero)

const valorString = '20'
const valorNumber = 10
const  valorBoolean = true

console.log(valorString+valorString)
console.log(valorString+valorNumber)
console.log(valorString+valorBoolean)

console.log(valorNumber+valorNumber)
console.log(valorNumber+valorString)
console.log(valorNumber+valorBoolean)

console.log(valorBoolean+valorBoolean)
console.log(valorBoolean+valorString)
console.log(valorBoolean+valorNumber)