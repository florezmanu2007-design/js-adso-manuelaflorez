const formulario = document.querySelector("#formInscripcion");

function validarNombre(valor){

    const limpio = String(valor ?? "").trim()

    if (limpio === "") return "El nombre es obligatorio";

    if (limpio.length < 3) return "Escribe al menos 3 letras";

    return ""

};

function validarDocumento(valor){

    const limpio = String(valor ?? "").trim()

    if (limpio === "") return "El campo es obligatorio"
    if (!/^\d{6,10}$/.test(limpio)) return "Solo números, de 6 a 10 dígitos"
    return ""
}

function validarCorreo(valor){

    const limpio = String(valor ?? "").trim()

    if (limpio === "") return "El campo es obligatorio"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(limpio)) return "Ejemplo: algo@algo.com"
    return ""

}

function validarCelular(valor){

    const limpio = String(valor ?? "").trim()

    if (limpio === "") return "El campo es obligatorio"
    if (!/^3\d{9}$/.test(limpio)) return "10 dígitos que empiezan por 3"
    return ""

}

function validarCurso(valor){

    if (valor === "") return "Debes elegir un curso"
    return ""
}

function validarJornada(valor) {

    if (!valor) return "Debes seleccionar una jornada"
    return ""

}

function autorizacionDatos(valor){

    if (!valor) return "Debes autorizar el tratamiento de datos"
    return ""
}

function marcar(id, mensaje){

    document.querySelector(`#error-${id}`).textContent = mensaje;

    const campo = document.querySelector(`#${id}`);

    if (campo) campo.classList.toggle("invalido", mensaje !== "");

    return mensaje === ""

};

function mostrarResumen(datos){

    const resumen = document.querySelector("#resumen")
    if (!resumen) return;
    resumen.replaceChildren();

    const titulo = document.createElement("h2")
    titulo.textContent = "Inscripción Exitosa"
    
    const lineas = [
        `Nombre: ${datos.nombre}`,
        `Documento: ${datos.documento}`,
        `Correo: ${datos.correo}`,
        `Celular: ${datos.telefono}`,
        `Curso: ${datos.programa}`,
        `Jornada: ${datos.jornada}`
    ]

    const parrafos = lineas.map((texto) => {

        const parrafo = document.createElement("p");
        parrafo.textContent = texto;
        return parrafo;

    }) 

    resumen.append(titulo, ...parrafos)

}

formulario.addEventListener("submit", (e) => {

    e.preventDefault();


    const nombre = document.querySelector("#nombre").value.trim();
    const documento = document.querySelector("#documento").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const programa = document.querySelector("#programa").value;
    const jornada = document.querySelector(`input[name="jornada"]:checked`);
    const acepta = document.querySelector("#terminos").checked;

    const resultados = [
        marcar("nombre", validarNombre(nombre)),
        marcar("documento", validarDocumento(documento)),
        marcar("correo", validarCorreo(correo)),
        marcar("telefono", validarCelular(telefono)),
        marcar("programa", validarCurso(programa)),
        marcar("jornada", validarJornada(jornada)),
        marcar("terminos", autorizacionDatos(acepta))
    ]

    const resultadodoValido = resultados.every(Boolean)

    if(!resultadodoValido) return;

    const datosInscritos = {
        nombre : nombre,
        documento: documento,
        correo: correo,
        telefono: telefono,
        programa: programa,
        jornada: jornada.value,
        acepta: acepta
    }

    mostrarResumen(datosInscritos)
    formulario.reset();
    
});

