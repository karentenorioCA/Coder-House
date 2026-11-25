// Simulador: control de stock de una tienda
// El array es el DATO sobre el que operan los ciclos y funciones que ya tenías.
// 1) La colección, con nombre semántico de TU proyecto
const productosEnStock = ["Mantequilla", "Margarina", "Pan de Muerto", "Hotcake", "Queso Crema", "Cocoa", "Relleno Horneable", "Pastelera", "Crema batida"];
// 2) Manipulación de extremos
productosEnStock.push("Cocoa 5 kg");     // entra al final
productosEnStock.unshift("Mantequilla sin sak 90g");   // entra al principio: es prioridad
const agotado = productosEnStock.pop(); // sale el último y lo guardamos
console.log(`Producto agotado por el momento: ${agotado}`);
// 3) Búsqueda y validación
const buscado = prompt("¿Qué producto deseas buscar?");
if (productosEnStock.includes(buscado)) {
  const posicion = productosEnStock.indexOf(buscado);
  console.log(`✅ "${buscado}" está en stock, en la posición ${posicion}`);
} else {
  console.log(`❌ "${buscado}" no está en stock`);
}
// 4) Actualización por índice con splice
productosEnStock.splice(2, 1, "Queso Crema de 1,80kg"); // reemplaza el ítem del índice 2
// 5) Reporte iterativo: la función que recorre y muestra
function listarStock(lista) {
  console.log("--- Stock actual ---");
  for (const producto of lista) {
    console.log(`Producto: ${producto}`);
  }
  console.log(`Total: ${lista.length} productos`);
}
listarStock(productosEnStock);