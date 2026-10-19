const secreto = Math.floor(Math.random() * 100 ) + 1
const maxIntentos = 7
let intentos = 0
let adivino = false
console.log(secreto)

while (intentos < maxIntentos && !adivino) {
    const numero = Number(prompt("adivina el numero secreto del (1-100): "))

    if (numero < 1 || numero > 100 || !Number.isInteger(numero)) {
    console.log("⚠️ Escribe un número entre 1 y 100.");
    continue;
    }
    intentos++
    console.log(`intento ${intentos} de ${maxIntentos}`)


    if (numero === secreto) {
        adivino = true;
    } else if (numero < secreto) {
        console.log("📈 Más alto.");
    } else {
        console.log("📉 Más bajo")
    }
}
if(adivino) {
    console.log(`🎉 ¡Ganaste! Adivinaste en ${intentos} intentos.`)
} else {
    console.log(`😢 Perdiste. El número era ${secreto}.`)
}
