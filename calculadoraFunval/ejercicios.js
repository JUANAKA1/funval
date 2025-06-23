let contenedor = document.querySelector(".contenedor");
let parrafo = document.querySelector(".parrafo");
// Nivel 1: Básico (1–20)
let array = [1, 2, 3, 4, 5];
// Objetivo: comprender la sintaxis y el comportamiento del bucle for.
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
// Imprime los números del 1 al 10.
// for (let i = 1; i < 11; i++){
//     console.log(i);
// }
// Imprime los números del 10 al 1.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Imprime los números del 1 al 100.
// for (let i = 1; i< 101; i++){
//     console.log(i);
// }

// Imprime los números pares del 1 al 50.
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     constenedor.innerHTML += `<p>${i} - </p>`;
//   }
// }

// Imprime los números impares del 1 al 50.
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     contenedor.innerHTML += `<p>${i} - </p>`;
//   }
// }

// Imprime la tabla del 5 (del 5 al 50).
// let mun = 5;
// let tablaDel5 = "";
// for (let index = 0; index <= 10; index++) {
//     tablaDel5 += `<p>tabla: ${mun} x ${index} = ${mun * index}</p>`
//     contenedor.innerHTML = tablaDel5;
// }

// Imprime los múltiplos de 3 del 1 al 30.
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0) {
//     parrafo.textContent += `${i} - `;
//   }
// }

// Imprime todos los cuadrados de los números del 1 al 10.
// for (let index = 1; index <= 10; index++) {
//     const cuadrado = index * index;
//     contenedor.innerHTML += `<p>${index} al cuadrado es ${cuadrado}</p>`;

// }

// Imprime los primeros 10 números negativos.
// for(let i = -1; i >=-10; i--){
//     parrafo.textContent += `${i} /  `;
// }

// Imprime los números entre 1 y 100 que sean divisibles por 5.
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     contenedor.innerHTML += `<p>${i} - </p>`;
//   }
// }

// Cuenta cuántos números del 1 al 100 son divisibles por 7.

// for (let i = 0; i < 100; i++) {
//   if (i % 7 === 0) {
//     contenedor.innerHTML += `<p>${i} - </p>`;
//   }
// }

// Imprime los números del 1 al 10 en orden descendente.
// for (let i = 10; i >= 1; i--) {
//     contenedor.innerHTML += `<p>${i} - </p>`;
// }
// Suma los números del 1 al 10.
// let suma = 0;
// for (let i = 1; i <= 10; i++) {
//   suma = suma + i;
//   console.log(suma);
// }
// contenedor.innerHTML = `<p>${suma} - </p>`;

// Suma los números pares del 1 al 100.
// let sumaPares = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumaPares += i;
//   }
// }
// contenedor.innerHTML = `<p>${sumaPares} </p>`;

// Suma los impares del 1 al 100.
// let sumaImpares = 0;
// for (let i = 1; i <=100; i++) {
//     if (i%2 !== 0) {
//         sumaImpares += i
//     }
// }
// contenedor.innerHTML = `<p>${sumaImpares} </p>`;

// Calcula el factorial de 5.

// let numero = 5;
// let factorial = 1;
// for (let i = 1; i <= numero; i++) {
//   factorial *= i;
// }
// contenedor.innerHTML = `<p>El factorial de ${numero} es ${factorial}</p>`;

// Calcula el factorial de un número dado.
// let numeroFactorial = 6;
// let factorialNumero = 1;
// for (let i = 1; i <= numeroFactorial; i++) {
//     factorialNumero *= i;
// }
// contenedor.innerHTML += `<p>El factorial de ${numeroFactorial} es ${factorialNumero}</p>`;

// Imprime los primeros 10 múltiplos de un número dado.
// let numeroMultiplo = 4;
// let primerosMultiplo = 0;
// for (let i = 1; i <= 10; i++) {
//     primerosMultiplo = numeroMultiplo * i;
//     contenedor.innerHTML += `<p>El ${numeroMultiplo} x ${i} es ${primerosMultiplo}</p>`;
// }

// Muestra cuántos múltiplos de 3 hay entre 1 y 100.
// let multiplo = 3;
// let cantidad = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % multiplo === 0) {
//     cantidad++;
//     contenedor.innerHTML += `<p>El ${i} es multiplo de ${multiplo}</p>`;
//   }
// }
//     contenedor.innerHTML += `<p>su cantidad es ${cantidad}</p>`;

// Imprime las letras del alfabeto (usa String.fromCharCode()).
// for (let i = 65; i <= 90; i++) {
//   const letra = String.fromCharCode(i);
//   contenedor.innerHTML += `<p>${letra}</p>`;
// }

// 🟡 Nivel 2: Intermedio (21–60)
// Objetivo: aplicar for en arreglos y lógica matemática.

// Recorrer un array y mostrar cada elemento.
// for (let i = 0; i < numeros.length; i++) {
//     const element = numeros[i];
//     contenedor.innerHTML += `<p>${element}</p>`;
// }

// Imprimir los índices de un array.
// for (let i = 0; i < numeros.length; i++) {
//   contenedor.innerHTML += `<p>${i}</p>`;
// }

// Sumar los elementos de un array de números.
// let sumaArray = 0;
// for (let i = 0; i < numeros.length; i++) {
//   sumaArray += numeros[i];
// }
// contenedor.innerHTML += `<p>${sumaArray}</p>`;

// Encontrar el número mayor de un array.
// let numeros = [10, 20, 30, 40, 50, 5, 80];
// let mayor = numeros[0];
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > mayor) {
//     mayor = numeros[i];
//   }
// }
// contenedor.innerHTML += `<p>${mayor}</p>`;

// Encontrar el número menor de un array.
// let numeroMenor = numeros[0];
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] < numeroMenor) {
//     numeroMenor = numeros[i];
//   }
// }
// contenedor.innerHTML += `<p>${numeroMenor}</p>`;

// Calcular el promedio de un array de notas.
// let numeros = [10, 20, 30, 40, 50, 5, 80];

// let suma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   suma += numeros[i];
// }
// let promedio = suma / numeros.length;
// contenedor.innerHTML += `<p>El promedio es ${promedio}</p>`;

// Contar cuántos elementos son mayores a 50.
// let contador = 0;
// for (let i = 0; i < numeros.length; i++) {
//      if(numeros[i] > 50) {
//         contador++;
//      }
// }
// contenedor.innerHTML += `<p>Hay ${contador} elementos mayores a 50</p>`;

// Copiar un array en otro usando for.
// let numeros = [10, 20, 30, 40, 50, 5, 80];
// let arrayCopia = [];
// for(let i = 0; i< numeros.length; i++){
//     arrayCopia.push(numeros[i]);
// }
// contenedor.innerHTML += `<p>Array original: ${numeros}</p>`;
// contenedor.innerHTML += `<p>Array copiado: ${arrayCopia}</p>`;

// // Invertir un array sin .reverse().
// let arrayInvertido = [];
// for (let i = numeros.length - 1; i >= 0; i--) {
//     arrayInvertido.push(numeros[i]);
// }
// contenedor.innerHTML += `<p>Array invertido: ${arrayInvertido}</p>`;

// Crear un nuevo array con los elementos duplicados.
// let numeros = [10, 3, 4, 6, 20, 30, 40, 50, 5, 80];
// let arrayDuplicado = [];
// for (let i = 0; i < numeros.length; i++) {
//   arrayDuplicado.push(numeros[i], numeros[i]);
//   console.log(arrayDuplicado);
// }
// contenedor.innerHTML += `<p>Array duplicado: ${arrayDuplicado}</p>`;

// Filtrar los elementos pares de un array.
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     contenedor.innerHTML += `<p>Array pares: ${numeros[i]}</p>`;
//   }
// }

// Multiplicar todos los valores de un array por 2.
// let arrayN=[];

// for (let i = 0; i < numeros.length; i++) {
//   arrayN.push(numeros[i] * 2)
// }
//     contenedor.innerHTML += `<p>por 2: ${arrayN}</p>`;

// Mostrar los elementos de un array al revés.
// let numeros = [10, 3, 4, 6, 20, 30, 40, 50, 5, 80];

// let contador = [];
// for (let i = numeros.length-1; i >= 0; i--) {
//   contador.push([numeros[i]]);
// }
//    contenedor.innerHTML += `<p>al reves: ${contador}</p>`;

// for (let i = numeros.length-1; i >= 0; i--) {
//    contenedor.innerHTML += `<p>al reves: ${numeros[i]}</p>`;

// }

// Mostrar los elementos que contienen la letra "a".
// let numeros = ["mango", "pera", "coco", "mora", "cacao"];
// for (let i = 0; i < numeros.length; i++) {
//   let palabra = numeros[i];
//   for (let j = 0; j < palabra.length; j++) {
//     if (palabra[j] === "a") {
//       console.log(palabra);
//       contenedor.innerHTML += `<p>filtrado : ${palabra}</p>`;
//     }
//   }
// }

// const palabrasa = numeros.filter((p) => p.includes("a"));
// console.log(palabrasa);
// palabrasa.map((p)=>{contenedor.innerHTML +=`<p>filtrado : ${p}</p>`})

// Contar cuántos elementos son mayores que 0.
// let numeros = [10, -3, 4, 6, 20, 30, -40, 50, -5, 80];

// let contador = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 0) {
//     contador++;
//     contenedor.innerHTML += `<p>mayores : ${numeros[i]}</p>`;
//   }
// }
// contenedor.innerHTML += `<p>total : ${contador}</p>`;

// Sumar los elementos en posiciones pares.
// let numeros = [10, 3, 4, 6, 20, 30, 40, 50, 5, 80];
// let sumar = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (i % 2===0) {
//     sumar = sumar + numeros[i]
// contenedor.innerHTML += `<p>totalsumado : ${sumar}, posiscion: ${i}, numero : ${numeros[i]}</p>`;

//   }
// }
// contenedor.innerHTML += `<p>total : ${sumar}</p>`;

// let sumarPares = numeros.reduce((acc, val, i) => {
//   return i % 2 === 0 ? acc + val : acc;

// }, 0);
//   contenedor.innerHTML += `<p>totalsumado : ${sumarPares}</p>`;

// Eliminar los elementos negativos de un array.
// let numeros1 = [10, -3, 4, 6, 20, 30, -40, 50, -5, 80];
// const nArray = [];
// for (let i = 0; i < numeros1.length; i++) {
//   if (numeros1[i] > 0) {
//     nArray.push(numeros1[i]);
//   }
// }
//     console.log(nArray);

// let nArray1 = numeros1.filter((num) => {
//   return num >= 0;
// });
// console.log(nArray1);

// Dado un array de strings, mostrar los que tienen más de 5 caracteres.
// let frutas = ["mangos", "peras", "cocos", "moras", "cacauate"];

// for (let i = 0; i < frutas.length; i++) {
//   if (frutas[i].length > 5) {
//     contenedor.innerHTML += `<p>frutas>5 : ${frutas[i]}</p>`;
//   }
// }
// let palabrasLargas = frutas.filter((palabra) => palabra.length > 5);
// palabrasLargas.forEach(palabraLarga => contenedor.innerHTML += `<p>frutas>5 : ${palabraLarga}</p>`)

// Verificar si un número existe en un array (sin .includes()).
// let numeros1 = [10, -3, 4, 6, 20, 30, -40, 50, -5, 80];
// for (let i = 0; i < numeros1.length; i++) {
//   if (numeros1[i] === 6) {
//     console.log(`el numero ${numeros1[i]} esta en el array`);
//   }
// }

// Crear un array con los cuadrados de otro.
// let newArray = [];
// for (let i = 0; i < numeros1.length; i++) {
//   newArray.push(numeros1[i] * numeros1[i]);
// }
// console.log(newArray);

// Contar cuántas veces se repite un número específico.
// let numeros1 = [10, -3, 6, 6, 20, 30, -40, 6, 5, 80];
// let contador =0;
// for(let i=0; i <numeros1.length;i++){
//   if (numeros1[i] === 6) {
//     contador++
//     console.log(contador);

//   }
// }

// Comparar dos arrays y mostrar los elementos comunes.
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [6, 4, 5, 6, 7, 3, 9, 8];
// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {

//       console.log(array1[i]);
//     }
//   }
// }

// const array3= array2.filter(item=> array1.includes(item))
// console.log(array3);

// Concatenar dos arrays sin usar .concat().
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [6, 4, 5, 6, 7, 3, 9, 8];
// let newArray = [];
// for (let i = 0; i < array1.length; i++) {
//   newArray.push(array1[i]);
// }
// for (let j = 0; j < array2.length; j++) {
//   newArray.push(array2[j]);
// }

// console.log(newArray);

// let arr = [...array1];
// arr.push(...array2);
// console.log(arr);

// let arraySpread = [...array1, ...array2];
// console.log(arraySpread);

// Sumar las diagonales de una matriz 3x3.
// const matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // ↙ principal: 1 + 5 + 9 = 15
// // ↘ secundaria: 3 + 5 + 7 = 15

// let sumP = 0;
// let sumS = 0;
// matriz.forEach((fila, i) => {
//   sumP += fila[i];
//   sumS += fila[matriz.length - 1 - i];
// });

// console.log(sumP, sumS); // 15, 15

// Imprimir una matriz 3x3 en forma de tabla.

// Sumar los elementos de una matriz.

// Multiplicar los elementos de una matriz.

// Mostrar la diagonal principal de una matriz.

// Mostrar la diagonal inversa de una matriz.

// Contar cuántos ceros tiene una matriz.

// Crear una matriz identidad 3x3.

// Mostrar los elementos por columna.

// Crear una pirámide de asteriscos (5 líneas).

// Crear un triángulo rectángulo con #.

// Crear un patrón de números crecientes (1, 22, 333, etc.).

// Imprimir el patrón invertido de la pirámide.

// Dado un número, generar su secuencia factorial.

// Encontrar todos los números primos del 1 al 100.

// Mostrar si un número es primo.
// function isPrime(num) {
//   if (num <= 1) return false; // Los números <=1 no son primos
//   const limit = Math.sqrt(num);
//   for (let i = 2; i <= limit; i++) {
//     if (num % i === 0) return false; // Si es divisible, no es primo
//   }
//   return true; // Si no encontramos divisores, es primo
// }

// const numero = 17;
// if (isPrime(numero)) {
//   console.log(`${numero} es un número primo`);
// } else {
//   console.log(`${numero} no es primo`);
// }

// Generar los primeros 20 números de Fibonacci.
// const secuencia = [0, 1];
// for (let i = 2; i < 20; i++) {
//   secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
// }
// console.log(secuencia);

// 🔵 Nivel 3: Avanzado (61–100)
// Objetivo: lógica compleja, estructuras anidadas, objetos, y manipulación estructurada.

// Verifica si un array es palíndromo.
// const arr = [1, 2, 3, 2, 1];

// for (let i = 0; i < arr.length / 2; i++) {
//   if (arr[i] === arr[arr.length - 1 - i]) {
//     console.log("es palimdromo");
//   }else{
//     console.log("no es palimdromo");

//   }
// }

// // Ordenar un array manualmente (burbuja).
// let arr = [2, 9, 3, 8, 4, 0, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       // Intercambio temporal
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr); // [0,2,3,4,5,8,9]

