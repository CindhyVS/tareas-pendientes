//comentarios
// alt +39
console.log('hola');

let nombre="Cinthya";

const pi = 3.14;
//string nombre="Luis";
// Tipos de datos 
// No definido 
let noDefinido;
//numero 
let cantidad=50;
// cadena de texto o string
let bebida= "agua";
//booleanos 
let activo= true;

//Objetos 
// Personas: nombre, apellido, edad, peso
let persona ={nombre:'Cinthya', apellido:'valdez', edad:28,};
console.log(persona);
// arrays coleccion
let personas = [
    {nombre: 'elena', apellido:'almenza', edad: 22},
    {nombre: 'mauro', apellido:'lopez', edad: 32},
    {nombre: 'alma', apellido:'hernandez', edad: 26},
]
console.log(personas);
console.log(personas[2]);

// Funciones JS
// Listado de instrucciones
function suma(a, b) {
    return a + b;
}
let resultadoDeSuma = suma(9, 7);
console.log(resultadoDeSuma);

function multiplicacion(a, b) {
    return a * b;
}
let resultado = multiplicacion(5,7);
console.log(resultado);