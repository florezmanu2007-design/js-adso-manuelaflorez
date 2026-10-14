// Año bisisesto

let año = Number (prompt ("Ingresa un año"))

if (Number.isNaN(año)) {
console.log("Debes ingresar solo números")
} else{
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        console.log("el año ingresado es bisiesto")
    }
    else {
        console. log("El año ingresado no es bisiesto")
    }
}


// calculadora
const numero1 = Number(prompt("escribe un numero: "))
const numero2 = Number(prompt("escribe un numero: "))
const operacion = prompt("elige el tipo de operacion: +, -, /, * ")

switch (operacion) {
    case "+":
        let suma = numero1 + numero2
        console.log(`resultado: ${numero1} + ${numero2} = ${suma}`)
        break
    case "-":
        let resta = numero1 - numero2
        console.log(`resultado: ${numero1} - ${numero2} = ${resta}`)
        break
    case "*":
        let multiplicar = numero1 * numero2
        console.log(`resultado: ${numero1} * ${numero2} = ${multiplicar}`)
        break
    case "/":
        if (numero2===0){
            console.log("error: no se puede dividir entre cero.")
        } else{
            let dividir = numero1 / numero2
            console.log(`resultado: ${numero1} / ${numero2} = ${dividir}`)
        }
        break
    default:
        console.log("esa opcion no existe")
}




// IMC

let peso = Number(prompt("Ingresa tu peso (Kg)"))
let estatura = Number(prompt("Ingresa tu estatura (m)"))

let resultado = peso / estatura ** 2

if (resultado < 18.5){
    console.log(`Tu condición es: Bajo peso`)
}
else if (resultado <= 24.9 ){
    console.log(`Tu condición es: Normal`)
}
else if (resultado <=29.9){
    console.log(`Tu condición es: Sobrepeso`)
}
else{
    console.log(`Tu condición es: Obesidad`)
}