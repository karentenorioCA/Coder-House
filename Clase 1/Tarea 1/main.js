alert("Bienvenidx, para calcular tus datos contesta las siguientes preguntas");

let nombre = prompt ("Hola, ¿Cuál es tu primer nombre?");

let apellido = prompt ("¿Cuál es tu primer apellido?");

let pais = prompt("¿En qué país naciste?");

let anioActual = 2026;

let anioNacimiento = Number(prompt("Hola " + nombre + " "+ apellido + ", ¿cuál es tu año de nacimiento?"));

let edad = anioActual - anioNacimiento;

alert(nombre +" " + apellido +", nacidx en " + pais + " actualmente tienes " + edad + " años.") ;



console.log (edad);


