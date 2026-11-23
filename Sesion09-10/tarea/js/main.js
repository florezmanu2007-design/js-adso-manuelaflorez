// atrapamos dom

const listaProductos = document.querySelector("#listaProductos");
const listaCarrito = document.querySelector("#listaCarrito");
const totalCarrito = document.querySelector("#totalCarrito");

// productos

const productos = [
  { id: 1, nombre: "Portatil", precio: 20000 },
  { id: 2, nombre: "Mouse", precio: 3000 },
  { id: 3, nombre: "Monitor", precio: 50000 },
  { id: 4, nombre: "Software", precio: 100000 },
];

let carrito = [];

// funciones

function calcularTotal(listaCarrito) {
  const total = listaCarrito.reduce(
    (acumulador, item) => item.precio + acumulador,
    0,
  );

  return total;
}

function renderizarCatalogo(productos) {
  for (const producto of productos) {
    const tarjeta = document.createElement("div");

    const titulo = document.createElement("h3");

    const precio = document.createElement("p");

    const button = document.createElement("button");

    tarjeta.classList.add("producto-card");
    titulo.textContent = producto.nombre;
    precio.textContent = producto.precio;
    button.textContent = "Agregar";
    button.classList.add("btn-agregar");

    button.addEventListener("click", () => {
      carrito.push(producto);
      actualizarCarrito();
    });

    tarjeta.append(titulo, precio, button);

    listaProductos.append(tarjeta);
  }
}

function renderizarCarrito(listaCarro) {
  listaCarrito.replaceChildren();

  if (listaCarro.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Tu carrito esta vacío";
    li.classList.add("carrito-vacio")
    listaCarrito.append(li);
  } else {
    listaCarro.forEach((producto, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      li.textContent = `${producto.nombre} - ${producto.precio}`;
      li.classList.add("item-carrito");
      button.textContent = "❌ Quitar";
      button.classList.add("btn-quitar");

      button.addEventListener("click", () => {
        carrito.splice(index, 1);
        actualizarCarrito()
      });

      li.append(button);
      listaCarrito.append(li);
    });
  }
}

function renderizarTotal(total) {
  totalCarrito.textContent = "$" + total.toLocaleString("es-CO");
}

function actualizarCarrito() {
  const total = calcularTotal(carrito);

  renderizarCarrito(carrito);

  renderizarTotal(total);
}

renderizarCatalogo(productos);
actualizarCarrito();
