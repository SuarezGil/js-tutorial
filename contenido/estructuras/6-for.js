/**
 * 
 *      CICLO FOR -> PARA
 */


let lista =_["comer", "dormir", "code", "repetir"]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
    
}

/*FOR-OF -------------> FOR EACH
    let canasta = ["manzana", "naranjas", "mangos", "uvas"]
    for (fruta of canasta) {
        console.log(fruta)
    }*/
// FOR-IN -> itera sobre las propiedades de un objeto
const canastaDeFrutas = {
    nombre :"manzana",
    precio : 5.0,
    tipo : "verde",
    marca: "chanita"
}
for ( fruta in canastaDeFrutas) {
    console.log(fruta);
}

for (fruta in canastaDeFrutas) {
    console.log(`${fruta} : ${canastaDeFrutas}`)
}


for (fruta of canastaDeFrutas) {
    
}