// const nombre = "Ana";
// let edad = 17;
// let estatura = 1.68;
// let esAprendiz = true;
// let apodo;

// console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo)

// console.log(7 / 2); // 3.5   (division)
// console.log(7 % 2); // 1       (entero del modulo)
// console.log(2 ** 3);  // 8     (elevado)
// console.log(10 + 3 * 2);  // 16      (por jerarquia)
// console.log((10 + 3) * 2);   // 26   (primero los parentesis)
// console.log(0.1 + 0.2);   // 0.3   (suma decimal)



// console.log("5"+ "5")    // 55         ""
// console.log("5" + 5 + 5)     // 555
// console.log(5 + 5)       // 10
// console.log(5 + 5 + "5")     // 105  (primero sumom los dos 5 a INT y luego comncateno el 5)


// console.log(typeof ("5"+ "5"))    // 55         "STRING"
// console.log(typeof ("5" + 5 + 5))     // 555      "STRING"
// console.log(typeof (5 + 5))       // 10             "NUMBER"
// console.log(typeof (5 + 5 + "5"))     // 105  (primero sumom los dos 5 a INT y luego comncateno el 5)               "STRING"



// console.log("5" + 3);
// console.log("5" - 3);
// console.log("5" * 3);
// console.log(5 == "5");
// console.log(5 === "5");

// let nombre1 = prompt("digite su nombre: ")
// let entrada = Number(prompt("digite su edad: "))

// let edad1 = 0
// let suma = 0

// if (Number.isNaN(entrada) ) {
//     console.log("eso no es un numero.")
// } else{
//     edad1 = entrada
//     suma = edad1 + 15
//     console.log("su edad incrementada es " + suma)
// }


// let nota1 = 0
// entrada = Number(prompt("digite su nota de JavaScript: "))

// if (Number.isNaN(entrada) ) {
//     console.log("eso no es un numero.")
//     console.log(`su nombre es ${nombre1}`)
// } else{
//     nota1 = entrada
//     console.log(`su nota definitiva es ${nota1}`)
// }






let nota = Number(prompt("digete una nota: "))
let nota1 = Number( prompt("digete una nota: "))
let nota2 = Number( prompt("digete una nota: "))

let promedio = (nota1 + nota1 + nota2) / 3
console.log(`su nota definitiva es: ${promedio.toFixed(1)}`)

let pesos = 250000;
console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));