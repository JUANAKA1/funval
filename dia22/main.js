// import { suma, resta, multiplicacion, division, renderizarCars } from "./funciones.js";
// import { cliente } from "./data.js";
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

// let lista = document.querySelector("#lista-clientes");
// for (let i = 0; i < cliente.length; i++) {
//   renderizar(cliente[i], lista);
// }

// for (let j = 0; j < cliente.length; j++) {
//     renderizarCars(cliente[j], lista)
// }

// guardar elementos en localstorage

// localStorage.setItem("nombre", "juan");
// localStorage.setItem("nombre1", "felipe");
// localStorage.setItem("nombre2", "bastian");

// console.log(localStorage.getItem("nombre"));

// eliminar elementos
// localStorage.removeItem("nombre");

// limpiar elemantos
// localStorage.clear();

// guardar arrays y objetos
// let notas = [2, 3, 4, 5, 6];

// let estudiantes = [
//   {
//     nombre: "juan",
//     edad: 27,
//     pais: "colombia",
//   },
//   {
//     nombre: "pedro",
//     edad: 20,
//     pais: "chile",
//   },
// ];
// // convertir el objeto a un string
// localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
// // acceder al objeto y convertirlo en objeto
// console.log(JSON.parse(localStorage.getItem('estudiantes')));

// localStorage.clear();
let libros = [
  {
    id: 1,
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    year: 1967,
  },
  {
    id: 2,
    nombre: "1984",
    autor: "George Orwell",
    year: 1949,
  },
  {
    id: 3,
    nombre: "Orgullo y prejuicio",
    autor: "Jane Austen",
    year: 1813,
  },
];
// localStorage.setItem("books", JSON.stringify(libros));

let tabla = document.querySelector("#tabla");
let arrayNuevo = JSON.parse(localStorage.getItem("books"));

function renderizarLibros(libros) {
  tabla.innerHTML = "";
  for (let i = 0; i < libros.length; i++) {
    tabla.innerHTML += `<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${libros[i].nombre}
                </th>
                <td class="px-6 py-4">
                    ${libros[i].autor}
                </td>
                <td class="px-6 py-4">
                    ${libros[i].year}
                </td>

                <td class="px-6 py-4">
                    <button class="bg-blue-600 text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-500" id="${libros[i].id}">Eliminar</button>
                </td>
            </tr>`;
  }
}
renderizarLibros(arrayNuevo);

let btn = document.querySelector("#btn");
let modal = document.querySelector("#modalsito");
let closeModal = document.querySelector("#close");
let formulario = document.querySelector("#formulario");

btn.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
});
closeModal.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(formulario);
  const name = data.get("nameBook");
  const autor = data.get("nameAutor");
  const year = data.get("yearPublic");

  let nuevoLibro = {};
  nuevoLibro.nombre = name;
  nuevoLibro.autor = autor;
  nuevoLibro.year = year;

  let arrayLocal = JSON.parse(localStorage.getItem("books"));
  nuevoLibro.id = arrayLocal.length + 1;
  arrayLocal.push(nuevoLibro);
  console.log(arrayLocal);

  renderizarLibros(arrayLocal);
  localStorage.setItem("books", JSON.stringify(arrayLocal));

  modal.classList.add("hidden");
});

tabla.addEventListener("click", (e) => {
  let idBoton = e.target.id;
  let arrayLocal = JSON.parse(localStorage.getItem("books"));
  let arrayLocal2 = [];
  for (let i = 0; i < arrayLocal.length; i++) {
    if (idBoton != arrayLocal[i].id) {
      arrayLocal2.push(arrayLocal[i]);
    }
  }
  renderizarLibros(arrayLocal2)
  localStorage.setItem("books", JSON.stringify(arrayLocal2));

});
