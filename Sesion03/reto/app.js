const nombre = prompt("escribe el nombre del aprendiz: ")
let nota = Number(prompt("escribe la nota"))
let resultado = ""

if (Number.isNaN(nota)) {
    alert("escribe la nota con numeros")
} else if (nota < 0 || nota > 5){
    alert("la nota está fuera de rango")
} else {
    if (nota >= 4.6){
        resultado = "🏆 Excelente"
    }
    else if (nota >= 4.0) {
        resultado = "⭐ Sobresaliente"
    }
    else if (nota >= 3.0) {
        resultado = "✅ Aprobado"
    }
    else {
        resultado = "❌ No aprobado"
    }
console.log(`${nombre}: ${nota} -> ${resultado}`)
}