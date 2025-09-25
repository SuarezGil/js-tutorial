/**
 
            ESTRUCTURA SWITCH
  
 */

            let comprar = "Uvas"

switch (comprar) {
    case "Naranjas":
        console.log("las naranjas estan a Q10 la mano")
        break;
    case "Manzanas":
        console.log("las manzanas estan a Q15 la mano")
        break;
    case "Platanos":
        console.log("las naranjas estan a Q10 la mano")
        break;
    case "Mangos":
    case "Papayas":
        console.log("los mangos y papayas a 20")
        break;

    default:
        
        console.log(`Lo sentimos no contamos con ${comprar}`)
        break;
}