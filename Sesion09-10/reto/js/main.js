// capturamos el dom

const titulo = document.querySelector("#titulo");
const btnTema = document.querySelector("#btnTema");
const nuevaTarea = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const contador = document.querySelector("#contador");
const lista = document.querySelector("#lista");

// Objeto donde agregamos las tareas

let tareas = [];

// funciones

function render(arregloTareas) {
  lista.innerHTML = "";
  let pendientes = 0;

  for (const tarea of arregloTareas) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = tarea.texto;
    button.textContent = "❌";

    if (tarea.hecha) li.classList.add("hecha");
    if (!tarea.hecha) pendientes += 1;

    li.dataset.id = tarea.id;
    li.append(span, button);
    lista.append(li);
  }
  contador.textContent = `${pendientes} pendientes de ${arregloTareas.length}`;
}

function agregarTarea() {
  const textoTarea = nuevaTarea.value.trim();

  if (textoTarea === "") {
    nuevaTarea.classList.add("error");
    return;
  }
  nuevaTarea.classList.remove("error");

  const objetoTarea = { id: Date.now(), texto: textoTarea, hecha: false };

  tareas.push(objetoTarea);

  nuevaTarea.value = "";
  render(tareas);
}

// agregar tarea

btnAgregar.addEventListener("click", agregarTarea);
nuevaTarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarTarea();
});

// colocar hecha

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = Number(e.target.parentElement.dataset.id);

    tareas = tareas.filter((tarea) => tarea.id !== id);

    render(tareas);
  }

  if (e.target.tagName === "SPAN") {
    const id = Number(e.target.parentElement.dataset.id);

    const tareaHecha = tareas.find((tarea) => tarea.id === id);

    if (tareaHecha) {
      tareaHecha.hecha = !tareaHecha.hecha;
    }

    render(tareas);
  }
});
// Cambio de modo

btnTema.addEventListener("click", () => {
  const oscuro = document.body.classList.toggle("oscuro");

  if (oscuro) {
    btnTema.textContent = "🌞 Modo claro";
  } else {
    btnTema.textContent = "🌜 Modo oscuro";
  }
});

// cambio de titulo

titulo.textContent = "🗒️ Tareas de Manuela";

render(tareas);