// Contar vocales en un string usando for.
// const palabra = "hola";
// const vocales = "aeiou";
// let contador = 0;
// for (let i = 0; i < palabra.length; i++) {
//   if(vocales.includes(palabra[i])){
//     contador++
//   }
// }
// console.log(contador);

// Convertir una cadena a mayúsculas sin .toUpperCase().

// let minusculas = "abcdefghijklmnopqrstuvwxyz";
// let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let palabra = "camilo";
// let resultado = "";

// for (let i = 0; i < palabra.length; i++) {
//   let letra = palabra[i];

//   for (let j = 0; j < minusculas.length; j++) {
//     if (letra === minusculas[j]) {
//       resultado += mayusculas[j];
//     }
//   }
// }
// console.log(resultado);

// Contar cuántas veces aparece cada letra en una cadena.
// let letras = "abcdefghijklmnopqrstuvwxyz";
// let cadena = "caaamilo";

// for (let i = 0; i < letras.length; i++) {
//   let letraActual = letras[i];
//   let contador = 0;

//   for (let j = 0; j < cadena.length; j++) {
//     if (cadena[j] === letraActual) {
//       contador++;
//       console.log(`${cadena[j]} = ${contador}`);
//     }
//   }
// }

// Crear un objeto con el conteo de elementos en un array.
// let frutas = ["manzana", "pera", "manzana", "uva", "pera", "pera"];
// let conteo = {};

