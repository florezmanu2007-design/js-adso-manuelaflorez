// ! CONTAR PALABRAS

frase = prompt("escribe una frase: ")

function contarpalabra(frase) {
    const partes = frase.split(" ")
    let i = 0

    for (const parte of partes) {
        if (parte !== "") {
            i++
        }
    }

    return i
}

console.log(`📝 La frase tiene ${contarpalabra(frase)} palabras.`)




// ! FORMATO TITULO

const frase = prompt("escribe una frase: ")

function formatoTitulo(frase) {
    const palabras = frase.trim().split(/\s+/)
    const resultado = []

    for (const palabra of palabras) {
        const arreglada = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()
        resultado.push(arreglada)
    }

    return resultado.join(" ")
}

console.log(`🧾 Cliente: ${formatoTitulo(frase)}`)