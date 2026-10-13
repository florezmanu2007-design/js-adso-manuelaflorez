// ! SEGUNDOS A RELOJ

let segundo = Number(prompt("coloca la cantidad de segundos: "))

let hora = 0
let minutos= 0  
let segundos = 0

if (Number.isNaN(segundo)) {
    console.log(`ingresa solo numeros`)
} else {
    hora = Math.floor(segundo/3600);
    minutos = Math.floor((segundo % 3600) / 60);
    segundos = segundo % 60

    console.log(`${hora} h ${minutos} min ${segundos} s`)
}


// ! TEMPERATURA
/*  convierte grados Celsius a Fahrenheit  */

const temperatura = Number(prompt("ingresa una temperatura: "))
    const Celsius = Number(temperatura)

if (Number.isNaN(temperatura) || temperatura === null || temperatura === " "  || Number.isNaN(Celsius)) {
    console.log("debe ser con numeros, puede ser negativo o decimal")
} else {
    const Fahrenheit = Celsius * 9 / 5 + 32;
    const Fahrenheitnuevo = Number(Fahrenheit.toFixed(2));
    console.log(`${Celsius} °C = ${Fahrenheitnuevo} °F`)
}



// ! PROMEDIO DE NOTAS

const nota1 = Number(prompt("Escribe aca la nota 1"))
const nota2 = Number(prompt("Escribe aca la nota 2"))
const nota3 = Number(prompt("Escribe aca la nota 3"))

if (Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)
||NaN
|| nota1 < 1 || nota1 > 5 
|| nota2 < 1 || nota2 > 5
|| nota3 < 1 || nota3 > 5){
    console.log("coloca las notas de 1 a 5")
} else {
    const promedio = (nota1 + nota2 + nota3) / 3
    console.log(`Promedio: ${promedio.toFixed(1)}`)
}