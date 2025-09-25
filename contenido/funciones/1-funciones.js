/**
 * 
 * 
 *      FUNCIONES -> js -> tipos de dato
 * 
 * 
 */

// Como dueños de una empresa necesitamos calcular el descuento de productos en oferta
function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento)/100;
    const precioConDescuento = precio - descuento;
    return precioConDescuento;
}

const precioOriginal = 1000;
const porcentajeDescuento =15;
const precioFinal = calcularDescuento(precioOriginal, porcentajeDescuento);

console.log("precio original Q."+ precioOriginal);
console.log("Descuento "+ porcentajeDescuento + "%");
console.log("Precio con descuento: Q." +precioFinal);