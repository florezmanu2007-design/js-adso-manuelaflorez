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



// ! Lista de pendientes

// Menú

let menu;
let tareas = []
let tareaAgregada;
let tareaEliminada;
let posicionTareaEliminada;

do {

    menu = prompt("1- Agregar una tarea\n2- Ver lista de tareas\n3- Eliminar una tarea\n4- Deja vacio para salir")

    if (menu){

        switch (Number(menu)){
        
            case 1:

                tareaAgregada = prompt("Ingresa el nombre de la tarea")

                if (tareas.includes(tareaAgregada)){

                    alert("Esa tarea ya existe")

                }else{

                    tareas.push(tareaAgregada)

                }

                break

            case 2:

                console.table(tareas)

                break

            case 3:

                tareaEliminada = prompt("Ingresa el nombre de la tarea que desea eliminar")

                posicionTareaEliminada = tareas.indexOf(tareaEliminada)
                
                if (posicionTareaEliminada === -1){

                    alert("Esa tarea no existe")

                }else{

                    tareas.splice(posicionTareaEliminada, 1)

                }

                break

            default:
                
                alert("Opción no válida, intenta nuevamente")
        }

    }   
} while (menu)