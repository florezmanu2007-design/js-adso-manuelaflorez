// ! AÑO BISIESTO

function bisiesto (numero){
    return numero % 4 === 0;
}

let n = Number(prompt("Ingrese el año que desea consultar"))
if (bisiesto(n)){
    console.log(`El año ${n} es bisiesto`);
} else {
    console.log(`El año ${n} no es bisiesto`)
}




// ! MAYOR DE TRES  

function mayordetres (a, b, c){
    let mayor = a

    if (b > mayor){
        mayor = b
    }
    if (c > mayor){
        mayor = c
    }
    return mayor
}

let a = Number(prompt("Ingrese el primer numero..."))
let b = Number(prompt("Ingrese el segundo numero..."))
let c = Number(prompt("Ingrese el tercer numero..."))

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    console.log("⚠️ Escribe solo números.")
} else {
    console.log(`El numero mayor de los tres es: ${mayordetres(a, b, c)}`)
}


// ! PRECIO FINAL

let preciofinal = (precio, descuento = 0) => {
    return precio - (precio * descuento / 100)
}
const precio = Number(prompt("Ingrese el precio del producto..."))
const descuento = Number(prompt("Ingrese el valor del descuento"))

if (
    Number.isNaN(precio) || Number.isNaN(descuento) ||
    precio < 0 || descuento < 0 || descuento > 100
) {
    console.log("⚠️ Escribe un precio válido y un descuento entre 0 y 100.")
} else {
    console.log(`🏷️ Precio final: $${precioFinal(precio, descuento)}`)
}