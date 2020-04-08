//No tienen un orden
//Llave: valor

//JSON
//Javascript
//Object
//notation

var objeto = {
    nombre: "Lanoche estrellada",
    autor: "Van Gogh",
    tecnica: "óleo sobre lienzo",
    colores: ["#FFFFFF", "#000000"],
    anio: 1889,
    lugar: "Amsterdam",
    mensaje: "Es una obra muy linda",
    museo: "Hacter",
    //método
    calcularEdad: function () {
        return 2020 - this.anio },
    numeroColores: function () {
        if (this.colores.length === 1) {
            return "La pintura " + this.nombre + " del pintor " + this.autor + " tiene " + this.colores.length + " colores"
        } else {
            return "La pintura " + this.nombre + " del pintor " + this.autor + " tiene " + this.colores.length + " un color"
        }
    }
}

console.log(objeto);
console.log(objeto.anio);

console.log(objeto.calcularEdad());
console.log(objeto.numeroColores());