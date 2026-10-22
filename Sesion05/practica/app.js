// ! FUNCIONES

// function /* es para poder llamar para definir la funcion  */

// function saludar(nombre) {
//     console.log(`hola ${nombre}`)
// }

// saludar("Manuela")



// ! como se hace como tal la funcion

// function areaRectangulo(b,h) {
//     return b * h
// }

// let arearec = areaRectangulo(5, 4)

// console.log(`el area del rectangulo es ${arearec}`)
// console.log(`el area del rectangulo es ${areaRectangulo(3, 9)}`)



//! con if y else


// function espar(numero) {
//     return numero % 2 === 0;
// }

// let n = Number(prompt("Escribe un numero: "))
// if (espar(n)) {
//     console.log(`${n} es par`);
// } else {
//     console.log(`${n} es impar`);
// }

// ! FUNCION CON FLECHA

// Si no dicen la tasa, usa 19 %
// function calcularIVA(precio, tasa = 0.19) {
//   return precio * tasa;
// }
// console.log(calcularIVA(10000));
// console.log(calcularIVA(10000, 0.05));

// La misma idea, más corta
// const doble = (n) => n * 2;
// const saludo = (nombre) => {
//     return `Hola, ${nombre}`;
// };
// console.log(doble(21), saludo("Sofía"));





function clasificarNota(nota) {
    if (nota < 3)
        return "No aprobado"
    else if (nota < 4)
        return "Aceptable"
    else if (nota < 4.6)
        return "Aprovado"
    else 
        return "Excelente -Aprovado"
}

console.log(clasificarNota(4.8));
console.log(clasificarNota(3.2));
console.log(clasificarNota(1.5));