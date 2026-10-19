// tabla de pedido

// let numero = Number(prompt("digite un numero para crearle su tabla: "))

// if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
//     console.log("⚠️ Escribe un número válido.")
// } else {
//     console.log(`Tabla del ${numero}`)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`${numero} * ${i} = ${numero * i}`)
// }



// estadistica del grupo

const cantidad = Number(prompt("¿Cuántas notas vas a ingresar?"))

if (!Number.isInteger(cantidad) || cantidad < 1) {
    console.log("⚠️ Escribe una cantidad válida.")
} else {
    let suma = 0
    let mayor
    let menor

    for (let i = 1; i <= cantidad; i++) {
        let nota
        let valida

        do {
            nota = Number(prompt(`Nota ${i}:`))
            valida = !Number.isNaN(nota) && nota >= 1 && nota <= 5

            if (!valida) {
                console.log("⚠️ Nota inválida, debe estar entre 1 y 5.")
            }
        } while (!valida)

        suma += nota

        if (i === 1 || nota > mayor) {
            mayor = nota
        }
        if (i === 1 || nota < menor) {
            menor = nota
        }
    }

    const promedio = suma / cantidad

    console.log("\n📊 Estadísticas del grupo")
    console.log(`Promedio: ${promedio.toFixed(1)}`)
    console.log(`Nota mayor: ${mayor}`)
    console.log(`Nota menor: ${menor}`)
}