let nombre = prompt("digite el nombre del producto: ")

let precio = Number(prompt("digite el precio unitario: "))

let cantidad = Number(prompt("digite la cantidad : "))

let descuento = Number(prompt("digite el porcentaje (0 si no hay): "))

const IVA = 0.19

const formatear = (valor) => valor.toLocaleString("es-CO", { style: "currency", currency: "COP" });



if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(descuento) || Number.isNaN(" ") || Number-isNaN(null) || precio <= 0 || cantidad <= 0 || descuento < 0 || descuento > 100 ) {
    alert("Por favor ingresa solo números válidos");
    
}else {
    const subtotal = precio * cantidad
    const valordescuento = subtotal * descuento / 100
    const baseIVA = subtotal - valordescuento
    const valorIVA = baseIVA * IVA
    const total = baseIVA + valorIVA
    

    console.log(`Subtotal: ${formatear(subtotal)}`);
    console.log(`Descuento: ${formatear(-valordescuento)}`);
    console.log(`IVA(19%): ${formatear(valorIVA)}`);
    console.log(`Total: ${total}`); 
    alert(`TOTAL: ${formatear(total)}`);
}