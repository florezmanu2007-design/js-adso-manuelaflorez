const pedidos = [
    { id: 1, cliente: "Ana", plato: "Bandeja paisa", cantidad: 2, precioUnitario: 32000, estado: "entregado", domicilio: true },

    { id: 2, cliente: "Luis", plato: "Ajiaco", cantidad: 1, precioUnitario: 28000, estado: "pendiente", domicilio: false },

    { id: 3, cliente: "Sofía", plato: "Arepa de choclo", cantidad: 4, precioUnitario: 8000, estado: "entregado", domicilio: true },

    { id: 4, cliente: "Juan", plato: "Sancocho", cantidad: 3, precioUnitario: 26000, estado: "pendiente", domicilio: true },

    { id: 5, cliente: "María", plato: "Empanadas x6", cantidad: 2, precioUnitario: 12000, estado: "entregado", domicilio: false },

    { id: 6, cliente: "Pedro", plato: "Bandeja paisa", cantidad: 1, precioUnitario: 32000, estado: "entregado", domicilio: true },

    { id: 7, cliente: "Camila", plato: "Mondongo", cantidad: 2, precioUnitario: 25000, estado: "pendiente", domicilio: false },

    { id: 8, cliente: "Andrés", plato: "Arroz con pollo", cantidad: 3, precioUnitario: 22000, estado: "entregado", domicilio: true },

    { id: 9, cliente: "Valentina", plato: "Ajiaco", cantidad: 2, precioUnitario: 28000, estado: "entregado", domicilio: false },

    { id: 10, cliente: "Daniel", plato: "Chicharrón", cantidad: 5, precioUnitario: 15000, estado: "pendiente", domicilio: true }
];


// ! MAP
const pedidosConTotal = pedidos.map((p) => ({
    ...p,
  total: p.cantidad * p.precioUnitario
}));
console.table(pedidosConTotal);


//  ! FILTER
const pendientes = pedidos.filter((p) => p.estado === "pendiente");
console.log(`Pedidos pendientes: ${pendientes.length}`);


// ! FILTER Y REDUCE
const totalEntregados = pedidosConTotal
    .filter((p) => p.estado === "entregado")
    .reduce((acumulado, p) => acumulado + p.total, 0);
console.log(
    `Total vendido (entregados): ${totalEntregados.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`
);


//  ! TOSORTED
const top3 = pedidosConTotal
    .toSorted((a, b) => b.total - a.total)
    .slice(0, 3);
console.table(top3);


// ! FIND
const entrada = prompt("Número de pedido a buscar:");
const numero = Number(entrada);
const pedidoEncontrado = pedidosConTotal.find((p) => p.id === numero);

if (pedidoEncontrado) {
    console.log("Pedido encontrado:");
    console.table([pedidoEncontrado]);
    } else {
    console.log(`El pedido ${entrada} no existe.`);
    }


// ! SOME
const hayDomiciliosPendientes = pedidos.some(
    (p) => p.domicilio && p.estado === "pendiente"
);

console.log(
    hayDomiciliosPendientes
    ? "Sí, todavía hay domicilios pendientes por despachar."
    : "No hay domicilios pendientes."
);