// Precios de la Tienda en línea CA
const preciomantq90gss = 20;
const preciomantq90gcs = 20;
const preciomantq360gss = 81;

// Stock disponible 
let stockmantq90ss = 10;
let stockmantq90cs = 5;
let stockmantq360ss = 8;

// Datos de la compra
let totalAPagar = 0;
let productosComprados = 0;
let seguirComprando = true;

// Individuales
let comprados90ss = 0;
let comprados90cs = 0;
let comprados360ss = 0;


// ==========================================
// 🚀 AQUÍ EMPIEZAN LAS FUNCIONES FLECHA 🚀
// ==========================================

// 1. Función para mostrar el menú (Usa "retorno implícito" para devolver el prompt)
const mostrarMenu = () => prompt(
    "¿Qué quieres comprar?\n" +
    "1 - Mantequilla sin sal de 90g $" + preciomantq90gss + " (quedan " + stockmantq90ss + " pzas.)\n" +
    "2 - Mantequilla con sal de 90g $" + preciomantq90gcs + " (quedan " + stockmantq90cs + " pzas.)\n" +
    "3 - Mantequilla sin sal de 360g $" + preciomantq360gss + " (quedan " + stockmantq360ss + " pzas.)\n" +
    "0 - Terminar compra"
);

// 2. Función para validar si la cantidad ingresada es un número correcto
const esCantidadValida = (cantidad) => !isNaN(cantidad) && cantidad > 0 && Number.isInteger(cantidad);

// 3. Función para imprimir el ticket final (Agrupa todos los console.log)
const imprimirTicket = () => {
    console.log("Ticket de compra");
    console.log("Desglose:");

    if (comprados90ss > 0) console.log("- " + comprados90ss + "x Mantequilla sin sal de 90g");
    if (comprados90cs > 0) console.log("- " + comprados90cs + "x Mantequilla con sal de 90g");
    if (comprados360ss > 0) console.log("- " + comprados360ss + "x Mantequilla sin sal de 360g");
    
    console.log("Total de artículos: " + productosComprados);
    console.log("Total a pagar: $" + totalAPagar);
    console.log("¡Gracias por tu compra!");
    console.log("Stock restante → 90g sin sal: " + stockmantq90ss + " | 90g con sal: " + stockmantq90cs + " | 360g sin sal: " + stockmantq360ss);
};

// ==========================================
// FLUJO PRINCIPAL DEL PROGRAMA
// ==========================================

console.log("¡Bienvenidx a la Tienda en línea!");

while (seguirComprando) {
    
    // Llamamos a nuestra función flecha
    const opcion = mostrarMenu(); 

    let nombre = "";
    let precio = 0;
    let stockDisponible = 0;

    switch (opcion) {
        case "1":
            nombre = "Mantequilla sin sal de 90g ";
            precio = preciomantq90gss;
            stockDisponible = stockmantq90ss;
            break;
        case "2":
            nombre = "Mantequilla con sal de 90g ";
            precio = preciomantq90gcs;
            stockDisponible = stockmantq90cs;
            break;
        case "3":
            nombre = "Mantequilla sin sal de 360g ";
            precio = preciomantq360gss;
            stockDisponible = stockmantq360ss;
            break;
        case "0":
        case null:
            seguirComprando = false;
            break;
        default:
            console.log("Opción no válida, intenta de nuevo.");
    }

    if (nombre !== "") {
        const cantidad = Number(prompt("¿Cuántas unidades de 🧈 " + nombre + "quieres?"));

        // Usamos la función flecha de validación
        if (!esCantidadValida(cantidad)) {
            console.log("Cantidad no válida.");
        } else if (stockDisponible === 0) {
            console.log(nombre + " agotado.");
        } else if (cantidad > stockDisponible) {
            console.log("❌No hay suficiente stock de " + nombre + ". Solo quedan " + stockDisponible + ".");
        } else {
            const subtotal = cantidad * precio;
            totalAPagar = totalAPagar + subtotal;
            productosComprados = productosComprados + cantidad;

            switch (opcion) {
                case "1":
                    stockmantq90ss = stockmantq90ss - cantidad;
                    comprados90ss = comprados90ss + cantidad; // ¡Aquí corregí la resta por suma!
                    break;
                case "2":
                    stockmantq90cs = stockmantq90cs - cantidad;
                    comprados90cs = comprados90cs + cantidad; // ¡Corregido!
                    break;
                case "3":
                    stockmantq360ss = stockmantq360ss - cantidad;
                    comprados360ss = comprados360ss + cantidad; // ¡Corregido!
                    break;
            }

            console.log("✅Agregaste " + cantidad + " " + nombre + "(s) = $" + subtotal);
        }
    }
}

// Resultado o total final
if (productosComprados === 0) {
    console.log("No compraste nada. ¡Vuelve pronto!");
} else {
    // Llamamos a nuestra función flecha para mantener esta área muy limpia
    imprimirTicket(); 
}