// for (let i = 0; i < frutas.length; i++) {
//   let fruta = frutas[i];
//   if (conteo[fruta]) {
//   conteo[fruta] += 1;
// } else {
//   conteo[fruta] = 1;
// }

// }
// console.log(conteo);

// Dado un objeto, recorrer todas sus claves.

// let persona = {
//   nombre: "Camilo",
//   edad: 25,
//   ciudad: "Bogotá"
// };

// for (const key in persona) {
//   console.log(`${key} = ${persona[key]}`);

// }
// Dado un array de objetos, mostrar los nombres.
// let personas = [
//   { nombre: "Camilo", edad: 25 },
//   { nombre: "Laura", edad: 30 },
//   { nombre: "Carlos", edad: 22 }
// ];
// for (let i = 0; i < personas.length; i++) {
//   let element = personas[i];
//   console.log(element.nombre);

// }

// Calcular el promedio de notas de un array de objetos.
// let estudiantes = [
//   { nombre: "Camilo", nota: 4.5 },
//   { nombre: "Laura", nota: 3.8 },
//   { nombre: "Carlos", nota: 4.2 },
// ];
// let sumar = 0;

// for (let i = 0; i < estudiantes.length; i++) {
//   let element = estudiantes[i];
//   sumar += element.nota;
// }
// let promedio = sumar / estudiantes.length;
// contenedor.innerHTML +=`<p>${promedio}</p>`;

