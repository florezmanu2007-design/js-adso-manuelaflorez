// ! ARREGLOS Y METODOS   
// * ARREGLO TREN

let tren = ["Ana", "Sofia", "Ricardo", "Rosalva", "Edison"]

//  Sabe la cantidad de elementos 
console.log(tren.length)

// saber un elemento en especifico
console.log(tren[2])

// Mostrar todo
console.log(tren)

//  Ultima pocision
console.log(tren[tren.length - 1])

// Asi agrego algo a la lista
tren.push("Manuela")
console.log(tren)

// Mover todos los elementos de posicion para agregar el ultimo de primero
tren.unshift("Pedro")
console.log(tren)

// Elimina el ultimo elemento
tren.pop()
console.log(tren)

// si esta el nombre tal dentro de la lista
console.log(tren.includes("Sofia"))

// encuentra la posicion del nombre
console.log(tren.indexOf("Ricardo"))

// me muestra desde donde inicia hasta donde termina
console.log(tren.splice(1, 1))

// 
    for (let i = tren.length-1; i >= 3; i--){
    console.log(i)
    console.log(tren[i])
}


let nombre = "Estefania"

//  for ( in ) itera sobre cada posicion y muestra su número 
for (x in nombre){
    console.log(x)
}

// for ( of ) itera sobre cada posicion y muestra su valor
for (x of nombre){
    console.log(x)
}

// nos muestra los espacios entre las palabras
console.log(tren.join(" "))

// 
// let nombrearreglo = []
// for (x of nombre){
//     console.log(x)
//     nombrearreglo.unshift(x)
// }
// console.log(nombrearreglo.join(" - "))

// 
// let nombrearregl = []
// for (x of nombre){
//     console.log(x)
//     nombrearreglo.push(x)
// }
// console.log(nombrearregl.join(" - "))

// for(let i = 0; i < tren.length; i++) {
//     console.log(`${i + 1}. ${tren[i]}`)
// }

// for( const pasajero of tren ){
//     console.log(pasajero)
// }

// console.table(tren)












// ! PRECTICA DE LISTA DE COMPRAS

const compras = []
let compra;

do {
    compra =  prompt("Ingrrese un producto para para agregar\n0 deje vacio para terminar: ")
    compras.push(compra)
} while (compra != "")

compras.pop()
console.table(compras)


for (let i = 0; i < compras.length; i++){
    console.log(`${i+1}. ${compras[i]}`)
}

let quitarProd = prompt("¿Qué producto vas a elimiar?")

let posicion = -1

posicion = compras.indexOf(quitarProd)

compras.splice(posicion, 1)

if (posicion === -1) console.log("el producto no se encontro")
else{
    console.log(`Producto eliminado: ${quitarProd}`)
}
console.table(compras)