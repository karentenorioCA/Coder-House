
/*let nombreUsuario;


//pedir datos de usuario

function pedirDatosUsuario() {

    nombreUsuario = prompt("Hola, ¿Cómo te llamas?");
    let edadUsuario = Number(prompt("¿Cuántos años vas a tener a fin de año?"));
    return edadUsuario;
}


function calcularEdad() {
    let edadUsuario = pedirDatosUsuario();
    let edad2027 = edadUsuario + 1;
    let mensaje = nombreUsuario + " así que el año que viene vas a cumplir " + edad2027;
    return mensaje;

}

console.log(calcularEdad());*/



//dar el resultado al usuario

/*function calcularEdad (){
const edad2027 = edadUsuario + 1;
alert(nombreUsuario + " así que el año que viene vas a cumplir " + edad2027);

}*/

//const edad2027 = edadUsuario + 1;
//alert(nombreUsuario + " así que el año que viene vas a cumplir " + edad2027);




//parámetro
/*function calcularEdad (edad){
    let edad2027 = edad +1;
    alert(nombreUsuario + " así que el año que viene vas a cumplir " + edad2027);

}



//ejecución
pedirDatosUsuario ();

            //argumento
calcularEdad(edadUsuario);
calcularEdad(11);
calcularEdad(999);





*/




// IVA = 21%
/*
function calcularIva (monto) {
    const IVA = 0.21;
    let ivaDelMonto = monto *IVA;
    let precioFinal =  monto + ivaDelMonto;

    return precioFinal;



}

let precioConIva = calcularPrecioFinalConIva(100);

alert (precioConIva);*/


const IVA = 0.21;

                    //función anónima
/*    const calcularIva = function(monto){return monto*IVA}*/

//función flecha
// para que te de un mensaje final :       
const calcularIva = (monto) => "el IVA Total de " + monto + " es " + monto*IVA;
//const calcularIva = (monto) => monto*IVA;



alert( calcularIva(Number(prompt("¿De qué valor desea calcular el IVA?"))));

