//Alert("Funciona");

//Número 
//Booleano
//String

//Nombre = valor
var edad = 3;

//Condición simple
if(edad >= 18) {  //Si es true se ejecuta el bloque de código
    console.log("Eres mayor de edad ");
    console.log("Puedes votar");
    console.log("Puedes apostar")
} else {
    console.log("No pueles estas chiquito")
}

//condición compleja
var dia = "Soleado";
var hora = "5:00";

if(dia === "Nublado"){
    console.log("No salgas");

} else{
    if(hora === "5:00"){
    console.log("Vas a tiempo");
    } else {
        console.log("Corre, vas tarde");

    }
}

//Imprimir Fizz si el módulo es multiplo de 3
//Imprimir Fuzz si el módulo es multiplo de 5
//Imprimir FizzFuzz si el módulo es multiplo de 3 y 5

var numero = 7 ;

if(numero % 3 === 0){
    if(numero % 5 === 0){
    console.log("FizzBuzz");
    } else{
        console.log("Fizz");
    }
} else if(numero % 5 === 0){
    console.log("Buzz");
} else{
    console.log(numero);
}


//Utilar && "and"
if(numero % 3 === 0 && numero % 5 === 0){
    console.log("FizzBuzz");
} else if(numero % 3 === 0) { 
    console.log("Fizz");
} else if(numero % 5 === 0){
    console.log("Buzz");
} else {
    console.log(numero);
}

//ciclos
//i=indice
// i = i + 1 es lo mismo que i++
// indice  ;  condición  ;  incremento  Iteración
        //i = 0; 0 <= 10; i = 0 + 1     Vuelta 0
        //i = 1; 1 <= 10; i = 1 + 1     Vuelta 1
        //i = 2; 2 <= 10; i = 2 + 1     Vuelta 2
        //i = 3;  3<= 10; i = 3 + 1     Vuelta 3
        //i = 0; 0 <= 10; i = 0 + 1     Vuelta 0

for(var i = 10; i >= 0; i--){
    console.log(i);
}

//for 5 al 20
for(var i = 5; i <= 20; i++){
    console.log("5 al 20 " + i);
}

//for 10 al 3
for(var i = 10; i >= 3; i--){
    console.log("10 al 3 " + i);
}

//for 1 al 100
for(var i = 1; i <= 100; i++){
    console.log("1 al 100 "+i);
}


//Bucles o ciclos

//while
var i = 0;
while(i <= 10) {
    console.log(i);
    i++;

}

// do while 
console.log("Do while");
var e = 0;
do {
    console.log(e);
    e++;
}while(e <=10);




