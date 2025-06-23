import { suma, resta, multiplicacion, division, renderizar } from "./funciones.js";
import { cliente } from "./data.js";
// let a = 12;
// let b = 10;
// console.log(suma(a, b));
// console.log(resta(a, b));
// console.log(multiplicacion(a, b));
// console.log(division(a, b));

// let aa = parseInt(prompt('Ingrsa un nuemro'))
// let bb = parseInt(prompt('Ingrsa un nuemro'))

// console.log(suma(aa, bb));
// console.log(resta(aa, bb));
// console.log(multiplicacion(aa, bb));
// console.log(division(aa, bb));

let lista = document.querySelector("#lista-clientes");
for (let i = 0; i < cliente.length; i++) {
  renderizar(cliente[i], lista);
}