// Encontrar el objeto con el valor más alto.}
// let estudiantes = [
//   { nombre: "Camilo", nota: 4.5 },
//   { nombre: "Laura", nota: 3.8 },
//   { nombre: "Carlos", nota: 4.2 },
// ];

// let mayor = estudiantes[0];
// for (let i = 1; i < estudiantes.length; i++) {
//   if (estudiantes[i].nota > mayor.nota) {
//     mayor = estudiantes[i].nota;
//   }
// }
// console.log(mayor);

// Sumar los valores de un array de objetos.
// let productos = [
//   { nombre: "Camisa", precio: 25000 },
//   { nombre: "Pantalón", precio: 40000 },
//   { nombre: "Zapatos", precio: 60000 },
// ];
// let sumar = 0;
// for (let i = 0; i < productos.length; i++) {
//   sumar += productos[i].precio;
// }
// console.log(sumar);

// Mostrar solo los objetos que cumplen una condición.
// let fitrados = [];
// let contador =0
// for (let i = 0; i < productos.length; i++) {
//   let producto = productos[i];
//   if (producto.precio > 30000 && producto.nombre.includes('a') ) {
//     fitrados.push(producto);
// contador ++

//   }
// }
// console.log(`${fitrados}, ${contador}`);

// Contar cuántos objetos cumplen con cierta propiedad.

