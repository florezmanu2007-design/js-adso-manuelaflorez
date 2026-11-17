const aprendices = [
    { nombre: "Ana", nota: 4.5, jornada: "Mañana" },
    { nombre: "Luis", nota: 2.8, jornada: "Tarde" },
    { nombre: "Sofía", nota: 3.9, jornada: "Mañana" },
    { nombre: "Juan", nota: 4.8, jornada: "Noche" },
    { nombre: "María", nota: 2.5, jornada: "Tarde" },
    { nombre: "Pedro", nota: 3.4, jornada: "Noche" }
] 



// ! FILTER

const aprobados = aprendices.filter((a) => a.nota >= 3 );
console.table(aprobados)

// ! FILTRO DE NOCHE
const noche = aprendices.filter((n) => n.jornada == "Noche");
console.table(noche)


// ! CONTAR

const mañana = aprendices.filter((n) => n.jornada == "Noche");
console.log(` la jornada de la mañana tiene ${mañana.length} personas`)



// ! METODO MAP
const nombres = aprendices.map((a) => a.nombre.toUpperCase());
console.log(nombres)

const conestado = aprendices.map((a) => ({
    ...a,
    estado: a.nota >= 3 ? "aprobado" : "No Aprobado"
}));
console.table(conestado )


// ! FIND ES DE BUSCAR (* NUMEROS DE DOCUMENTOS O COSAS QUENO PUEDEN HABER COSAS REPETIDAS)
const juan = conestado.find((a) => a.nombre === "Juan");
console.log(juan)

// ! SOME  
console.log(aprendices.some((a) => a.nota >= 4.6));

console.log(aprendices.some((a) => a.nombre === "María"));


// ! EVERY
/* EVERY ES QUE TODOS ESTRICATAMENTE TWNGA ESA CONDICION */
//  todas las notas tienes una nota igual o mayor a 3
console.log(aprendices.every((a) => a.nota >= 3));

console.log(aprendices.every((a) => a.nota >= 2));

const jornota = aprendices
    .filter((a) => a.jornada == "Mañana" && a.nota >= 3)
    .map((a) => a.nombre.toUpperCase());

console.table(jornota)


// ! REDUCE
const suma = aprendices.reduce((total,a) => total + a.nota, 0)
console.log(suma)

const promedio = suma / aprendices.length
console.log(`promedio de grupo ${promedio.toFixed(1)}`)

// ! SORT
/* SIRVE PARA  PONERLE ORDEN A LOS LISTADO O A LOS VALORES DE MENOR A MAYOR*/
console.log([10,9,1,100].sort())
console.log([10,9,1,100].sort((a, b) => a - b))
console.log([10,9,1,100].sort((a, b) => b - a))

/* TOSORTE CREA OTRO ARREGLO NUEVO  CON LOS NUEMEROS */
const ranking = aprendices.toSorted((a, b) => b.nota - a.nota);
console.table(ranking)
console.table(ranking.reverse());

/* PARA MIRAR NOMBRES */
const alfabetico = [...aprendices].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.table(alfabetico)
console.table(alfabetico.reverse())


//  ! JSon 
/*  SON FORMATOS PARA LOS RELLENIS DE LAS BASES DE DATOS  */
const texto = JSON.stringify(ranking, null, 2) /* empaquetando en json */
console.log(typeof texto)
console.log( texto)

const desempaquetar = JSON.parse(texto)
console.log(desempaquetar[0].nombre)