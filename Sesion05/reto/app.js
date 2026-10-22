function pesosadolares(){
    let pesos = Number(prompt("Digite cuantos pesos tiene: "))
    let dolares = Number(prompt("Ingrese a cuanto esta el dolar?: "))

    return `la conversion de ${pesos} pesos es ${pesos / dolares} dolares`
}


function temperatura() {
    let c = Number(prompt("Digite cuantos grados hay?: "))
    return `Los grados ${c} centigrados son en ${c * 9 / 5 + 32} farenheit`
}


function KmAmll() {
    let Km = Number(prompt("Digite la cantidad de kilometros: "))
    return `${Km} kilometros son ${Km * 0.621371} millas`
}


function segundoaHora() {
    let s = Number(prompt("Ingrese los segundos a convertir: "))
    return `los segundos ${s} convertidos son ${s / 3600} Horas`
}


let opcion = prompt("Menu\n1. pesos a dolares\n2. °c a °f\n3. Km a millas\n4.Segundos a horas\n0. salir")

while (opcion != 0) {
    switch (opcion) {
        case "1":
            console.log(pesosadolares())
            break
        case "2":
            console.log(temperatura())
            break
        case "3":
            console.log(KmAmll())
            break
        case "4":
            console.log(segundoaHora())
            break
        default :
            alert("Debes elegir una opcion entre 0 y 4")
            console.log("Debes elegir una opcion entre 0 y 4")
    }
    opcion = Number(prompt("Menu\n1. pesos a dolares\n2. °c a °f\n3. Km a millas\n4.Segundos a horas\n0. salir"))
}

