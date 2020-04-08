
//Variables 
//Espacio dedicado para almacenar un dato
//Estos espacios tienen nombre y valor 
// var Nombre = valor; 

// Definición de variables

var numero = 5;
// número

var checkbox = false;
// Booleana

var nombre = "Carlos";
// string 

//instrucción para mostrar variables dentro de la consola 
console.log(numero);
console.log(checkbox);
console.log(nombre);

var x =9;
var y =4;
var z = 3;

//suma
var suma= x + z;

console.log("La suma es");
console.log(suma);

//concatenar
console.log("la suma es " + numero);

//resta
var resta = x - y ;
console.log("La resta es " + resta);

//multiplicación
var multi = z * y;
console.log("La multiplicación es " + multi);

//división
var divi = z / y;
console.log("La división es " + divi);

//módulo
var modulo = 3 % 2;
// si el residuo es 0 es par
// si es != 0 es impar 
console.log(modulo);

// enumerar variables
console.log(suma, resta, multi, divi);

//operadores relacionales
//mayor que
console.log(9 > 3); //true

//menor que 
console.log(3 < 1); //false

//igual que
console.log( 5 == 5); //true

//diferente que 
console.log(3 != 3); //false

console.log("Carlos" == "Gerardo"); // comparando strings false

//comparación sencilla
console.log("⭐")
console.log("5" == 5);

//comparación estricta usar siempre
console.log("5" === 5);
console.log("5" !== 5);

console.log(5 >= 5);
console.log(3 <= -5);

//funciones

function sumaNumeros(A, B) {
    var resultado = A + B;
    return resultado;

}

console.log(sumaNumeros(5,9));

var edad = prompt("Ingresa tu edad.");
edad = parseInt(edad);
console.log(edad);

console.log(hola);
