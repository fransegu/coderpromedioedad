// Calcular edad promedio de personas registradas


let edad = Number (prompt("Por favor ingrese la edad"));
let edades = [];
let sumaEdades = 0;

let personas = 0;
let resultado = 0;
let nuevoIngreso = false;

function contador (edad) {
    while (edad) {
    personas = personas +1;
    edades.push(edad);
    nuevoIngreso = confirm("Desea agregar otra edad?");
    if (nuevoIngreso === true) {
    edad = Number (prompt("Por favor ingrese la edad"));
    } else {
        break;
    }
 //   console.log(personas);
 //   console.log(edades);
}
}
contador(edad);

for (const valor of edades) {
    sumaEdades += valor;
}
// console.log(sumaEdades);


function calcularPromedioEdad (edad, personas) {
    // contador (edad, personas);
    resultado = (sumaEdades / personas).toFixed(1);}

    calcularPromedioEdad(edad, personas);



// Verificar si se trata de 1 o más personas para expresar en plural (o singular) el resultado
    if (personas === 1) {
        console.log(personas+" "+"persona da un promedio de edad de"+" "+resultado+" "+"años");
        } else {
            console.log(personas+" "+"personas dan un promedio de edad de"+" "+resultado+" "+"años");
         
        }
      