// Buscar un objeto por su propiedad.
// let productos = [
//   { nombre: "Zapatos", precio: 70000 },
//   { nombre: "Camisa", precio: 25000 },
//   { nombre: "Pantalón", precio: 40000 },
//   { nombre: "Zapatos", precio: 60000 },
// ];
// function buscarPropiedad(productos) {
//   for (let i = 0; i < productos.length; i++) {
//     if (productos[i].nombre === "Zapatos") {
//       return productos[i];
//     }
//   }
// }
// const pod = buscarPropiedad(productos);
// console.log(pod);

// Ordenar objetos por una propiedad numérica.

// for (let i = 0; i < productos.length - 1; i++) {
//   for (let j = 0; j < productos.length - 1 - i; j++) {
//     if (productos[j].precio > productos[j + 1].precio) {
//       let temp = productos[j];
//       productos[j] = productos[j + 1];
//       productos[j + 1] = temp;
//     }
//   }
// }
// console.log(productos);

// Crear un nuevo array con una propiedad de cada objeto.
// let element=[]
// for (let i = 0; i < productos.length; i++) {
//   element.push(productos[i].nombre);

// }
// console.log(element);

// Actualizar los valores de los objetos según condición.
// for (let i = 0; i < productos.length; i++) {
//   let producto = productos[i];
//   if (producto.precio > 40000) {
//     producto.precio = productos[i].precio*1.1
//   }

// }
// console.log(productos);

// Eliminar objetos que no cumplen una condición.
// let productos = [
//   { nombre: "Camisa", precio: 25000 },
//   { nombre: "Pantalón", precio: 40000 },
//   { nombre: "Zapatos", precio: 60000 },
// ];

// let arr = [];
// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].precio < 40000) {
//     arr.push(productos[i])
//   }
// }
// console.log(arr);

// Crear un nuevo array con objetos filtrados.

let productos = [
  { nombre: "Camisa", precio: 25000 },
  { nombre: "Pantalón", precio: 40000 },
  { nombre: "Zapatos", precio: 60000 }
];


let filtrado = productos.filter(prod => prod.nombre.includes('s'))

console.log(filtrado);


// Convertir un array de claves y valores en objeto.

// Crear una tabla HTML desde un array de objetos (texto plano).

// Crear una lista ordenada de nombres.

// Crear un patrón de matriz creciente:

// Copiar
// Editar
// 1 2 3
// 4 5 6
// 7 8 9
// Detectar duplicados en un array.

// Separar en dos arrays: números pares e impares.

// Dado un array de strings, convertir cada palabra a capitalizada.

// Contar cuántas palabras tienen más de 8 letras.

// Ordenar los strings alfabéticamente sin .sort().

// Dado un texto, contar cuántas palabras tiene.

// Simular el cambio de monedas (greedy).

// Simular un inventario con objetos.

// Buscar un producto por nombre.

// Sumar precios totales de un carrito.

// Aplicar descuentos según condiciones.

// Buscar productos por rango de precio.

// Agrupar objetos por una propiedad.

// Crear un ranking de estudiantes por promedio.

// Simular transferencias entre cuentas (saldo).

// Calcular el impuesto total de una lista de facturas.

// Generar una tabla de multiplicar completa del 1 al 10 (anidado).
