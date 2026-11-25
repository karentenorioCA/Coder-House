// ==========================================
// 1. DATOS BASE DE LA RECETA (10 PORCIONES)
// ==========================================
const porcionesBase= 10;

// Lista de ingredientes con sus cantidades base para 10 personas
const ingredientesBase = [
    { nombre: "Levadura (sobre)", cantidad: 11, unidad: "g" },
    { nombre: "Azúcar orgánica (para levadura)", cantidad: 5, unidad: "g" },
    { nombre: "Agua tibia", cantidad: 4, unidad: "cucharadas" },
    { nombre: "Harina de trigo", cantidad: 5, unidad: "tazas" },
    { nombre: "Azúcar orgánica (para masa)", cantidad: 0.5, unidad: "tazas" },
    { nombre: "Chocolate de mesa rallado", cantidad: 90, unidad: "g" },
    { nombre: "Leche evaporada", cantidad: 1, unidad: "lata(s)" },
    { nombre: "Huevo (para masa)", cantidad: 1, unidad: "pieza(s)" },
    { nombre: "Yemas", cantidad: 2, unidad: "pieza(s)" },
    { nombre: "Mantequilla a temp. ambiente", cantidad: 180, unidad: "g" },
    { nombre: "Chocolate de mesa troceado", cantidad: 180, unidad: "g" },
    { nombre: "Huevo ligeramente batido", cantidad: 1, unidad: "pieza(s)" },
    { nombre: "Mantequilla fundida", cantidad: 90, unidad: "g" },
    { nombre: "Chocolate de mesa extra", cantidad: 90, unidad: "g" }
];

// ==========================================
// 2. DEFINICIÓN DE FUNCIONES
// ==========================================

// ENTRADA DE DATOS (Función declarada con parámetro y return)
// Solicita las porciones y valida que sea un número mayor a 0
function pedirPorciones(mensaje) {
    let porciones = parseInt(prompt(mensaje));
    while (isNaN(porciones) || porciones <= 0) {
        alert("Error: Ingresa un número entero mayor a 0.");
        porciones = parseInt(prompt(mensaje));
    }
    return porciones;
}

// PROCESAMIENTO (Función flecha con parámetros y return)
// Calcula el nuevo gramaje o medida usando regla de tres
const calcularMedida = (cantidadBase, porcionesDeseadas) => {
    let resultado = (cantidadBase / porcionesBase) * porcionesDeseadas;
    // Redondeamos a máximo 2 decimales si no es un número entero
    return Number.isInteger(resultado) ? resultado : parseFloat(resultado.toFixed(2));
};

// PROCESAMIENTO (Función expresada con parámetros y return)
// Recorre todos los ingredientes y arma el texto final de la receta
const generarListaReceta = function(listaBase, porcionesDeseadas) {
    let textoReceta = "";

    // Ciclo de iteración para calcular cada uno de los 14 ingredientes
    for (let i = 0; i < listaBase.length; i++) {
        let item = listaBase[i];
        let nuevaCantidad = calcularMedida(item.cantidad, porcionesDeseadas);
        textoReceta += `- ${item.nombre}: ${nuevaCantidad} ${item.unidad}\n`;
    }

    return textoReceta;
};

// SALIDA DE DATOS (Función declarada con parámetros)
// Muestra el resultado en alert y en consola
function mostrarReceta(porcionesDeseadas, listaFormateada) {
    let encabezado = `🍫 Receta Pan de Muerto de Chocolate\n`;
    encabezado += `👥 Adaptada para: ${porcionesDeseadas} porciones\n`;
    encabezado += `----------------------------------\n`;

    let mensajeFinal = encabezado + listaFormateada;

    alert(mensajeFinal);
    console.log(mensajeFinal);
}

// ==========================================
// 3. EJECUCIÓN DEL SIMULADOR
// ==========================================

alert("¡Bienvenidx!");

let continuar = true;

// Ciclo while para permitir al usuario probar diferentes porciones sin recargar la página
while (continuar) {
    // 1. Entrada
    let porcionesUsuario = pedirPorciones("La receta original para el Pan de Muerto de chocolate es para 10 porciones. ¿Para cuántas porciones deseas calcular los ingredientes?");

    // 2. Procesamiento
    let recetaCalculada = generarListaReceta(ingredientesBase, porcionesUsuario);

    // 3. Salida
    mostrarReceta(porcionesUsuario, recetaCalculada);

    // Condicional para preguntar si quiere hacer otro cálculo
    let respuesta = prompt("¿Deseas calcular para otra cantidad de porciones? (Escribe 'sí' para continuar)");
    if (!respuesta || respuesta.toLowerCase() !== "sí") {
        continuar = false;
        alert("¡Nos vemos pronto!");
    }
}