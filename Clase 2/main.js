//Precios de la Tienda en línea CA
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

//Individuales
let comprados90ss = 0;
let comprados90cs = 0;
let comprados360ss = 0;

alert("¡Bienvenidx a la Tienda en línea!");

while (seguirComprando) {
    const opcion = prompt(
        "¿Qué quieres comprar?\n" +
        "1 - Mantequilla sin sal de 90g $" + preciomantq90gss + " (quedan " + stockmantq90ss + " pzas en existencia.)" + "\n" +
        "2 - Mantequilla con sal de 90g $" + preciomantq90gcs + " (quedan " + stockmantq90cs + " pzas en existencia.)" + "\n" +
        "3 - Mantequilla sin sal de 360g $" + preciomantq360gss + " (quedan " + stockmantq360ss + " pzas en existencia.)" + "\n" +
        "0 - Terminar compra"
    );

    let nombre = "";
    let precio = 0;
    let stockDisponible = 0;






    // SWITCH: 
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
            console.log(" Opción no válida, intenta de nuevo.");
    }


    if (nombre !== "") {
        const cantidad = Number(prompt("¿Cuántas unidades de 🧈  " + nombre + "quieres?"));

        if (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
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
                    comprados90ss = comprados90ss - cantidad;
                    break;
                case "2":
                    stockmantq90cs = stockmantq90cs - cantidad;
                    comprados90cs = comprados90cs - cantidad;
                    break;
                case "3":
                    stockmantq360ss = stockmantq360ss - cantidad;
                    comprados360ss = comprados360ss - cantidad;
                    break;
            }

            console.log("✅Agregaste " + cantidad + " " + nombre + "(s) = $" + subtotal);
        }
    }
}


// Resultado o total
if (productosComprados === 0) {
    console.log("No compraste nada. ¡Vuelve pronto!");
} else {
    console.log ("Ticket de compra");
    console.log ("Desgloce");

    if (comprados90ss > 0){
        console.log ("- " + comprados90ss + "x Mantequilla sin sal de 90g");
    }
     if (comprados90cs > 0){
        console.log ("- " + comprados90cs + "x Mantequilla con sal de 90g");
    }
     if (comprados360ss > 0){
        console.log ("- " + comprados360gss + "x Mantequilla sin sal de 360g");
    }
    
    console.log("Total de artículos: " + productosComprados);
    console.log ("Total a pagar: $" + totalAPagar);
console.log("¡Gracias por tu compra!");


    console.log("Stock restante → Mantequlla de 90g sin sal: " + stockmantq90ss + " | Mantequilla de 90g con sal: " + stockmantq90cs + " | Mantequilla de 360g sin sal: " + stockmantq360ss);
    
}